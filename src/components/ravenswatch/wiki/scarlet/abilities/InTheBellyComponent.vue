<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/In_the_Belly.webp'
import { AbilityType } from '../../characters'
</script>
<template>
  <AbilityCard
    name="In the Belly"
    :image="imageSource"
    :type="AbilityType.Ultimate"
    cooldown="10s-90s"
  >
    <ul>
      <li>Eat the closest non-boss enemy, instantly killing it</li>
      <li>Cooldown is proportional to the eaten enemy's level</li>
    </ul>
    <p small>
      Using In The Belly with no target puts the ability on a
      <span class="germania-one">10</span> second(s) cooldown
    </p>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
