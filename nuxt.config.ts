export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/global.scss"],
  modules: ["@nuxtjs/color-mode"],
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
});
