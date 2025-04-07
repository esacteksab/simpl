# Simpl

Not a unique name I know.

> [!WARNING]
> - **_NOT READY FOR PUBLIC CONSUMPTION_** <!-- markdownlint-disable MD032 -->
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

hugo mod init github.com/org/repo
```

Edit `hugo.toml`

```toml
languageCode = 'en-us'
baseURL = 'https://example.com/'
title = 'My Simpl Themed Site'

[[menus.main]]

[params.Author]
github = 'username'
name = 'name'

[build]
_merge = 'deep'

[markup]
_merge = 'deep'

[module]
[[module.imports]]
path = "github.com/esacteksab/simpl"
```

This theme requires [TailwindCSS](https://gohugo.io/functions/css/tailwindcss/), and [PostCSS](https://gohugo.io/functions/css/postcss/) copy the `package.json`, `tailwind.config.js` and `postcss.config.js` from GitHub [esacteksab/simpl](https://github.com/esacteksab/simpl) to `my-new-blog`. Before we install packages, **_there may be things you don't_** want. Edit `package.json` accordingly. When ready, install the packages:

```bash
npm i
```

Then build/serve with `hugo`

```bash
hugo
hugo serve -D
```

### Menu

By default, the site displays `Home`, `Posts` and `Tags`. You can override this in your `hugo.toml` with `[[menus.main]]`.

If you want no items in the menu simply define an empty TOML table:

```toml
languageCode = 'en-us'
baseURL = 'https://example.com/'
title = 'My Simpl Themed Site'

[[menus.main]]
```

If you just want `Home` and `Posts`, you can do so like below:

```toml
baseURL = 'https://example.com/'
languageCode = 'en-us'
title = 'My Simpl Themed Site'

[[menus.main]]
  name = 'Home'
  pageRef = '/'
  weight = 10

[[menus.main]]
  name = 'Posts'
  pageRef = '/posts'
  weight = 20
```

You can add others and change the `weight` to define the order in which they're displayed. Hugo's documentation on [Menus](https://gohugo.io/configuration/menus/) is well written and should help you further.

### Social Media

The site uses a list of various social media platforms defined in [`social.toml`](https://github.com/esacteksab/simpl/blob/main/data/social.toml) in the theme's `data` directory.

In combination with some Hugo parameters. In your `hugo.toml` add the following:

```toml
[params.Author]
github = 'username'
gitlab = 'username'
linkedin = 'username'
```

These map to the declarations in `social.toml` mentioned above:

```toml
[[social_icons]]
    id = "github"
    url = "https://github.com/%s"
    title = "GitHub"
    icon = "fab fa-github"

[[social_icons]]
    id = "gitlab"
    url = "https://gitlab.com/%s"
    title = "GitLab"
    icon = "fab fa-gitlab"

[[social_icons]]
id = "linkedin"
url = "https://linkedin.com/in/%s"
title = "LinkedIn"
icon = "fab fa-linkedin"
```

The `username` above is mapped to `%s` if you're uncertain what the value should be.

### Favicon

The site by default tries to load some files related to [(MDN): favicon](https://developer.mozilla.org/en-US/docs/Glossary/Favicon) that don't exist in the `static` directory of the theme. I use [favicon.io](https://favicon.io/) to convert an existing PNG to ico. They provide you with a `.zip` that contains the files you need.

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

You can put these in your `static` dir and they will exist where they should when the site is built and published.

### Accent Colors

> [!CAUTION]
> This should be considered a beta feature, subject to change. Not likely to be deprecated though as I quite like it.

You can enable this by passing `Params.accentColor = '$color'` where `$color` doesn't necessarily need to be a color, just a string, but I choose `$color`. You do you.

```toml
[Params]
  accentColor = 'blue'
```

Then in `assets/css/blue.css` **notice** whatever `blue` is here is what you pass in the `Params.accentColor` above.

```css
@import "tailwindcss";

@media (prefers-color-scheme: dark) {
  :root {
    --accent-color: var(--color-sky-500);
  }
}

@media (prefers-color-scheme: light) {
  :root {
    --accent-color: var(--color-blue-700);
  }
}
```

Since this theme uses TailwindCSS, I choose to use their color patterns, but these values (`--color-blue-700` or `--color-sky-500`) don't need to be TailwindCSS values, you could pass any supported value here.

### GitInfo

You can display the [abbreviated hash](https://gohugo.io/methods/page/gitinfo/#abbreviatedhash) by setting `enableGitInfo = true` in `hugo.toml`. Additionally, you can pass `Params.gitURL = 'https://<your git repo here>'` like so to make this has a link to the commit:

```toml
[Params]
  gitURL = 'https://github.com/esacteksab/simpl'
```

### Deploying to Cloudflare Pages

Hugo's documentation on [Host and deploy](https://gohugo.io/host-and-deploy/) is pretty extensive. Cloudflare also publishes a [Hugo](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site/) specific guide.

I develop almost excusively on GitHub, so I use Cloudflare's [Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/).

A few things to note that I learned by trial and error:

- If you're using a custom domain, you will need to deploy _after_ you've configured custom domain. This ensures your stylesheets use the appropriate hostname.
- This theme was built with Hugo Extended Edition, so in Cloudflare, you can pass an environment variable `HUGO_VERSION` with a value of `0.145.0+extended` to ensure it uses the extended edition.

Any questions, please don't hesitate to open an Issue. I'm new to Hugo so we'll figure it out together!
