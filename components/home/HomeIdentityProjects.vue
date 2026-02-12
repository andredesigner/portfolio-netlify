<template>
  <section class="home-identity" aria-labelledby="home-identity-title">
    <h3 id="home-identity-title" class="t-h3 home-identity__title">Identidade visual</h3>

    <div class="home-identity__grid">
      <article v-for="item in projects" :key="item.slug" class="home-identity__card">
        <div class="home-identity__image">
          <img :src="item.coverImage.src" :alt="item.coverImage.alt" />
        </div>
        <AppLinkArrow :to="`/projetos/${item.slug}`" aria-label="Ver projeto">Ver projeto</AppLinkArrow>
      </article>
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
.home-identity {
  padding: 64px 0 128px;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.home-identity__title {
  margin: 0;
}

.home-identity__grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 32px;
}

.home-identity__card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.home-identity__image {
  height: 448px;
  background: #d9d9d9;
}

.home-identity__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 900px) {
  .home-identity__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }
}

@media (max-width: 899px) {
  .home-identity__image {
    height: 320px;
  }
}
</style>
