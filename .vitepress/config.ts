import { defineConfig } from 'vitepress'
import { recipes, techniques } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Jejsti',
  description: 'Mate kaj za jejsti?',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: 'Recepti',
        items: recipes,
      },
      {
        text: 'Tehnike',
        items: techniques,
      },
    ],
    docFooter: {
      prev: 'Prejšnji recept',
      next: 'Naslednji recept'
    }
  },
})
