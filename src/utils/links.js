import { kebabCase } from "./kebabCase"

export const bookLink = (title) => `/book-notes/${kebabCase(title)}/`
export const bookImgLink = (title) => `/images/books/${kebabCase(title)}.jpg`

export const projectImgLink = (title) =>
  `/images/projects/${kebabCase(title)}?ts=1.jpg`

export const handleNavPage = (title) => `/${kebabCase(title)}`
export const handleNavSection = (title) => `/#${kebabCase(title)}`
