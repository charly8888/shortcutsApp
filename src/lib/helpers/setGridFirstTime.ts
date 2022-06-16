import { nanoid } from 'nanoid'
import { typesOfSlots } from '../../types'

export const setGridFirstTime = () => {
  const numerosDeGrillasMaximoALoAncho = Math.floor((window.innerWidth - 16 * 4) / (7 * 16))
  const numerosDeGrillasMaximoALoAlto = Math.floor(window.innerHeight / (7.5 * 16))
  const numeroDeGrillasMaximas = numerosDeGrillasMaximoALoAncho * numerosDeGrillasMaximoALoAlto
  const newarr: typesOfSlots[] = []

  for (let i = 0; i < numeroDeGrillasMaximas; i++) {
    const id = nanoid()
    newarr.push({ type: 'empty', id, primaryColor: '', secondaryColor: '' })
  }

  newarr[0] = {
    id: 'vnZ9JIKCPKbIx8kCdnvWG',
    type: 'shortcut',
    link: 'https://german-dev.netlify.app/',
    title: 'My web',
  }

  newarr[1] = {
    id: 'LdDJEHxdHhRmad-YH50EQ',
    type: 'folder',
    primaryColor: '#7ac044',
    secondaryColor: '#69ab3c',
    title: 'CONFIG',
    slots: [
      {
        id: 'fHEgLxfF19Ki0BUbB4prY',
        type: 'text',
        primaryColor: '#43c5df',
        secondaryColor: '#00aedc',
        title: 'Chrome',
        slots: [],
        text: 'First of all you need to install the next extension "https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna"\n\nThen open the extension and paste the URL of this site in the "Redirect URL" field and you\'re done!!!!',
      },
      {
        id: 'Ca1oPH_h9VG1Kn03K1hM-',
        type: 'text',
        primaryColor: '#f1772c',
        secondaryColor: '#da6317',
        title: 'Firefox',
        slots: [],
        text: 'First of all you need to install the next extension --->  https://addons.mozilla.org/es/firefox/addon/new-tab-override/ \n\nThen open the extension and paste the URL of this site in the "URL" field and you\'re done!!!!',
      },
      {
        id: 'cONhCYu3b1ezyqs-ayKW9',
        type: 'shortcut',
        link: 'https://chrome.google.com/webstore/detail/new-tab-redirect/icpgjfneehieebagbmdbhnlpiopdcmna?hl=es',
        title: 'Chrome',
        primaryColor: '',
        secondaryColor: '',
      },
      {
        id: 'nwRynMItteMvdBx6kV72V',
        type: 'shortcut',
        link: 'https://addons.mozilla.org/es/firefox/addon/new-tab-override/',
        title: 'Firefox',
        primaryColor: '',
        secondaryColor: '',
      },
    ],
  }

  newarr[2] = {
    id: 'InZ62Db4zJhKoO0DNDiIC',
    type: 'text',
    primaryColor: '#ffca28',
    secondaryColor: '#ffa000',
    title: 'README',
    slots: [],
    text: 'Hello! :\n\n    When I needed to open a new tab, I had to go to the bookmarks bar and dive between sections and folders. The idea was to create a website that you configure in your browser so that it opens by default when you open a new tab and shows you your favorite sites. the web saves everything in the localStorage of the browser.\n\n\n    In the config folder, I have created notes explaining how to configure the web to open by default when opening a new tab in the browser.\n\n\nPossible future features:\n\n    - Calculator\n    - Resize and move windows \n    - Save media  (using IndexedDB)\n    - Import/export data\n    - Improve the text application \n    - Themes and your own customization, such as font, background image, colors, etc.',
  }
  return newarr
}
