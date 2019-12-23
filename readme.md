# Jejsti

It's a Jekyll setup that lets you write recipes in Markdown and get a minimal mobile-friendly page that follows the [Schema.org Recipe microformat](//schema.org/Recipe).

## Local development

You need `docker` and `make`.

Run `make serve` and open [localhost:4000](http://localhost:4000).

This will take the official [Jekyll Docker image](https://github.com/envygeeks/jekyll-docker) and run an auto-reloading dev server inside it.

## Deployment

The extremely simple `.gitlab-ci.yml` in this repo is enough to automatically build the final site and deploy it to GitLab pages on each commit.

If you want to do it differently, there's `make build` that produces a static build in the `_site` subfolder.

## Writing a Recipe

The recipes are stored in the collection "Recipes" (the folder /_recipes).

They are written in Markdown and contain a few special sections:

- The frontmatter, which contains:
 - Title, Image, and Layout (which is "recipe")
 - Ingredients (a list of things in the dish)
 - Directions (a list of steps for the dish)
- Body content (for intros, stories, written detail)

### Writing a component recipe

A component recipe is a special recipe made up of other recipes. To make a new component recipe:

- place your smaller, single recipes into the /_components folder
- make a new recipe like normal in the /_recipes folders
- in the frontmatter of this new recipe, include your recipes from the /_components folder (instead of the usual Ingredeints list)

## Credits
- [Clark Wimberly](//github.com/clarklab) is the original author of this project, this is just my personal fork. Check out the [official website](//chowdown.io).
- [Gregor Črešnar](https://iconix.si/) is the author of the icon [Barbecue](//thenounproject.com/term/barbecue/1686600/) that's being used for the favicon.
