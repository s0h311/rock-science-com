<template>
  <nav class="flex items-center justify-center relative">
    <NuxtLink
      class="absolute left-0 flex items-center gap-2"
      :to="homePath"
    >
      <img
        :src="logoUrl"
        width="50"
        height="50"
        :alt="logoAlt"
      />

      <div class="text-2xl font-light">{{ title }}</div>
    </NuxtLink>

    <ul class="flex gap-5">
      <NuxtLink
        :class="route.path === link.path ? 'underline' : ''"
        v-for="link in links"
        :key="link.path"
        :to="link.path"
      >
        {{ link.title }}
      </NuxtLink>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  logoUrl: string
  logoAlt: string
  title: string
  homePath: string
  links: {
    title: string
    path: string
  }[]
}>()

const route = useRoute()
</script>
