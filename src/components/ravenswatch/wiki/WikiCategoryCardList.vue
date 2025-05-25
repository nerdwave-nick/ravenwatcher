<script setup lang="ts">
import { ref } from 'vue'
import type { WikiCategoryCardSectionProps } from './WikiCategoryCardSection.vue'
import WikiCategoryCardSection from './WikiCategoryCardSection.vue'

const cardSections = ref<WikiCategoryCardSectionProps[]>([
  {
    name: 'Heroes',
    cards: [
      {
        type: 'character',
        character: 'beowulf',
      },
      {
        type: 'character',
        character: 'scarlet',
      },
      {
        type: 'character',
        character: 'piper',
      },
    ],
  },
])
</script>
<template>
  <WikiCategoryCardSection
    v-for="(section, index) in cardSections"
    :value="index"
    :key="index"
    :name="section.name"
    :cards="section.cards"
  />
</template>
