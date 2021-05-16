(async function () {
  const searchParams = new URLSearchParams(window.location.search)
  const theme = searchParams.get('theme') || 'default'
  const toastOnly = searchParams.get('toast') || 'false'

  // Add theme CSS
  const css = document.createElement('link')
  css.setAttribute('rel', 'stylesheet')
  css.setAttribute('href', theme + '/' + theme + '.css')
  document.getElementsByTagName('head')[0].appendChild(css)

  // Theme selector
  const themeSelector = document.querySelector('#theme-selector')
  let themeOption = themeSelector.querySelector('option[value="' + theme + '"]')
  if (!themeOption) {
    themeOption = document.createElement('option')
    themeOption.setAttribute('value', theme)
    themeOption.setAttribute('selected', true)
    themeOption.innerHTML = theme
    themeSelector.appendChild(themeOption)
  }
  themeSelector.querySelector('[value="' + theme + '"]').setAttribute('selected', true)
  themeSelector.addEventListener('change', () => {
    searchParams.set('theme', themeSelector.value);
    window.location.search = searchParams.toString();
  })

  // Toast only viewer
  document.getElementById('toast-only').addEventListener('change', function() {
    searchParams.set('toast', this.checked);
    window.location.search = searchParams.toString();
  })

  if (toastOnly == 'true') {
    document.getElementById('toast-only').checked = true
    const swalMixin = Swal.mixin({ title: 'Settings updated.', toast: true, timer: 3000 })
    await swalMixin.fire()
    await swalMixin.fire({ position: 'bottom-start', timer: 10000, timerProgressBar: true, icon: 'success' })
    await swalMixin.fire({ position: 'bottom', showCancelButton: true })
    await swalMixin.fire({ position: 'bottom-end', showConfirmButton: false, icon: 'success', title: 'Lorem ipsum dolor sit amet' })
    await swalMixin.fire({ position: 'top-end', icon: 'info' })
    await swalMixin.fire({ position: 'top', icon: 'warning' })
    await swalMixin.fire({ position: 'bottom', icon: 'error', showConfirmButton: false })
    await swalMixin.fire({ position: 'bottom', icon: 'question' })
    return
  }

  // Add a title and caption to override the defaults
  const title = '' || theme
  const caption = ''

  const swalMixin = Swal.mixin({ title: title })
  // Popup Type
  await Swal.fire(title, caption ? caption : 'Caption!')
  await Swal.fire(title, caption ? caption : 'success!', 'success')
  await Swal.fire(title, caption ? caption : 'error!', 'error')
  await Swal.fire(title, caption ? caption : 'question!', 'question')
  await Swal.fire(title, caption ? caption : 'warning!', 'warning')
  await Swal.fire(title, caption ? caption : 'info!', 'info')
  await Swal.fire(title, caption ? caption : 'question!', 'question')

  // Buttons
  await swalMixin.fire({showCancelButton: true, showDenyButton: true})
  await swalMixin.fire({footer: 'footer' })
  await swalMixin.fire({ text: 'Check close Button',  showCloseButton: true })

  // Input types
  await swalMixin.fire({input: 'text', })
  await swalMixin.fire({input: 'password' })
  await swalMixin.fire({input: 'textarea' })
  await swalMixin.fire({
    input: 'select',
    inputOptions: {
      'apples': 'Apples',
      'bananas': 'Bananas',
      'grapes': 'Grapes',
      'oranges': 'Oranges'
    },})
  await swalMixin.fire({
    input: 'radio',
    inputOptions: {
      '#ff0000': 'Red',
      '#00ff00': 'Green',
      '#0000ff': 'Blue'
    },})
  await swalMixin.fire({
    input: 'checkbox',
    inputValue: 1,
    inputPlaceholder: 'I agree with the terms and conditions'
  })
  await swalMixin.fire({input: 'file' })
  await swalMixin.fire({input: 'range' })

  // Progress steps
  Swal.fire({
    input: 'text',
    progressSteps: ['1', '2', '3'],
    currentProgressStep: 0
  })

})()
