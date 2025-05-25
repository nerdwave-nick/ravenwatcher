<script setup lang="ts">
import { useRavenswatchBreadCrumbsStore } from '../../stores/breadCrumbs.ts'
const { setBreadCrumbs } = useRavenswatchBreadCrumbsStore()
setBreadCrumbs()
</script>

<template>
  <RouterLink to="/ravenswatch/wiki">Wiki</RouterLink>
  <RouterLink to="/ravenswatch/builder">Builder</RouterLink>
</template>
