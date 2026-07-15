<template>
  <h1 class="text-4xl italic text-center mb-10">
    <span class="font-serif">We build</span>
    what others overcomplicate.
  </h1>

  <div class="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
    <NuxtLink
      v-for="project in projects"
      :key="project.name"
      class="w-fit space-y-3 rounded-2xl shadow p-3 hover:scale-105 transition duration-300 hover:underline text-start"
      :to="project.url"
      target="_blank"
    >
      <div
        v-if="project.image"
        class="size-50"
      >
        <NuxtImg
          class="rounded-2xl size-full object-contain"
          :src="project.image"
        />
      </div>

      <div
        v-else
        class="size-50"
      >
        {{ project.name }}
      </div>

      <span>{{ project.name }}</span>
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
  ogImage: '/rs-logo-sky-1024x256.webp',
  twitterCard: 'summary',
  twitterTitle: 'Rock Science | Building Tech You Love',
  twitterDescription: 'We build what others overcomplicate. Building tech you love in Hamburg.',
  twitterImage: '/rs-logo-sky-1024x256.webp',
})

const projects: {
  name: string
  url: string
  image: string | null
}[] = [
  {
    name: 'tabley.de',
    url: 'https://tabley.de',
    image: '/tabley-logo.webp',
  },
  {
    name: 'eco-on.de',
    url: 'https://eco-on.de',
    image: '/eco-on-logo-1.png',
  },
  {
    name: 'StatusLine',
    url: 'https://statusline.rock-science.com',
    image: null,
  },
]
</script>
