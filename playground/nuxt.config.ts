export default defineNuxtConfig({
  compatibilityDate: '2024-11-05',
  modules: ['../src/module'],
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://spacex-api-2gl6xp7kua-ue.a.run.app/query'
    }
  }
})
