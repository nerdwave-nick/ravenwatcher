<script setup lang="ts">
import Avatar from 'primevue/avatar'
import CharacterImage from './CharacterImage.vue'
import { Character } from '../../../components/ravenswatch/wiki/characters'
const props = defineProps<{ hero: Character }>()
import bite from '../../../assets/ravenswatch/scarlet/Bite.webp'
import belly from '../../../assets/ravenswatch/scarlet/Leap.webp'
import bomb from '../../../assets/ravenswatch/scarlet/Bomb.webp'
import cloak from '../../../assets/ravenswatch/scarlet/Cloak.webp'
import lycanthrope from '../../../assets/ravenswatch/scarlet/Lycanthrope.webp'
import swiftstrike from '../../../assets/ravenswatch/scarlet/Swift_Strike.webp'
</script>

<template>
  <div class="thing">
    <div class="left">
      <div class="book-bg-l" />
      <div class="thing-text">
        <i>
          Scarlet discovered she was cursed with lycanthropy while covered in her grandmother's
          remains. The Little Red of legend grew up in a blink of two very big eyes.<br />A
          revenge-seeking hunter by day, wielding an arsenal of knives and the occasional bomb, at
          night she is a brutal monster whose pounce is just as mean as her bite.<br />
          Oh, what big claws she has.
        </i>
      </div>
    </div>
    <div class="right">
      <div class="book-bg" />
      <div class="fr">
        <div class="character-card">
          <div class="character-card-bg" />
          <div class="image-bg">
            <div class="image">
              <CharacterImage :character="props.hero" :size="200" />
            </div>
          </div>
          <div class="text-bg">
            <span class="text">Base HP: 100</span>
          </div>
        </div>
      </div>
      <div class="ability-grid">
        <div class="ability-grid-inner">
          <Avatar
            :style="{
              animationDelay: `${10 * -Math.random()}s`,
              animationDuration: `${12 - 2 * Math.random()}s`,
              transform: `rotate(${10 * (Math.random() - 0.5)}deg) translate(${(Math.random() - 0.5) * 20}px, ${(Math.random() - 0.5) * 20}px)`,
            }"
            :image="lycanthrope"
            class="avatar"
            size="xlarge"
          />
          <Avatar
            :style="{
              animationDelay: `${10 * -Math.random()}s`,
              animationDuration: `${12 - 2 * Math.random()}s`,
              transform: `rotate(${10 * (Math.random() - 0.5)}deg) translate(${(Math.random() - 0.5) * 20}px, ${(Math.random() - 0.5) * 20}px)`,
            }"
            :image="bite"
            class="avatar"
            size="xlarge"
          />
          <Avatar
            :style="{
              animationDelay: `${10 * -Math.random()}s`,
              animationDuration: `${12 - 2 * Math.random()}s`,
              transform: `rotate(${10 * (Math.random() - 0.5)}deg) translate(${(Math.random() - 0.5) * 20}px, ${(Math.random() - 0.5) * 20}px)`,
            }"
            :image="bomb"
            class="avatar"
            size="xlarge"
          />
          <Avatar
            :style="{
              animationDelay: `${10 * -Math.random()}s`,
              animationDuration: `${12 - 2 * Math.random()}s`,
              transform: `rotate(${10 * (Math.random() - 0.5)}deg) translate(${(Math.random() - 0.5) * 20}px, ${(Math.random() - 0.5) * 20}px)`,
            }"
            :image="swiftstrike"
            class="avatar"
            size="xlarge"
          />
          <Avatar
            :style="{
              animationDelay: `${10 * -Math.random()}s`,
              animationDuration: `${12 - 2 * Math.random()}s`,
              transform: `rotate(${10 * (Math.random() - 0.5)}deg) translate(${(Math.random() - 0.5) * 20}px, ${(Math.random() - 0.5) * 20}px)`,
            }"
            :image="cloak"
            class="avatar"
            size="xlarge"
          />
          <Avatar
            :style="{
              animationDelay: `${10 * -Math.random()}s`,
              animationDuration: `${12 - 2 * Math.random()}s`,
              transform: `rotate(${10 * (Math.random() - 0.5)}deg) translate(${(Math.random() - 0.5) * 20}px, ${(Math.random() - 0.5) * 20}px)`,
            }"
            :image="belly"
            class="avatar"
            size="xlarge"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  filter: sepia(30%) drop-shadow(1px 1px 3px black);
  animation: spin 10s infinite linear;
}
.left {
  height: 100%;
}
.right {
  height: 100%;
}
.book-bg {
  position: absolute;
  width: 50%;
  background-position: left;
  background-size: 100% 100%;
  filter: brightness(0.8) saturate(1.8);
  z-index: -1;
  background-image: url('../../../assets/ravenswatch/ravenswatch-borders.webp');
  background-repeat: no-repeat;
  height: 100%;
}
.book-bg-l {
  filter: brightness(0.8) saturate(1.8);
  position: absolute;
  width: 50%;
  z-index: -1;
  background-image: url('../../../assets/ravenswatch/ravenswatch-borders.webp');
  background-position: right;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.fr {
  float: left;
  margin: 1em;
  margin-right: 5em;
  margin-left: 10%;
  transform: rotate(3deg);
}
.ability-grid {
  position: absolute;
  z-index: -1;
  padding: 1em;
  margin-top: 1em;
  margin-right: 5em;
  width: 40%;
}
.ability-grid-inner {
  float: right;
  display: grid;
  grid-template-columns: repeat(2, 3fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50%;
  grid-row-gap: 20%;
}
.thing {
  position: relative;
  top: 0%;
  bottom: 0%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  margin: 18px;
  margin-top: 0em;
  margin-bottom: 0em;
  overflow: hidden;
  background-size: 50%;
  border-radius: 8px;

  box-shadow: inset 0 0 8px black;
}
.thing-text {
  margin-left: 1.5em;
  padding-top: 1em;
  padding-bottom: 1em;
  margin-right: 2em;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  text-wrap: initial;
  color: #3e311e;
}
.character-card {
  width: 212px;
  height: 317px;

  border-radius: 8px;
  border: var(--p-surface-700) solid 1px;
  overflow: hidden;
  filter: drop-shadow(1px 1px 3px black) brightness(0.95);
}
.character-card-bg {
  display: block;
  float: right;
  background-image: url('../../../assets/ravenswatch/ravenswatch-borders.webp');
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  filter: brightness(0.8) saturate(1.8);
}
.image {
  border-radius: 8px;
  justify-content: center;
  object-fit: contain;
  width: 100%;
  overflow: hidden;
}
.image-bg {
  position: absolute;
  width: 100%;
  height: 93%;
  top: 0;
  left: 0;
  border: transparent solid 3px;
  overflow: hidden;
  border-radius: 8px;
}
.text {
  font-weight: 400;
  font-size: 1.15em;
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
</style>
