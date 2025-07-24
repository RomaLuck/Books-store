// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: ['@nuxt/image', '@nuxt/icon', '@nuxt/fonts'],
    runtimeConfig: {
        apiSecret: '123',
        public: {
            apiBase: '/api'
        }
    },
    css: ['~/assets/scss/main.scss'],
})