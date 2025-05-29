<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from "../../../../../assets/ravenswatch/scarlet/Hunter's_Souvenir.webp"
import { AbilityType } from '../../characters'
</script>
<template>
  <AbilityCard name="Hunter's Souvenir" :image="imageSource" :type="AbilityType.Ultimate">
    <ul>
      <li>Shoot with the shotgun, dealing 250 damage in a wide cone</li>
      <li>Stores 2 charges</li>
    </ul>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
