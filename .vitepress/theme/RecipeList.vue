<template>
  <template v-if="isNested">
    <template v-for="(group, groupIndex) in items as NestedList">
      <template v-for="(heading, label) in group">
        <h4>{{ label }}</h4>
        <ul>
          <li class="item" v-for="(item, index) in heading">
            <input :id="`${idPrefix}-${groupIndex}-${index}`" type="checkbox" />
            <label
              :for="`${idPrefix}-${groupIndex}-${index}`"
              class="label"
              v-html="renderMarkdown(item)"
            />
          </li>
        </ul>
      </template>
    </template>
  </template>
  <ul v-else>
    <li class="item" v-for="(item, index) in items as string[]">
      <input :id="`${idPrefix}-${index}`" type="checkbox" />
      <label :for="`${idPrefix}-${index}`" class="label" v-html="renderMarkdown(item)" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import markdownIt from 'markdown-it'

type NestedList = Record<string, string[]>[]

const props = defineProps<{
  items: string[] | NestedList
  idPrefix: string
}>()

const isNested = computed(() => props.items.some((item) => typeof item === 'object'))

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
