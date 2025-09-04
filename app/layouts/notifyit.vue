<template>
  <NavigationBar
    class="mb-10"
    logoUrl="/notifyit-logo.png"
    logoAlt="Notify It logo"
    title="Notify It"
    homePath="/notifyit"
    :links
  />

  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Notify It',
})

const links = [
  {
    title: 'Home',
    path: '/notifyit',
  },
  {
    title: 'Support',
    path: '/notifyit/support',
  },
]
</script>
