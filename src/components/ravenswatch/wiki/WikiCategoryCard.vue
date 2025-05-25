<script setup lang="ts">
import { defineProps } from 'vue'
import type { Character } from './characters.ts'
import CharacterCard from './CharacterCard.vue'
export type WikiCategoryCardProps = {
  type: 'character'
  character: Character
}
const props = defineProps<WikiCategoryCardProps>()
</script>
<template>
  <CharacterCard v-if="props.type == 'character'" :character="props.character" />
</template>
