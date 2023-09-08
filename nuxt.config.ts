export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/global.scss"],
  modules: [
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: [400, 700],
        },
      },
    ],
  ],
  colorMode: {
    preference: "system",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  image: {
    screens: {
      xs: 360,
      sm: 575,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});
