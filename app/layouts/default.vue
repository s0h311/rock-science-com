<template>
  <div class="lg:py-5 lg:px-[10%] p-3">
    <Notifyit v-if="route.path.includes('notifyit')">
      <slot />
    </Notifyit>
  </div>
</template>

<script setup lang="ts">
import Notifyit from './notifyit.vue'

const route = useRoute()
</script>
