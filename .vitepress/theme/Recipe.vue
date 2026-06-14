<template>
  <h1>{{ data.title }}</h1>
  <h4 v-if="data.yield">Količina: {{ data.yield }}</h4>
  <img class="image" v-if="data.image" :src="data.image" />
  <h3>Sestavine</h3>
  <RecipeList :items="data.ingredients" id-prefix="ingredient" />
  <h3>Postopek</h3>
  <RecipeList :items="data.directions" id-prefix="direction" />
  <blockquote v-if="data.tip" class="tip">{{ data.tip }}</blockquote>
  <div v-if="data.source" class="source-link">
    <a :href="data.source" target="_blank">Originalen recept →</a>
  </div>
  <!-- {{ data }} -->
</template>

<script lang="ts" setup>
import RecipeList from './RecipeList.vue'

type RecipeItems = string[] | Record<string, string[]>[]

defineProps<{
  data: {
    title: string
    image?: string
    ingredients: RecipeItems
    directions: RecipeItems
    tip?: string
    yield?: string
    source?: string
  }
}>()
</script>

<style scoped>
.image {
  margin-top: 1rem;
}

.tip {
  font-style: italic;
  margin-top: 2rem;
  color: var(--vp-c-text-2);
}

.source-link {
  font-size: 0.85rem;
  margin-top: 2rem;
}
</style>
