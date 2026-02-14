<script setup lang="ts">
useHead({
  titleTemplate: (t?: string) => t ? `${t} - Nuxt Template` : "Nuxt Template",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
