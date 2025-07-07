<script setup lang="ts">
import TalentCard from '../../TalentCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/talents/Devourer.png'
import { TalentType } from '../../characters'
import { AbilityTooltip } from '../../utility'
</script>
<template>
  <TalentCard name="Devourer" :image="imageSource" :type="TalentType.Starter">
    <p>
      <span v-tooltip.top="">Quest (x20:)</span> Each kill with
      <span v-tooltip.top="AbilityTooltip('Bite')" class="germania-one">Werewolf POWER</span> earns
      +0.5 DMG
    </p>
    <p>
      Complete: POWER has a 40% chance to have no cooldown if it kills an enemy (for both forms)
      SPECIAL now
    </p>
  </TalentCard>
</template>

<style lang="scss" scoped></style>
