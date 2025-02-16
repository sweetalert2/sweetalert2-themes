# @sweetalert2/theme-dark - Dark Theme for [SweetAlert2](https://github.com/sweetalert2/sweetalert2)

> [!CAUTION]
> **THIS PACKAGE IS DEPRECATED**, dark theme is now included in `sweetalert2` package itself:
> ```js
> Swal.fire({
>   theme: 'dark'
> })
> ```
>
> Also, `auto` theme is supported. `auto` will switch between `light` and `dark` based on user browser preference:
> ```js
> Swal.fire({
>   theme: 'auto'
> })
> ```

[![npm version](https://img.shields.io/npm/v/@sweetalert2/theme-dark.svg)](https://www.npmjs.com/package/@sweetalert2/theme-dark)

![](https://sweetalert2.github.io/images/themes-dark.png)

Installation
------------

```sh
npm install --save sweetalert2 @sweetalert2/theme-dark
```

Usage
-----

With CSS:

```html
<!-- Include the Dark theme -->
<link rel="stylesheet" href="@sweetalert2/theme-dark/dark.css">

<script src="sweetalert2/dist/sweetalert2.min.js"></script>
```

With SASS:

`your-app.js`:
```js
import Swal from 'sweetalert2/dist/sweetalert2.js';
```

`your-app.scss`:
```scss
@import '@sweetalert2/theme-dark/dark.scss';
```
