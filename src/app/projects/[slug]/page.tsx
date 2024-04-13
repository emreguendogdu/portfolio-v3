import { projectContents } from "@/../content/projectContents"
import Project from "@/components/project/project"
import "@/globals.css"
import { kebabCase } from "@/utils/kebabCase"

export async function getStaticPaths() {
  // Generate paths for each project
  const paths = projectContents.map((project) => ({
    params: { slug: kebabCase(project.title) },
  }))

  return {
    paths,
    fallback: false, // This means any paths not returned here will result in a 404 page
  }
}

export default function Page({ params }: any) {
  const project = projectContents.find(
    (b) => kebabCase(b.title) === params.slug
  )

  return (
    <>
      {project ? (
        <Project project={{ ...project }} />
      ) : (
        <div>Project not found</div>
      )}
    </>
  )
}
