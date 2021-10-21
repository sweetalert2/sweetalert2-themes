# @sweetalert2/themes - Official Themes for [SweetAlert2](https://github.com/sweetalert2/sweetalert2)

[![npm version](https://img.shields.io/npm/v/@sweetalert2/themes.svg)](https://www.npmjs.com/package/@sweetalert2/themes)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/sweetalert2/sweetalert2-themes/blob/master/CHANGELOG.md)


Available themes
-----------------

- [`Dark`](https://github.com/sweetalert2/sweetalert2-themes/tree/master/dark)
- [`Minimal`](https://github.com/sweetalert2/sweetalert2-themes/tree/master/minimal)
- [`Borderless`](https://github.com/sweetalert2/sweetalert2-themes/tree/master/borderless)
- [`Bootstrap 4`](https://github.com/sweetalert2/sweetalert2-themes/tree/master/bootstrap-4)
- [`Material UI`](https://github.com/sweetalert2/sweetalert2-themes/tree/master/material-ui)
- [`WordPress Admin`](https://github.com/sweetalert2/sweetalert2-themes/tree/master/wordpress-admin)
- [`Bulma`](https://github.com/sweetalert2/sweetalert2-themes/tree/master/bulma)
- [`Default`](https://github.com/sweetalert2/sweetalert2-themes/tree/master/default)

Installation
------------

You can install all themes at once:

```sh
npm install --save sweetalert2 @sweetalert2/themes
```

Or just a single theme `@sweetalert2/theme-<theme_name>`, e.g.

```sh
npm install --save sweetalert2 @sweetalert2/theme-dark
```

Or grab them both from [jsdelivr CDN](https://cdn.jsdelivr.net/npm/@sweetalert2/themes), for example:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@3/dark.css">
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9/dist/sweetalert2.min.js"></script>
```

Usage
-----

With CSS:

```html
<!-- Include a required theme -->
<link rel="stylesheet" href="@sweetalert2/themes/dark/dark.css">

<script src="sweetalert2/dist/sweetalert2.min.js"></script>
```

With SASS:

`your-app.js`:
```js
import Swal from 'sweetalert2/src/sweetalert2.js'
```

`your-app.scss`:
```scss
@import 'sweetalert2/themes/dark/dark.scss';
```

Contributing
------------

If you would like to contribute enhancements or fixes, please do the following:

1. Fork the `sweetalert2-themes` repository and clone it locally.

2. Make sure you have [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed.

3. When in the `sweetalert2-themes` directory, run `npm install` or `yarn install` to install dependencies.

4. To begin active development, run `npm start` or `yarn start`. If you want to start with a specific theme _preselected_, use: `npm run start -- --theme <theme-name>` or `yarn start --theme <theme-name>`

5. Or, if you want to quickly start a new theme, run `npm run create-new-theme my-awesome-theme`. This will automatically start the server after creating the theme's default files. If you interrupt the server and want to restart it, use `npm run start -- --theme <theme-name>` or `yarn start --theme <theme-name>`


Donations
---------

Has SweetAlert2 helped you create an amazing application? You can show your support by making a donation:

- [GitHub Sponsors :heart:](https://github.com/sponsors/limonte)
- [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TKTWHJGUWLR7E)
- Bitcoin: `12BxefvPMtHePgfPRDL1SaZYSG4GwQmWoP`
- Ether: `0x36e2b10666e2c0dc343901895ba3697b5d3214d1`
- Bitcoin Cash: `qqxs402qszgwuue00gwxw996lzhpa8up2unqm0y46g`
- Stellar: `GBRS5KGFJO4OBUGW3TRQBIVXTM5YDS53DOSHGA3LKVE2YXKVKNVDONBP`

### [Hall of Donators :trophy:](https://github.com/sweetalert2/sweetalert2/blob/master/DONATIONS.md)
