<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/abilities/Lycanthrope.webp'
import { AbilityType } from '../../characters'
import { DayTooltip, IntangibleTooltip, InvincibleTooltip, NightTooltip } from '../../utility'
</script>
<template>
  <AbilityCard name="Lycanthrope" :image="imageSource" :type="AbilityType.Trait">
    <ul>
      <li>
        <span v-tooltip.top="NightTooltip" class="germania-one">NIGHT</span>: At nightfall,
        transforms into a werewolf with new abilities
      </li>
      <li>
        <span v-tooltip.top="DayTooltip" class="germania-one">DAY</span>: At dawn, regain human form
      </li>
    </ul>
    <p>
      Scarlet is
      <span v-tooltip.top="InvincibleTooltip" class="germania-one">INVINCIBLE</span> while
      transforming. If Scarlet has the Shapeshifter Talent, she is briefly
      <span v-tooltip.top="IntangibleTooltip" class="germania-one">INTANGIBLE</span> instead
    </p>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
