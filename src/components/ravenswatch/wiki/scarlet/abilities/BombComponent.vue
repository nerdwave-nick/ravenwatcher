<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/Bomb.webp'
import { AbilityType } from '../../characters'
</script>
<template>
  <AbilityCard name="Bomb" :image="imageSource" :type="AbilityType.Special">
    <ul class="atkinson-next-400">
      <li>Drops a bomb that triggers a <span class="germania-one">DELAYED</span> explosion</li>
      <li>
        Deals <span class="germania-one">60</span> damage to enemies and stuns Scarlet if she is
        within the area of effect
      </li>
    </ul>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
