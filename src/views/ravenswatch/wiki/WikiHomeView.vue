<script setup lang="ts">
import ScrollPanel from 'primevue/scrollpanel'
import WikiCategoryCardList from './../../../components/ravenswatch/wiki/WikiCategoryCardList.vue'
import { useRavenswatchBreadCrumbsStore, WikiBreadCrumb } from '../../../stores/breadCrumbs.ts'
const { setBreadCrumbs } = useRavenswatchBreadCrumbsStore()
setBreadCrumbs(WikiBreadCrumb)
</script>

<template>
  <ScrollPanel class="main-content">
    <h1>Ravenswatch</h1>
    <p>The fucking game, my guy</p>
    <WikiCategoryCardList />
  </ScrollPanel>
</template>

<style lang="scss" scoped></style>
