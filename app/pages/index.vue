<template>
  <div class="grid place-items-center gap-10">
    <h1 class="text-4xl italic">
      <span class="font-serif">We build</span>
      what others overcomplicate.
    </h1>

    <NuxtLink
      class="w-fit space-y-3 rounded-2xl shadow p-3 hover:scale-105 transition duration-300 hover:underline text-start"
      to="https://tabley.de"
      target="_blank"
    >
      <NuxtImg
        class="rounded-2xl"
        src="/tabley-logo.webp"
        width="200"
        height="200"
      />

      <span>tabley.de</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Building Tech You Love | Hamburg',
  ogTitle: 'Rock Science | Building Tech You Love',
  description:
    'Rock Science builds what others overcomplicate. We create high-quality, efficient, and user-centric digital products that people love to use.',
  ogDescription: 'We build what others overcomplicate. Building tech you love in Hamburg.',
  ogImage: '/rs-logo.webp',
  twitterCard: 'summary',
  twitterTitle: 'Rock Science | Building Tech You Love',
  twitterDescription: 'We build what others overcomplicate. Building tech you love in Hamburg.',
  twitterImage: '/rs-logo.webp',
})
</script>
