<script setup lang="ts">
import { Character } from './characters.ts'
import { defineProps, computed } from 'vue'
import piperImage from '../../../assets/ravenswatch/The_Pied_Piper.webp'
import scarletImage from '../../../assets/ravenswatch/Scarlet,_the_Red_Hood.webp'
import beowulfImage from '../../../assets/ravenswatch/Beowulf_and_Drake.webp'
import melusineImage from '../../../assets/ravenswatch/Melusine.webp'
import carmillaImage from '../../../assets/ravenswatch/Carmilla.webp'
import geppettoImage from '../../../assets/ravenswatch/Geppetto_Illustration.webp'
import aladdinImage from '../../../assets/ravenswatch/Aladdin_Illustration.webp'
import snowQueenImage from '../../../assets/ravenswatch/The_Snow_Queen.webp'
import wukongImage from '../../../assets/ravenswatch/Sun_Wukong_Illustration.webp'
import romeoImage from '../../../assets/ravenswatch/romeo.jpg'
import julietImage from '../../../assets/ravenswatch/juliet.jpg'

const images: { [k in Character]: string } = {
  [Character.Scarlet]: scarletImage,
  [Character.Piper]: piperImage,
  [Character.Beowulf]: beowulfImage,
  [Character.Aladdin]: aladdinImage,
  [Character.Melusine]: melusineImage,
  [Character.Carmilla]: carmillaImage,
  [Character.Geppetto]: geppettoImage,
  [Character.Snowqueen]: snowQueenImage,
  [Character.Wukong]: wukongImage,
  [Character.Romeo]: romeoImage,
  [Character.Juliet]: julietImage,
}

const props = defineProps<{
  character: Character
  size: number
}>()
const image = computed(() => {
  return images[props.character]
})
</script>
<template>
  <img class="image" :src="image" :width="size" />
</template>

<style lang="scss" scoped>
.image {
  display: block;
  width: 100%;
  height: auto;
  backface-visibility: hidden;
}
</style>
