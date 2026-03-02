<script setup lang="ts">
import Header from '~/components/Header.vue'
</script>
<template>
  <div class="flex flex-col items-center p-3 gap-10 min-h-dvh">
    <Header class="mx-auto" />

    <main>
      <slot />
    </main>

    <Footer class="mt-auto" />
  </div>
</template>
