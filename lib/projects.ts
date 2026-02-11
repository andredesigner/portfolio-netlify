import { projects, type Project, type ProjectType } from '~/data/projects'

export const getAllProjects = (): Project[] => {
  return projects
}

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug)
}

export const getProjectsByType = (type: ProjectType): Project[] => {
  return projects.filter((project) => project.type === type)
}
