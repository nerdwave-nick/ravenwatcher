<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/Cloak.webp'
import { AbilityType } from '../../characters'
import { IntangibleTooltip, StealtTooltip, AbilityTooltip } from '../../utility'
</script>
<template>
  <AbilityCard name="Cloak" :image="imageSource" :type="AbilityType.Defense" cooldown="8s">
    <ul>
      <li>
        Hide under the cloak to enter
        <span v-tooltip.top="StealtTooltip" class="germania-one">STEALTH</span> and turn
        <span v-tooltip.top="IntangibleTooltip" class="germania-one">INTANGIBLE</span> for
        <span class="germania-one">2</span> second(s)
      </li>
      <li>
        <span v-tooltip.top="AbilityTooltip('Daggers')" class="germania-one">ATTACK</span> or
        <span v-tooltip.top="AbilityTooltip('Swift Strike')" class="germania-one">POWER</span>
        triggered during this effect gain <span class="germania-one">+100%</span> Crit Chance
      </li>
    </ul>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
