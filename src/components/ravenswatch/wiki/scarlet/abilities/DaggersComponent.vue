<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/Dagger.webp'
import { AbilityType } from '../../characters'
</script>
<template>
  <AbilityCard name="Daggers" :image="imageSource" :type="AbilityType.Attack">
    <ul>
      <li>Chain together a series of dagger slashes, each one dealing 15 damage</li>
      <li>
        Every two consecutive attacks that hit an enemy generates one COMBO POINT (up to 3 can be
        stored)
      </li>
    </ul>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
