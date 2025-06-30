<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/Howl.webp'
import { AbilityType } from '../../characters'
import { LifestealTooltip, ArmorTooltip, AbilityTooltip } from '../../utility'
</script>
<template>
  <AbilityCard name="Howl" :image="imageSource" :type="AbilityType.Defense" cooldown="14s">
    <ul>
      <li>
        Gain <span class="germania-one">50 </span>
        <span v-tooltip.top="ArmorTooltip" class="germania-one">ARMOR</span>,
        <span v-tooltip.top="AbilityTooltip('Claws')" class="germania-one">ATTACK</span> and
        <span v-tooltip.top="AbilityTooltip('Bite')" class="germania-one">POWER</span> gain
        <span class="germania-one">15%</span>
        <span v-tooltip.top="LifestealTooltip" class="germania-one"> LIFESTEAL</span>
      </li>
      <li>Lasts for <span class="germania-one">5.5</span> seconds</li>
    </ul>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
