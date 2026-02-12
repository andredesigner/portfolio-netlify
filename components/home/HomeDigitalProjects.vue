<template>
  <section id="projetos" class="home-projects" aria-labelledby="home-projects-title">
    <div class="layout-two-columns home-projects__grid">
      <div class="home-projects__title-wrap">
        <h2 id="home-projects-title" class="t-h2 home-projects__title">Projetos selecionados</h2>
      </div>

      <div class="home-projects__list">
        <article v-for="item in projects" :key="item.slug" class="home-projects__item">
          <p class="t-badge home-projects__eyebrow">{{ item.client || item.title }}</p>
          <h3 class="t-h3 home-projects__item-title">{{ item.title }}</h3>
          <AppLinkArrow :to="`/projetos/${item.slug}`" aria-label="Ver projeto">Ver projeto</AppLinkArrow>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects'
import AppLinkArrow from '~/components/ui/AppLinkArrow.vue'

defineProps<{
  projects: Project[]
}>()
</script>

<style scoped>
.home-projects {
  padding: 128px 0 64px;
}

.home-projects__grid {
  align-items: start;
}

.home-projects__title {
  margin: 0;
}

.home-projects__list {
  display: flex;
  flex-direction: column;
  gap: 96px;
}

.home-projects__item {
  max-width: 566px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.home-projects__eyebrow,
.home-projects__item-title {
  margin: 0;
}

@media (max-width: 899px) {
  .home-projects {
    padding: 96px 0 64px;
  }

  .home-projects__title {
    font-size: 40px;
    line-height: 1.15;
    margin-bottom: 64px;
  }

  .home-projects__list {
    gap: 64px;
  }

  .home-projects__item-title {
    font-size: 28px;
    line-height: 1.25;
  }
}

@media (min-width: 900px) {
  .home-projects__title-wrap {
    position: sticky;
    top: 128px;
    align-self: start;
  }
}
</style>
