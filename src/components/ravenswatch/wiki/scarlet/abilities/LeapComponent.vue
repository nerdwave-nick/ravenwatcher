<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/abilities/Leap.webp'
import { AbilityType } from '../../characters'
import { IntangibleTooltip } from '../../utility'
</script>
<template>
  <AbilityCard name="Leap" :image="imageSource" :type="AbilityType.Special" cooldown="8s">
    <ul>
      <li>
        An <span v-tooltip.top="IntangibleTooltip" class="germania-one">INTANGIBLE</span> jump
        followed by a ground strike, dealing
        <span class="germania-one green">60</span>
        damage around the landing zone
      </li>
    </ul>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
