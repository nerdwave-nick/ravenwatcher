<script setup lang="ts">
import TalentCard from '../../TalentCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/talents/Distant_Explosions.png'
import { TalentType } from '../../characters'
import { AbilityTooltip, TalentScalingTooltip } from '../../utility'
</script>
<template>
  <TalentCard name="Distant Explosions" :image="imageSource" :type="TalentType.Starter">
    <p>
      <span v-tooltip.top="AbilityTooltip('Bomb / Leap')" class="germania-one">SPECIAL</span> now
      targets a farther location and deals <span class="germania-one green"></span
      ><span class="germania-one common-ul"><span class="germania-one red">↓</span>40%</span
      ><span class="germania-one rare-ul"><span class="germania-one green">↑</span>50%</span
      ><span class="germania-one epic-ul"><span class="germania-one green">↑</span>60%</span
      ><span class="germania-one legendary-ul"><span class="germania-one green">↑</span>70%</span>
      damage
      <br />
    </p>
    <ul>
      <li>The longer it’s held, the further it aims</li>
    </ul>
  </TalentCard>
</template>

<style lang="scss" scoped></style>
