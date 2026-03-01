<template>
  <div class="flex flex-col items-center p-3 gap-10">
    <header class="mx-auto">
      <NuxtImg
        src="/rs-logo.webp"
        width="70"
        height="70"
      />
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>
