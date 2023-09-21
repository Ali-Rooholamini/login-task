// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },

  css: ["~/node_modules/bootstrap/scss/bootstrap.scss"],

  app: {
    head: {
      title: "trigate-hiring-tasks",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
