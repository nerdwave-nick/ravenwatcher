<script setup lang="ts">
import Panel from 'primevue/panel'
import Avatar from 'primevue/avatar'
import { defineProps } from 'vue'
import { TalentType } from './characters'
const props = defineProps<{
  name: string
  image: string
  type: TalentType
}>()
</script>

<template>
  <Panel
    class="atkinson-next-400 panel"
    :class="{
      starter: props.type == TalentType.Starter,
      'ultimate-upgrade': props.type == TalentType.UltimateUpgrade,
      default: props.type == TalentType.Default,
    }"
  >
    <template #header>
      <div class="legend germania-one">
        <span class="legend-text">{{ props.name }}</span>
        <span class="legend-right">
          <span class="legend-type">
            {{ props.type }}
          </span>
        </span>
      </div>
    </template>
    <div class="content">
      <Avatar class="avatar" :image="props.image" size="xlarge" />
      <slot> No slot given </slot>
    </div>
  </Panel>
</template>

<style lang="scss" scoped>
.content {
  padding-left: 0.4em;
  width: 100%;
  height: 100%;

  &::v-deep(.green) {
    color: var(--r-color-green);
  }

  &::v-deep(ul) {
    margin-top: 0;
    list-style-position: outside;
    padding-left: 0.8em;
    margin-bottom: 0.4em;
  }
  &::v-deep(p) {
    margin-top: 0;
    color: var(--r-color-grey);
    margin-bottom: 0.4em;
  }
  &::v-deep(span) {
    color: var(--r-color-grey);
  }
  &::v-deep(ul > li) {
    color: var(--r-color-grey);
  }
}

.avatar {
  margin-right: 0.8em;
  margin-bottom: 0.8em;
  float: left;
}
.default {
  --p-panel-header-background: radial-gradient(
    ellipse at bottom left,
    var(--r-color-red) 0%,
    transparent 5%
  );
}
.starter {
  --p-panel-header-background: radial-gradient(
    ellipse at bottom left,
    var(--r-color-purple) 0%,
    transparent 5%
  );
}
.ultimate-upgrade {
  --p-panel-header-background: radial-gradient(
    ellipse at bottom left,
    var(--r-color-yellow) 0%,
    transparent 5%
  );
}
.panel {
  --p-panel-background: var(--p-surface-950);
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
.legend-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3em;
}
.legend-text {
  font-size: 1.5em;
  color: #e1e2e5;
}
.legend-type {
  font-size: 1.5em;
  color: grey;
}
</style>
