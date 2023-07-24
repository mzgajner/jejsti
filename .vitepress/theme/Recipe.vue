<template>
  <h1>{{ data.title }}</h1>
  <img v-if="data.image" :src="data.image" />
  <h3>Sestavine:</h3>
  <ul>
    <li class="item" v-for="(ingredient, index) in data.ingredients">
      <input :id="`ingredient-${index}`" type="checkbox" />
      <label
        :for="`ingredient-${index}`"
        class="label"
        v-html="renderMarkdown(ingredient)"
      />
    </li>
  </ul>
  <h3>Postopek:</h3>
  <ul>
    <li class="item" v-for="(direction, index) in data.directions">
      <input :id="`direction-${index}`" type="checkbox" />
      <label
        :for="`direction-${index}`"
        class="label"
        v-html="renderMarkdown(direction)"
      />
    </li>
  </ul>
  <!-- {{ data }} -->
</template>

<script lang="ts" setup>
import markdownIt from 'markdown-it'

defineProps<{
  data: {
    title: string
    image?: string
    ingredients: string[]
    directions: string[]
    quip?: string
  }
}>()

const renderMarkdown = (string: string) => {
  const md = new markdownIt({ html: true })
  return md.render(string)
}
</script>

<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul {
  margin-top: 0.5rem;
}

.item {
  display: flex;
  align-items: baseline;
  padding: 0.3rem 0;
}

.item input {
  margin-right: 0.5rem;
  margin-top: 7px;
}
</style>

<style>
.item p {
  margin: 0;
}
</style>
