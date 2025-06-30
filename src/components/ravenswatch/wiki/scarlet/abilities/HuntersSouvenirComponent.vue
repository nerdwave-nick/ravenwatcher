<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from "../../../../../assets/ravenswatch/scarlet/Hunter's_Souvenir.webp"
import { AbilityType } from '../../characters'
import { ChargesTooltip } from '../../utility'
</script>
<template>
  <AbilityCard
    name="Hunter's Souvenir"
    :image="imageSource"
    :type="AbilityType.Ultimate"
    cooldown="90s"
  >
    <ul>
      <li>
        Shoot with the shotgun, dealing <span class="germania-one green">250</span> damage in a wide
        cone
      </li>
      <li>
        Stores <span class="germania-one">2 </span>
        <span v-tooltip.top="ChargesTooltip" class="germania-one">CHARGES</span>
      </li>
    </ul>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
