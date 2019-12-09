# @sweetalert2/theme-wordpress-admin - Wordpress-admin Theme for [SweetAlert2](https://github.com/sweetalert2/sweetalert2)

[![npm version](https://img.shields.io/npm/v/@sweetalert2/theme-wordpress-admin.svg)](https://www.npmjs.com/package/@sweetalert2/theme-wordpress-admin)

Installation
------------

```sh
npm install --save sweetalert2 @sweetalert2/theme-wordpress-admin
```

Usage
-----

With CSS:

```html
<!-- Include the Wordpress-admin theme -->
<link rel="stylesheet" href="@sweetalert2/theme-wordpress-admin/wordpress-admin.css">

<script src="sweetalert2/dist/sweetalert2.min.js"></script>
```

With SASS:

`your-app.js`:
```js
import Swal from 'sweetalert2/src/sweetalert2.js'
```

`your-app.scss`:
```scss
@import '~@sweetalert2/theme-wordpress-admin/wordpress-admin.scss';
```

Integration
------------

To more closely match the WordPress style toast messages, use the following to get started:

```js
var notify = Swal.mixin({
  toast: true,
  position: 'bottom-start',
  showConfirmButton: false,
  timer: 6000,
  onBeforeOpen: (toast) => {
    
    // Offset the toast message based on the admin menu size
    var dir = 'rtl' === document.dir ? 'right' : 'left'
    toast.parentElement.style[dir] = document.getElementById('adminmenu').offsetWidth + 'px'
  }
})
```

Further, when using icons you may wish to use [WordPress Dashicons](https://developer.wordpress.org/resource/dashicons/#editor-ul).

```js
notify.fire({
  icon: 'success',
  iconHtml: '<div class="dashicons dashicons-yes" style="transform: scale(3);"></div>',
  title: 'Settings updated.',
})
```
