<script setup lang="ts">
import CharacterCard from './CharacterCard.vue'
import { Character } from './characters'
</script>
<template>
  <div class="category-list">
    <CharacterCard
      class="item"
      v-for="(character, index) in Character"
      :character="character"
      :key="index"
    />
  </div>
</template>

<style lang="scss" scoped>
.category-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1em;
}
.category-list .item {
  width: 180px;
  height: 250px;
}
</style>
