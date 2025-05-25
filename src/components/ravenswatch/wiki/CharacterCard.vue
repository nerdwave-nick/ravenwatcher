<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { type Character, AvailableCharacters } from './characters'
import CharacterImage from './CharacterImage.vue'
import { computed } from 'vue'
const props = defineProps<{ character: Character }>()
const characterInfo = computed(() => {
  return AvailableCharacters.find((x) => x.id == props.character)!
})
const router = useRouter()
</script>
<template>
  <div class="character-card" v-ripple @click="router.push({ path: characterInfo.route })">
    <div class="character-card-bg" />
    <div class="image-bg">
      <div class="image">
        <CharacterImage :character="characterInfo.id" :size="200" />
      </div>
    </div>
    <div class="text-bg">
      <span class="text">{{ characterInfo.name.toLocaleUpperCase() }}</span>
    </div>
  </div>
  <!-- <Card class="character-card" > -->
  <!--   <template #header> </template> -->
  <!--   <template #title> -->
  <!--     <div class="character-card-image"> -->
  <!--       <CharacterImage :character="characterInfo.id" :size="200" /> -->
  <!--     </div> -->
  <!--     <h3 class="text"> -->
  <!--       {{ characterInfo.name }} -->
  <!--     </h3> -->
  <!--   </template> -->
  <!--   <template #subtitle> -->
  <!--     <p class="text"> -->
  <!--       {{ characterInfo.description }} -->
  <!--     </p> -->
  <!--   </template> -->
  <!-- </Card> -->
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Germania+One&display=swap');
.text {
  font-family: 'Germania One', system-ui;
  font-weight: 400;
  font-style: normal;
  width: 100%;
  color: #3e311e;
}
.text-bg {
  position: absolute;
  bottom: 0px;
  width: 100%;
  text-align: center;
}

.character-card {
  width: 212px;
  height: 327px;

  border-radius: 20px;
  border: var(--p-surface-700) solid 1px;
  overflow: hidden;
  filter: drop-shadow(2px 2px 3px black) brightness(0.95);
  transition:
    border 0.2s ease-out,
    filter 0.2s ease-in;

  &:hover {
    border: var(--p-violet-400) solid 1px;
    filter: drop-shadow(0px 0px 5px var(--p-violet-950));
  }
}
.character-card-bg {
  background-image: url('../../../assets/ravenswatch/ravenswatch-borders.webp');
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  filter: brightness(0.8) saturate(1.8);
}
.image {
  justify-content: center;
  border-radius: 20px;
  width: 100%;
  overflow: hidden;
}
.image-bg {
  position: absolute;
  width: 100%;
  height: 93%;
  top: 0;
  left: 0;
  border: transparent solid 5px;
  overflow: hidden;
  border-radius: 20px;
}
</style>
