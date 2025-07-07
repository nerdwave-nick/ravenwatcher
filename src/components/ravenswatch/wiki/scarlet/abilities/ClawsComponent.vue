<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/abilities/Claws.webp'
import { AbilityType } from '../../characters'
import { ComboPointTooltip } from '../../utility'
</script>
<template>
  <AbilityCard name="Claws" :image="imageSource" :type="AbilityType.Attack">
    <ul>
      <li>
        Chain together a series of claw swipes, each one dealing
        <span class="germania-one green">15</span> damage
      </li>
      <li>
        Every two consecutive attacks hitting an enemy generates one
        <span v-tooltip.top="ComboPointTooltip" class="germania-one">COMBO POINT</span> (up to 3 can
        be stored)
      </li>
    </ul>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
