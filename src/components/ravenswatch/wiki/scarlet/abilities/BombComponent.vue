<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/abilities/Bomb.webp'
import { AbilityType } from '../../characters'
</script>
<template>
  <AbilityCard name="Bomb" :image="imageSource" :type="AbilityType.Special" cooldown="10s">
    <ul>
      <li>Drops a bomb that triggers a delayed explosion</li>
      <li>
        Deals <span class="germania-one green">60</span> damage to enemies and stuns Scarlet if she
        is within the area of effect
      </li>
    </ul>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
