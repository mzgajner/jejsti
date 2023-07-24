import fs from 'fs'
import matter from 'gray-matter'

type Link = { text: string; link: string }

function generateMarkdownLinks(folder: string): Link[] {
  const filenames = fs
    .readdirSync(`${__dirname}/../${folder}`)
    .sort((a, b) => a.localeCompare(b, 'sl'))

  const items = filenames.map((filename) => {
    const fileContents = fs.readFileSync(
      `${__dirname}/../${folder}/${filename}`,
      { encoding: 'utf8' },
    )
    const parsed = matter(fileContents)
    const filenameWithoutExtension = filename.replace('.md', '')
    return {
      text: parsed.data.title,
      link: `/${folder}/${filenameWithoutExtension}`,
    }
  })

  return items
}

export const recipes = generateMarkdownLinks('recipes')
export const techniques = generateMarkdownLinks('techniques')
