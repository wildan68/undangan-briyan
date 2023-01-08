import type { Config } from 'tailwindcss'
// theme config

const srcDir = <string>'.'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#5f27cd',
        'dark-primary': '#341f97'
      }
    }
  },
  plugins: [require("daisyui")],
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`
  ],
  daisyui: {
    darkTheme: false,
  },
}
