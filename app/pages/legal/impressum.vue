<template>
  <div class="md:max-w-xl mx-auto text-pretty">
    <h1>Impressum</h1>
    <br />

    <h2>Angaben gemäß § 5 DDG</h2>
    <br />

    <p>
      <template v-if="source">{{ source }} ist ein Angebot von:<br /></template>
      Soheil Nazari
      <br />
      Rock Science
      <br />
      Oldachstr. 8
      <br />
      22307 Hamburg
      <br />
      Deutschland
    </p>
    <br />

    <h3>Kontakt</h3>
    <br />

    <p><strong>E-Mail:</strong>&nbsp;hello@rock-science.com</p>
    <br />

    <p><strong>Telefon:</strong>&nbsp;+49 176 42946108</p>
    <br />

    <h3>Umsatzsteuer</h3>
    <br />

    <p>Kleinunternehmer gemäß § 19 UStG, keine Umsatzsteuer-Identifikationsnummer.</p>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Impressum',
})

const route = useRoute()

const source = computed(() => route.query.source)
</script>
