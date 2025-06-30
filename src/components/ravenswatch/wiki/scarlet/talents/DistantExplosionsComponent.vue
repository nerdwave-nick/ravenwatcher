<script setup lang="ts">
import TalentCard from '../../TalentCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/Bite.webp'
import { TalentType } from '../../characters'
import { AbilityTooltip } from '../../utility'
</script>
<template>
  <TalentCard name="Distant Explosions" :image="imageSource" :type="TalentType.Starter">
    <p>
      <span v-tooltip.top="AbilityTooltip('Bomb / Leap')" class="germania-one">SPECIAL</span> now
      targets a farther location and deals <span class="germania-one green">+40%</span> damage<br />
    </p>
    <ul>
      <li>The longer it’s held, the further it aims</li>
    </ul>
  </TalentCard>
</template>

<style lang="scss" scoped></style>
