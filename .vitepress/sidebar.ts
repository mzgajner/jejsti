import fs from 'fs'
import matter from 'gray-matter'

function generateMarkdownLinks(folder: string) {
  const filenames = fs
    .readdirSync(`${__dirname}/../${folder}`)
    .sort((a, b) => a.localeCompare(b, 'sl'))

  const items = filenames.map((filename) => {
    const fileContents = fs.readFileSync(
      `${__dirname}/../${folder}/${filename}`,
      { encoding: 'utf8' },
    )
    const parsed = matter(fileContents)
    return { text: parsed.data.title, link: `/${folder}/${filename}` }
  })

  return items
}

export const recipes = generateMarkdownLinks('recipes')
export const techniques = generateMarkdownLinks('techniques')
