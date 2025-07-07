<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/abilities/Swift_Strike.webp'
import { AbilityType } from '../../characters'
import { IntangibleTooltip, ComboPointTooltip } from '../../utility'
</script>
<template>
  <AbilityCard name="Swift Strike" :image="imageSource" :type="AbilityType.Power" cooldown="4s">
    <ul class="atkinson-next-400">
      <li>
        Rush forward while
        <span v-tooltip.top="IntangibleTooltip" class="germania-one">INTANGIBLE</span>, dealing
        <span class="germania-one green">40</span> damage along the way
      </li>
      <li>
        Spends all <span v-tooltip.top="ComboPointTooltip" class="germania-one">COMBO POINTS</span>,
        damage is increased by <span class="germania-one">50%</span> for each spent
      </li>
    </ul>
  </AbilityCard>
</template>
