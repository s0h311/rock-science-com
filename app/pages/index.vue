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

<script setup lang="ts"></script>
