export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@nuxtjs/supabase",
    "@nuxt/image",
    "@pinia/nuxt",
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
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
  },
});
