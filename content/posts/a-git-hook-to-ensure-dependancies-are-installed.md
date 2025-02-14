---
title: A Git hook to ensure dependancies are installed
date: 2013-03-02
draft: true
---

I was fiddling with Django today, I updated an app's model.py and it had
new imports. A necessary part of ensuring those new files are being used
is restarting the uWSGI service. That's simple enough with service uwsgi
restart but what I had failed to do was a `pip install -Ur
prod-requirements.txt` after I had done a git pull to ensure that I had
all my dependancies installed.

<!--more-->

So after restarting uWSGI I had errors in
my app's log file like so:

```bash
(venv)root@web01:/usr/share/nginx/sog# tail -f /var/log/uwsgi/sog.log
 File "/usr/share/nginx/sog/venv/local/lib/python2.7/site-packages/django/db/models/loading.py", line 67, in _populate
      self.load_app(app_name)
 File "/usr/share/nginx/sog/venv/local/lib/python2.7/site-packages/django/db/models/loading.py", line 88, in load_app
      models = import_module('.models', app_name)
 File "/usr/share/nginx/sog/venv/local/lib/python2.7/site-packages/django/utils/importlib.py", line 35, in import_module
      __import__(name)
 File "/usr/share/nginx/sog/web_site/Community/models.py", line 9, in <module>
     import slugify
 ImportError: No module named slugify
```

This was easy enough to address, but it irked me that I had forgotten.
How could I ensure that I never forget again?

## Script it

```bash
#!/bin/sh
if [ $(git diff HEAD@{1} HEAD --name-only | grep -E
'base-requirements|prod-requirements' -c) -ne 0 ]
then
    $VIRTUAL_ENV/bin/pip install -Ur prod-requirements.txt
fi
```

Essentially what the above is doing, is doing a git diff, grep'ing to
see if my base-requirements or prod-requirements files changed, and if
they did, doing a pip install prod-requirements (which includes
base-requirements) to ensure that all my dependancies are met/installed.

## Where does this script live

It exists in my `{WORKSPACE}/.git/hooks/post-merge`

## How does it work

I simply do a git pull and here is the magic!

```bash
(venv)root@web01:/usr/share/nginx/sog# git pull
remote: Counting objects: 5, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 2), reused 0 (delta 0)
Unpacking objects: 100% (3/3), done.
From bitbucket.org:esacteksab/sog-ws-web
   8345bce..2f19121  master     -> origin/master
Updating 8345bce..2f19121
Fast-forward
    base-requirements.txt |    2 ++
     1 file changed, 2 insertions(+)
Requirement already up-to-date: Django==1.4.5 in
     ./venv/lib/python2.7/site-packages (from -r base-requirements.txt
     (line 4))
Requirement already up-to-date: Pillow==1.7.7 in
     ./venv/lib/python2.7/site-packages (from -r base-requirements.txt
     (line 5))
Requirement already up-to-date: argparse==1.2.1 in /usr/lib/python2.7
     (from -r base-requirements.txt (line 6))
Requirement already up-to-date: django-appconf==0.5 in
     ./venv/lib/python2.7/site-packages (from -r base-requirements.txt
     (line 7))
Requirement already up-to-date: django-forms-bootstrap==2.0.3.post1 in
     ./venv/lib/python2.7/site-packages (from -r base-requirements.txt
     (line 8))
Requirement already up-to-date: django-thumbs==0.4 in
     ./venv/lib/python2.7/site-packages (from -r base-requirements.txt
     (line 9))
Requirement already up-to-date: django-user-accounts==1.0b1 in
     ./venv/lib/python2.7/site-packages (from -r base-requirements.txt
     (line 10))
Requirement already up-to-date: metron==1.0 in
     ./venv/lib/python2.7/site-packages (from -r base-requirements.txt
     (line 11))
Requirement already up-to-date: pinax-theme-bootstrap==2.0.4 in
     ./venv/lib/python2.7/site-packages (from -r base-requirements.txt
     (line 12))
Requirement already up-to-date: pinax-theme-bootstrap-account==1.0b2
     in ./venv/lib/python2.7/site-packages (from -r base-requirements.txt
     (line 13))
Requirement already up-to-date: pinax-utils==1.0b1.dev3 in
     ./venv/lib/python2.7/site-packages (from -r base-requirements.txt
     (line 14))
Requirement already up-to-date: pytz==2012c in
     ./venv/lib/python2.7/site-packages (from -r base-requirements.txt
     (line 15))
Requirement already up-to-date: wsgiref==0.1.2 in /usr/lib/python2.7
     (from -r base-requirements.txt (line 16))
Requirement already up-to-date: South==0.7.6 in
     ./venv/lib/python2.7/site-packages (from -r base-requirements.txt
     (line 17))
Requirement already up-to-date: django-crispy-forms==1.1.4 in
     ./venv/lib/python2.7/site-packages (from -r base-requirements.txt
     (line 18))
Requirement already up-to-date: django-floppyforms==1.0 in
     ./venv/lib/python2.7/site-packages (from -r base-requirements.txt
     (line 19))
Requirement already up-to-date: py-bcrypt==0.2 in
     ./venv/lib/python2.7/site-packages (from -r base-requirements.txt
     (line 20))
Requirement already up-to-date: unicode-slugify==0.1 in
     ./venv/lib/python2.7/site-packages (from -r base-requirements.txt
     (line 21))
Requirement already up-to-date: psycopg2==2.4.5 in
     ./venv/lib/python2.7/site-packages (from -r prod-requirements.txt
     (line 3))
Requirement already up-to-date: python-memcached==1.48 in
     ./venv/lib/python2.7/site-packages (from -r prod-requirements.txt
     (line 4))
Cleaning up...
```

It simply does the git pull then runs post-merge sequentially.

I'm failing to see how this is a bad thing...but if you've had a bad
experience with a similar hook, I'd like to know so it doesn't bite me
in the ass!
