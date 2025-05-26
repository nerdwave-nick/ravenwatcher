<script setup lang="ts">
import ScrollPanel from 'primevue/scrollpanel'
import { useRavenswatchBreadCrumbsStore, WikiBreadCrumb } from '../../../stores/breadCrumbs.ts'
const { setBreadCrumbs } = useRavenswatchBreadCrumbsStore()
setBreadCrumbs(WikiBreadCrumb)
</script>

<template>
  <ScrollPanel>
    <h1>Ravenswatch</h1>
    <p>The fucking game, my guy</p>
    <RouterLink to="/ravenswatch/wiki/heroes">Heroes</RouterLink>
  </ScrollPanel>
</template>

<style lang="scss" scoped></style>
