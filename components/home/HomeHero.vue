<template>
  <section class="home-hero" aria-labelledby="hero-title">
    <div class="home-hero__text">
      <p class="t-badge home-hero__kicker">
        UX Designer na <a target="_blank" rel="noreferrer" href="https://www.onebox.one/">Onebox</a>
      </p>
      <h1 id="hero-title" class="t-display home-hero__title">UX Designer focado em experiências escaláveis.</h1>
    </div>

    <div class="layout-two-columns home-hero__content">
      <AppPillButton href="#projetos" variant="primary" aria-label="Ver projetos">
        Ver projetos
      </AppPillButton>

      <div class="home-hero__resume">
        <article v-for="item in resumeItems" :key="item.label" class="home-hero__resume-item">
          <p class="t-badge home-hero__resume-label">{{ item.label }}</p>
          <p class="t-paragraph home-hero__resume-text">{{ item.text }}</p>
        </article>

        <AppLinkArrow
          href="https://www.linkedin.com/in/andreoliveiradesigner/"
          target="_blank"
          rel="noreferrer"
          aria-label="Veja meu Linkedin"
        >
          Veja meu Linkedin
        </AppLinkArrow>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppPillButton from '~/components/ui/AppPillButton.vue'
import AppLinkArrow from '~/components/ui/AppLinkArrow.vue'

defineProps<{
  resumeItems: Array<{ label: string; text: string }>
}>()
</script>

<style scoped>
.home-hero {
  padding: 64px 0 128px;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.home-hero__text {
  display: flex;
  flex-direction: column;
}

.home-hero__kicker {
  margin: 0 0 8px;
}

.home-hero__kicker a {
  text-decoration: underline;
}

.home-hero__title {
  margin: 0;
}

.home-hero__content {
  align-items: start;
}

.home-hero__resume {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.home-hero__resume-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.home-hero__resume-label,
.home-hero__resume-text {
  margin: 0;
}
</style>
