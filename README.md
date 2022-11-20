# @sweetalert2/themes - Official Themes for [SweetAlert2](https://github.com/sweetalert2/sweetalert2)

[![npm version](https://img.shields.io/npm/v/@sweetalert2/themes.svg)](https://www.npmjs.com/package/@sweetalert2/themes)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/sweetalert2/sweetalert2-themes/blob/main/CHANGELOG.md)

## Available themes

- [`Dark`](https://github.com/sweetalert2/sweetalert2-themes/tree/main/dark)
- [`Minimal`](https://github.com/sweetalert2/sweetalert2-themes/tree/main/minimal)
- [`Borderless`](https://github.com/sweetalert2/sweetalert2-themes/tree/main/borderless)
- [`Bootstrap 4`](https://github.com/sweetalert2/sweetalert2-themes/tree/main/bootstrap-4)
- [`Material UI`](https://github.com/sweetalert2/sweetalert2-themes/tree/main/material-ui)
- [`WordPress Admin`](https://github.com/sweetalert2/sweetalert2-themes/tree/main/wordpress-admin)
- [`Bulma`](https://github.com/sweetalert2/sweetalert2-themes/tree/main/bulma)
- [`Default`](https://github.com/sweetalert2/sweetalert2-themes/tree/main/default)

## Installation

You can install all themes at once:

```sh
npm install --save @sweetalert2/themes
```

Or just a single theme `@sweetalert2/theme-<theme_name>`, e.g.

```sh
npm install --save @sweetalert2/theme-dark
```

Or grab them both from [jsdelivr CDN](https://cdn.jsdelivr.net/npm/@sweetalert2/themes), for example:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@5/dark.css" />
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>
```

## Usage

With CSS:

```html
<!-- Include a required theme -->
<link rel="stylesheet" href="@sweetalert2/themes/dark/dark.css" />

<script src="sweetalert2/dist/sweetalert2.min.js"></script>
```

With SASS:

`your-app.js`:

```js
import Swal from 'sweetalert2/dist/sweetalert2.js';
```

`your-app.scss`:

```scss
@import '@sweetalert2/themes/dark/dark.scss';
```

## Contributing

If you would like to contribute enhancements or fixes, please do the following:

1. Fork the `sweetalert2-themes` repository and clone it locally.

2. When in the `sweetalert2-themes` directory, run `yarn install` to install dependencies.

3. To begin active development, run `yarn start` and `yarn watch` simultaneously.

4. Or, if you want to quickly start a new theme, run `yarn create-new-theme my-awesome-theme`. This will create the theme's default files.

## Donations

Has SweetAlert2 helped you create an amazing application? You can show your support by making a donation:

- [GitHub Sponsors :heart:](https://github.com/sponsors/limonte)
- [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TKTWHJGUWLR7E)

### [Hall of Donators :trophy:](https://github.com/sweetalert2/sweetalert2/blob/main/DONATIONS.md)
