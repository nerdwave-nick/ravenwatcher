<script setup lang="ts">
import Panel from 'primevue/panel'
import Avatar from 'primevue/avatar'
import { defineProps } from 'vue'
import { AbilityType } from './characters'
const props = defineProps<{
  name: string
  image: string
  cooldown?: string
  type: AbilityType
}>()
</script>
<template>
  <Panel
    class="atkinson-next-400 panel"
    :class="{
      trait: props.type == AbilityType.Trait,
      ultimate: props.type == AbilityType.Ultimate,
      ability: props.type != AbilityType.Trait && props.type != AbilityType.Ultimate,
    }"
  >
    <template #header>
      <div class="legend germania-one">
        <span class="legend-text">{{ props.name }}</span>
        <span class="legend-type">{{ props.cooldown }}</span>
        <span class="legend-type">{{ props.type }}</span>
      </div>
    </template>
    <Avatar class="avatar" :image="props.image" size="xlarge" />
    <slot class="smol-text"> No slot given </slot>
  </Panel>
</template>
<style lang="scss">
ul {
  list-style-position: outside;
  padding-left: 0.8em;
  margin-bottom: 0.4em;
}
p {
  color: #b1b2b5;
  margin-bottom: 0.4em;
}
span {
  color: #b1b2b5;
}
li {
  color: #b1b2b5;
}
</style>
<style lang="scss" scoped>
.avatar {
  margin-left: 0.8em;
  margin-bottom: 0.8em;
  float: right;
}
.trait {
  --p-panel-header-background: radial-gradient(
    ellipse at bottom left,
    var(--p-red-600) 0%,
    transparent 5%
  );
}
.ability {
  --p-panel-header-background: radial-gradient(
    ellipse at bottom left,
    var(--p-violet-600) 0%,
    transparent 5%
  );
}
.ultimate {
  --p-panel-header-background: radial-gradient(
    ellipse at bottom left,
    var(--p-yellow-600) 0%,
    transparent 5%
  );
}
.panel {
  --p-panel-content-padding: 0.8em;
  --p-panel-header-padding: 0.8em;
  margin: 0;
  padding: 0;
}

.legend {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-items: stretch;
  height: 0.6em;
  gap: 0.4em;
}
.legend-text {
  font-size: 1.5em;
  color: #e1e2e5;
}
// .legend-type:after {
//   content: '\00a0\00a0';
// }
// .legend-text:before {
//   content: '|\00a0\00a0';
// }
.legend-type {
  text-align: right;
  font-size: 1.5em;
  color: grey;
}
</style>
