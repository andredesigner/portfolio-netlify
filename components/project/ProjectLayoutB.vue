<template>
  <article class="project project-b">
    <header class="site-header">
      <div class="header-inner two-coluns">
        <NuxtLink class="brand" to="/">
          <BrandMark class="brand-icon" role="img" aria-label="André Oliveira" />
        </NuxtLink>
        <div class="header-actions">
          <p>{{ project.platform || 'Plataforma web' }}</p>
          <p>{{ project.year }}</p>
        </div>
      </div>
    </header>

    <section class="project-hero">
      <div class="hero-inner">
        <div class="hero-row two-coluns">
          <div class="hero-back">
            <NuxtLink class="back-link" to="/">
              <span class="arrow arrow--prev">
                <IconArrow class="icon" aria-hidden="true" />
              </span>
              Página inicial
            </NuxtLink>
          </div>
          <div class="hero-content">
            <div class="hero-text">
              <h1>{{ project.title }}</h1>
              <p class="hero-summary">{{ project.summary }}</p>
            </div>
            <div class="hero-tags">
              <span v-for="tag in project.tags" :key="tag" class="hero-tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="project-sections">
      <template v-for="(section, index) in project.sections" :key="`${section.type}-${index}`">
        <div
          v-if="section.type === 'text' && index === project.sections.length - 1"
          class="section conclusion"
        >
          <div class="conclusion-text">
            <p v-if="section.body">{{ section.body }}</p>
            <p v-for="(paragraph, idx) in section.paragraphs" :key="`${index}-p-${idx}`">{{ paragraph }}</p>
          </div>
        </div>

        <div v-else-if="section.type === 'text'" class="section split">
          <h2 v-if="section.title">{{ section.title }}</h2>
          <div class="section-body">
            <p v-if="section.body">{{ section.body }}</p>
            <p v-for="(paragraph, idx) in section.paragraphs" :key="`${index}-p-${idx}`">{{ paragraph }}</p>
          </div>
        </div>

        <div v-else-if="section.type === 'list'" class="section split list">
          <h2 v-if="section.title">{{ section.title }}</h2>
          <div class="section-body">
            <p v-for="(item, idx) in section.list" :key="`${index}-l-${idx}`">{{ item }}</p>
          </div>
        </div>

        <div v-else-if="section.type === 'image' && section.image" class="section media">
          <img :src="section.image.src" :alt="section.image.alt" />
          <p v-if="section.caption" class="caption">{{ section.caption }}</p>
        </div>

        <div v-else-if="section.type === 'cards' && section.cards?.length" class="section split decisions">
          <h2 v-if="section.title">
            <span v-if="section.title.includes(' ')">
              {{ section.title.split(' ')[0] }}
              <br />
              {{ section.title.split(' ').slice(1).join(' ') }}
            </span>
            <span v-else>{{ section.title }}</span>
          </h2>
          <div class="section-body decision-list">
            <div
              v-for="(card, idx) in section.cards"
              :key="card.title"
              class="decision-row"
              :class="{ 'decision-row--divider': idx === 1 }"
            >
              <p class="decision-title">{{ card.title }}</p>
              <p class="decision-body">{{ card.body }}</p>
            </div>
          </div>
        </div>
      </template>
    </section>

    <nav class="project-nav">
      <NuxtLink v-if="previousProject" :to="`/projetos/${previousProject.slug}`" class="nav-link">
        <span class="arrow arrow--prev">
          <IconArrow class="icon" aria-hidden="true" />
        </span>
        Projeto anterior
      </NuxtLink>
      <span v-else></span>
      <NuxtLink v-if="nextProject" :to="`/projetos/${nextProject.slug}`" class="nav-link nav-link--next">
        Próximo projeto
        <span class="arrow">
          <IconArrow class="icon" aria-hidden="true" />
        </span>
      </NuxtLink>
    </nav>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects'
import IconArrow from '~/components/icons/IconArrow.vue'
import BrandMark from '~/components/BrandMark.vue'

defineProps<{
  project: Project
  previousProject?: Project
  nextProject?: Project
}>()

</script>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding-bottom: 128px;
}

.site-header {
  padding: 16px 0;
}

.project-hero {
  display: flex;
  justify-content: center;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 100%;
  padding: 16px 0 64px;
}

.hero-row {
  gap: 24px;
  align-items: flex-end;
  width: 100%;
}

.hero-row.two-coluns {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}

.back-link {
  display: inline-flex;
  gap: 8px;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  align-items: center;
}

.arrow--prev .icon {
  transform: rotate(180deg);
}

.hero-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 64px;
  min-width: 0;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
}

.hero-text h1 {
  font-size: 52px;
  line-height: 1.15;
  font-weight: 500;
  margin: 0;
  overflow-wrap: anywhere;
}

.hero-summary {
  font-size: 24px;
  margin: 0;
}

.hero-tags {
  display: flex;
  gap: 64px;
  width: 100%;
}

.hero-tag {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.16px;
}

.project-sections {
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;
}

.section {
  width: 100%;
  max-width: 1156px;
  display: flex;
  gap: 24px;
  padding: 64px 0;
}

.section h2 {
  flex: 1;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.15;
  margin: 0;
}

.section-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.16px;
}

.section.list .section-body {
  font-size: 24px;
  letter-spacing: 0.192px;
}

.section-body p {
  margin: 0;
}

.section.media {
  flex-direction: column;
  align-items: center;
}

.section.media img {
  width: 100%;
  height: 760px;
  object-fit: cover;
  border-radius: 16px;
  background: #d9d9d9;
}

.caption {
  font-size: 18px;
  letter-spacing: 0.144px;
  text-align: center;
}

.decision-list {
  gap: 64px;
}

.decision-row {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.decision-row--divider {
  border-top: 1px solid #0e0b0f;
  border-bottom: 1px solid #0e0b0f;
  padding: 64px 0;
}

.decision-title {
  width: 212px;
  font-size: 16px;
  letter-spacing: 0.128px;
  margin: 0;
}

.decision-body {
  flex: 1;
  font-size: 20px;
  letter-spacing: 0.16px;
  margin: 0;
}

.conclusion {
  justify-content: center;
}

.conclusion-text {
  max-width: 918px;
  font-size: 24px;
  line-height: 1.15;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.project-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  font-size: 36px;
  font-weight: 600;
  text-decoration: none;
}

.nav-link .arrow {
  width: 36px;
  height: 36px;
}

.nav-link .arrow .icon {
  width: 36px;
  height: 36px;
}

@media (max-width: 899px) {
  .header-actions {
    font-size: 18px;
    gap: 16px;
  }

  .hero-inner {
    padding: 40px 0;
  }

  .hero-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-text h1 {
    font-size: 36px;
  }

  .hero-summary {
    font-size: 18px;
  }

  .hero-tags {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 16px;
  }

  .hero-tag {
    font-size: 16px;
  }

  .section {
    flex-direction: column;
    padding: 40px 0;
  }

  .section-body {
    font-size: 18px;
  }

  .section.media img {
    height: 420px;
  }

  .nav-link {
    font-size: 20px;
  }
}
</style>
