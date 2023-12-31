// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },

  components: {
    dirs: [],
  },

  modules: ["nuxt-icons"],

  css: [
    "~/node_modules/bootstrap/scss/bootstrap.scss",
    "~/assets/stylesheet/scss/_fonts.scss",
    "~/assets/stylesheet/main.scss",
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '~/assets/stylesheet/scss/_colors.scss' as *;
          @use '~/assets/stylesheet/scss/_breakpoints.scss' as *;`,
        },
      },
    },
  },

  app: {
    head: {
      title: "trigate-hiring-tasks",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
