<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/abilities/Grandmother_s_Souvenir.webp'
import { AbilityType } from '../../characters'
import { IntangibleTooltip } from '../../utility'
</script>
<template>
  <AbilityCard
    name="Grandmother's Souvenir"
    :image="imageSource"
    :type="AbilityType.Ultimate"
    cooldown="90s"
  >
    <ul>
      <li>
        Throw a pinch of ashes that creates a clouded area lasting
        <span class="germania-one">8</span> seconds
      </li>
      <li>
        During this time, all Heroes standing in the area of effect are
        <span v-tooltip.top="IntangibleTooltip" class="germania-one">INTANGIBLE</span>
      </li>
    </ul>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
