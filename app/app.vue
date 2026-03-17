<script setup>
import headerComp from './components/headerComp.vue'
import footerComp from './components/footerComp.vue'
import { ref, provide } from 'vue'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: 'public/favicon.png' }
  ],
  htmlAttrs: {
    lang: 'pt-br'
  }
})
const title = 'Homechat'
const description = 'O lar da conversa.'

const usuario = ref({
  email: '',
  senha: ''
})
const arrayUsuario = ref([{
  email: 'mathias',
  senha: 'araujo'
}
])

provide('estado', {
  arrayUsuario,
  usuario
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <div class="min-h-screen flex flex-col">
      <header>
        <headerComp />
      </header>

      <main class="flex-1 flex justify-center items-center">
        <NuxtPage />
      </main>

      <footer class="flex sticky">
        <footerComp />
      </footer>
    </div>
  </UApp>
</template>
