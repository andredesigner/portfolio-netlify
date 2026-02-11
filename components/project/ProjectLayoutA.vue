<template>
  <article class="project project-a">
    <header class="project-hero">
      <div class="project-hero__text">
        <p class="project-eyebrow">{{ project.year }}</p>
        <h1>{{ project.title }}</h1>
        <p class="project-summary">{{ project.summary }}</p>
        <div class="project-meta">
          <p v-if="project.client"><strong>Cliente:</strong> {{ project.client }}</p>
          <p><strong>Atuação:</strong> {{ project.role.join(', ') }}</p>
          <p><strong>Tags:</strong> {{ project.tags.join(', ') }}</p>
        </div>
      </div>
      <div class="project-hero__media">
        <img :src="project.coverImage.src" :alt="project.coverImage.alt" />
      </div>
    </header>

    <section class="project-sections">
      <template v-for="(section, index) in project.sections" :key="`${section.type}-${index}`">
        <div v-if="section.type === 'text'" class="project-section">
          <h2 v-if="section.title">{{ section.title }}</h2>
          <p v-if="section.body">{{ section.body }}</p>
        </div>

        <div v-else-if="section.type === 'image' && section.image" class="project-section">
          <img :src="section.image.src" :alt="section.image.alt" />
          <p v-if="section.title" class="project-caption">{{ section.title }}</p>
        </div>

        <div v-else-if="section.type === 'gallery' && section.images?.length" class="project-section gallery">
          <div v-for="(image, idx) in section.images" :key="`${image.src}-${idx}`" class="gallery-item">
            <img :src="image.src" :alt="image.alt" />
          </div>
        </div>

        <div v-else-if="section.type === 'metrics' && section.items?.length" class="project-section metrics">
          <div v-for="item in section.items" :key="item.label" class="metrics-item">
            <span class="metrics-label">{{ item.label }}</span>
            <span class="metrics-value">{{ item.value }}</span>
          </div>
        </div>

        <blockquote v-else-if="section.type === 'quote' && section.quote" class="project-section quote">
          <p>“{{ section.quote }}”</p>
          <cite v-if="section.author">{{ section.author }}</cite>
        </blockquote>
      </template>
    </section>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()
</script>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.project-hero {
  display: grid;
  gap: 32px;
}

.project-hero__text h1 {
  margin: 0 0 16px;
  font-size: clamp(32px, 4vw, 56px);
}

.project-summary {
  margin: 0 0 24px;
  font-size: 18px;
  line-height: 1.6;
}

.project-meta p {
  margin: 4px 0;
}

.project-hero__media img {
  width: 100%;
  height: auto;
  border-radius: 24px;
}

.project-sections {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.gallery img {
  width: 100%;
  border-radius: 16px;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
}

.metrics-item {
  padding: 16px;
  border: 1px solid #0e0b0f;
  border-radius: 12px;
}

.quote {
  border-left: 4px solid #ffb607;
  padding-left: 16px;
  margin: 0;
}

@media (min-width: 900px) {
  .project-hero {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: center;
  }
}
</style>
