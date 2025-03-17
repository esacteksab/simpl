# Simpl

Not a unique name I know.

> [!WARNING]
>
> - **_NOT READY FOR PUBLIC CONSUMPTION_**
> - This is an experiment creating a Hugo theme.
> - This is my first time creating a theme.
> - This is my first time navigating Hugo modules.

## Features

- Work in progress.
- It's pretty barebones.
- TailwindCSS v4.
- Has Dark and Light Mode based on system settings.
- Mobile'ish.
- There has been some attention paid to a11y, but it may still fall short while I work through things.
- Early attempts at i18n.

## Installation

```bash
mkdir my-new-blog

hugo new site my-new-blog
```

Clone this repository and copy the contents of `themes` to `my-new-blog/themes/simpl`.

Edit `hugo.toml`

```toml
baseURL = 'https://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'
theme = 'simpl'
```

This theme requires TailwindCSS, copy the `package.json`, `tailwind.config.js` to `my-new-blog`. Install packages. **There may be things you _don't_ want. Edit `package.json` accordingly.

```bash
npm i
```

Then build/serve with `hugo`

```bash
hugo
hugo serve -D
```

## Configuration

I'm not sure. Still learning.

### Menu

By default, the site displays `Home`, `Posts` and `Tags`. You can override this in your `hugo.toml` with `[[menus.main]]`.

If you want no items in the menu:

```toml
baseURL = 'https://esacteksab.com/'
languageCode = 'en-us'
title = 'esacteksab'
theme = 'simpl'

[[menus.main]]
```

If you want `Home` and `Posts`. You can add others and change the `weight` to define the order in which they're displayed.

```toml
baseURL = 'https://esacteksab.com/'
languageCode = 'en-us'
title = 'esacteksab'
theme = 'simpl'

[[menus.main]]
  name = 'Home'
  pageRef = '/'
  weight = 10

[[menus.main]]
  name = 'Posts'
  pageRef = '/posts'
  weight = 20
```

### Favicon

The site by default tries to load some missing files related to [favicon](https://developer.mozilla.org/en-US/docs/Glossary/Favicon). I use [favicon.io](https://favicon.io/) to convert an existing PNG to ico. They provide you with a `.zip` that contains the files you need.

```bash
ls favicon_io
android-chrome-192x192.png
android-chrome-512x512.png
apple-touch-icon.png
favicon.ico
favicon-16x16.png
favicon-32x32.png
site.webmanifest
```

You can put these in your `static` dir and they will exist where they should.
