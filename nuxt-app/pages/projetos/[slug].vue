<template>
  <div>
    <main class="project-page">
      <component
        :is="layoutComponent"
        :project="project"
        :previous-project="previousProject"
        :next-project="nextProject"
      />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { createError } from 'h3'
import { getAllProjects, getProjectBySlug } from '~/lib/projects'
import ProjectLayoutA from '~/components/project/ProjectLayoutA.vue'
import ProjectLayoutB from '~/components/project/ProjectLayoutB.vue'

const route = useRoute()
const project = getProjectBySlug(route.params.slug as string)

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Projeto não encontrado',
  })
}

const layoutComponent = computed(() =>
  project.layout === 'A' ? ProjectLayoutA : ProjectLayoutB,
)

const allProjects = getAllProjects()
const currentIndex = project ? allProjects.findIndex((item) => item.slug === project.slug) : -1
const previousProject = currentIndex > 0 ? allProjects[currentIndex - 1] : undefined
const nextProject =
  currentIndex >= 0 && currentIndex < allProjects.length - 1
    ? allProjects[currentIndex + 1]
    : undefined

const requestUrl = useRequestURL()
const canonical = `${requestUrl.origin}/projetos/${project.slug}`
const ogImage = project.coverImage.src.startsWith('http')
  ? project.coverImage.src
  : `${requestUrl.origin}${project.coverImage.src}`

useHead({
  title: `${project.title} — Portfólio`,
  meta: [
    { name: 'description', content: project.summary },
    { property: 'og:title', content: `${project.title} — Portfólio` },
    { property: 'og:description', content: project.summary },
    { property: 'og:image', content: ogImage },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${project.title} — Portfólio` },
    { name: 'twitter:description', content: project.summary },
    { name: 'twitter:image', content: ogImage },
  ],
  link: [{ rel: 'canonical', href: canonical }],
})
</script>

<style scoped>
.project-page {
  padding: 0 12px 80px;
  margin: 0 auto;
}

@media (min-width: 900px) {
  .project-page {
    padding: 0 24px;
  }
}
</style>
