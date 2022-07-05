const setTheme = (theme: string) => {
  function change(object) {
    Object.keys(object).forEach((key) => {
      const cssKey = `--${key}`
      const cssValue = object[key]
      document.body.style.setProperty(cssKey, cssValue)
      document.body.style.setProperty('color', 'var(--color-font)')
    })
  }
  switch (theme) {
    case 'dark':
      change({
        'color-primary': '#2b2929',
        'color-folder-background': '#2d3748',
        'color-folder-font': '#a0aec0',
        'background-edit-section': '#4c5265',
        'background-color-text': '#202124',
        'background-color-textarea': '#303134',
        'tertiary': '#9ca3af',

        'color-green': '#13b176',
        'color-red': '#ce3131',
        'color-gray': '#c9c6c6',
        'color-font': '#fff',

        'color-blue': '#a0ebff',
        'color-purple': '#dbceff',

        'color-lightgray': '#cfcfcf',
        'color-black': '#000000',
      })
      break
    case 'light':
      change({
        'color-primary': '#fff',
        'color-folder-background': '#f9fae5',
        'color-folder-font': '#19191a',
        'background-edit-section': '#cacbcc',
        'background-color-text': '#bec4d4',
        'background-color-textarea': '#b3b4b8',

        'tertiary': '#9ca3af',

        'color-red': '#ce3131',
        'color-green': '#13b176',
        'color-font': '#000',

        'color-blue': '#a0ebff',
        'color-purple': '#dbceff',

        'color-gray': '#454545',
        'color-lightgray': '#cfcfcf',
      })
      break
    default:
      break
  }
}

export default setTheme
