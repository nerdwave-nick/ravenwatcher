<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/Bite.webp'
import { AbilityType } from '../../characters'
import { IntangibleTooltip, ComboPointTooltip } from '../../utility'
</script>
<template>
  <AbilityCard name="Bite" :image="imageSource" :type="AbilityType.Power" cooldown="4s">
    <ul>
      <li>
        Rush towards the closest enemy while
        <span v-tooltip.top="IntangibleTooltip" class="germania-one">INTANGIBLE</span>
        to bite it and deal <span class="germania-one green">60</span> damage
      </li>
      <li>
        Spends all <span v-tooltip.top="ComboPointTooltip" class="germania-one">COMBO POINTS</span>,
        damage is increased by <span class="germania-one">50%</span> for each point spent
      </li>
    </ul>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
