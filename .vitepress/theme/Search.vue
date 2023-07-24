.
<template>
  <div class="wrapper">
    <h1>
      <span class="title">Jejsti</span>
    </h1>
    <input type="text" v-model="searchTerm" autofocus placeholder="išči" />

    <div class="results">
      <a
        class="result"
        v-for="match in matches"
        :key="match.link"
        :href="match.link"
      >
        {{ match.text }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'

import { ref, computed } from 'vue'

const searchTerm = ref('')
const data = useData()

const matches = computed(() => {
  if (searchTerm.value.length < 2) return []
  const lowercaseTerm = searchTerm.value.toLocaleLowerCase()
  const recipes = data.site.value.themeConfig.sidebar[0].items
  return recipes.filter((recipe) =>
    recipe.text.toLocaleLowerCase().includes(lowercaseTerm),
  )
})
</script>

<style scoped>
h1 {
  line-height: 56px;
  font-size: 48px;
  font-weight: bold;
  color: var(--vp-home-hero-name-color);
  letter-spacing: -0.4px;
  margin: 4rem 0 2rem 0;
}
.title {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}
.wrapper {
  padding: 0 2rem;
}

.search-box {
  display: flex;
  justify-content: center;
}
input {
  border: 2px solid var(--vp-c-border);
  font-size: 1.5rem;
  border-radius: 0.5rem;
  height: 3rem;
  padding: 0.5rem 0.75rem;
  display: block;
  width: 100%;
  max-width: 480px;
}

.results {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
}

.result {
  background-color: var(--vp-c-bg-soft);
  white-space: nowrap;
  padding: 0.5rem 1rem;
  margin: 1rem 1rem 0 0;
  border-radius: 1.25rem;
}
</style>
