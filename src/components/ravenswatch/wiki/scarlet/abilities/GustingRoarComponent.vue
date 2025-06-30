<script setup lang="ts">
import AbilityCard from '../../AbilityCard.vue'
import imageSource from '../../../../../assets/ravenswatch/scarlet/Gusting_Roar.webp'
import { AbilityType } from '../../characters'
</script>
<template>
  <AbilityCard name="Gusting Roar" :image="imageSource" :type="AbilityType.Ultimate" cooldown="60s">
    <ul>
      <li>
        Deal <span class="germania-one green">292</span> damage per second in a wide cone for
        <span class="germania-one">3</span> seconds
      </li>
    </ul>
    <p small>
      Scarlet can still be damaged while channeling Gusting Roar<br />Gusting Roar can be cancelled
      early and its cooldown is proportional to the time it has been used (with a minimum of
      <span class="germania-one">10s</span>)
    </p>
  </AbilityCard>
</template>

<style lang="scss" scoped></style>
