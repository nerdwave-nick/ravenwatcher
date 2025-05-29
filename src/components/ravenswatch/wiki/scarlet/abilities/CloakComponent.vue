<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/Cloak.webp'
import { AbilityType } from '../../characters'
</script>
<template>
  <AbilityCard name="Cloak" :image="imageSource" :type="AbilityType.Defense">
    <ul>
      <li>Hide under the cloak to enter STEALTH and turn INTANGIBLE for 2 second(s)</li>
      <li>ATTACK or POWER triggered during this effect gain +100% Crit Chance</li>
    </ul>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
