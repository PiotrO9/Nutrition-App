export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: [300, 400, 500, 700],
          Raleway: [300, 500, 700],
        },
      },
    ],
  ],
  css: ["@/assets/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
              @import "@/assets/styles/mixins.scss";
              @import "@/assets/styles/fonts.scss";
              @import "@/assets/styles/breakpoints.scss";
              @import "@/assets/styles/variables.scss";
            `,
        },
      },
    },
  },
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
