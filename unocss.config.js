import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        'display': 'inline-block',
        'cursor': 'pointer',
        'font-size': '20px',
      },
    }),
    presetRemToPx({
      baseFontSize: 4,
    }),
  ],
  include: [/\.vue$/, /\.js$/],
})
