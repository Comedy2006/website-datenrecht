<script setup>
  import SiteHeader from './components/siteHeader.vue'
  import SiteFooter from './components/siteFooter.vue'
</script>

<template>
  <a hred="#main" class="skip-link">Direkt zum Inhalt springen</a>
  <SiteHeader />
  <main id="main" tabindex="-1">
    <RouterView />
  </main>

  <SiteFooter />
</template>

<style scoped></style>
