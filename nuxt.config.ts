import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  srcDir: "./src",
  typescript: { typeCheck: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate",
    "@vee-validate/nuxt",
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  ssr: false,

  css: ["~/assets/css/main.css"],

  imports: {
    dirs: ["api", "api/client", "types"],
    imports: [
      {
        name: "z",
        from: "zod",
      },
    ],
  },

  runtimeConfig: {
    public: {
      env: "staging",
      piniaPluginPersistedstate: {
        storage: "localStorage",
      },
    },
  },

  pinia: {
    storesDirs: ["./src/stores/**"],
  },

  i18n: {
    bundle: { optimizeTranslationDirective: false },
    restructureDir: "src",
    langDir: "i18n",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang",
    },
    defaultLocale: "en",
    locales: [
      { code: "en", file: "en.json" },
      { code: "id", file: "id.json" },
    ],
  },

  fonts: {
    families: [
      {
        name: "Inter",
        display: "swap",
        preload: true,
        provider: "google",
        weight: "100..900",
      },
    ],
  },

  // icon: {
  //   provider: "server",
  //   mode: "svg",
  //   serverBundle: {
  //     collections: ["solar", "fa6-brands"],
  //   },
  // },

  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
});
