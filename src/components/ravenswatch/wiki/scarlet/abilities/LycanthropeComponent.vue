<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/Lycanthrope.webp'
import { AbilityType } from '../../characters'
</script>
<template>
  <AbilityCard name="Lycanthrope" :image="imageSource" :type="AbilityType.Trait">
    <ul>
      <li>NIGHT: At nightfall, transforms into a werewolf with new abilities</li>
      <li>DAY: At dawn, regain human form</li>
    </ul>
    <p small>
      Scarlet is INVINCIBLE while transforming<br />
      If Scarlet has the Shapeshifter Talent, she is briefly INTANGIBLE instead
    </p>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
