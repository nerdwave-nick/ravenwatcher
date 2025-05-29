<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/Swift_Strike.webp'
import { AbilityType } from '../../characters'
</script>
<template>
  <AbilityCard name="Swift Strike" :image="imageSource" :type="AbilityType.Power" cooldown="16s">
    <ul class="atkinson-next-400">
      <li>
        Rush forward while <span class="germania-one">INTANGIBLE</span>, dealing
        <span class="germania-one">40</span> damage along the way
      </li>
      <li>
        Spends all <span class="germania-one">COMBO POINTS</span>, damage is increased by
        <span class="germania-one">50%</span> for each spent
      </li>
    </ul>
  </AbilityCard>
</template>

<style lang="scss" scoped>
li {
  color: #c1c2c5;
}
</style>
