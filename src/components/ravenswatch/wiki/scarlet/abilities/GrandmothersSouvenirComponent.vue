<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/Grandmother_s_Souvenir.webp'
import { AbilityType } from '../../characters'
</script>
<template>
  <AbilityCard name="Grandmother's Souvenir" :image="imageSource" :type="AbilityType.Ultimate">
    <ul>
      <li>Throw a pinch of ashes that creates a clouded area lasting 8 seconds</li>
      <li>During this time, all Heroes standing in the area of effect are INTANGIBLE</li>
    </ul>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
