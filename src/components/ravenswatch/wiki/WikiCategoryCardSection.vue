<script setup lang="ts">
import WikiCategoryCard, { type WikiCategoryCardProps } from './WikiCategoryCard.vue'
import Fieldset from 'primevue/fieldset'

export type WikiCategoryCardSectionProps = {
  name: string
  cards: WikiCategoryCardProps[]
}
const props = defineProps<WikiCategoryCardSectionProps>()
</script>

<template>
  <Fieldset :legend="props.name" :toggleable="true">
    <div class="category-list">
      <WikiCategoryCard
        class="item"
        v-for="(card, index) in props.cards"
        v-bind="card"
        :key="index"
      />
    </div>
  </Fieldset>
</template>

<style lang="scss" scoped>
.category-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.category-list .item {
  flex-basis: 25%;
}
</style>
