<template>
  <section class="home-companies" aria-label="Colaborei com">
    <p class="t-paragraph home-companies__title">Colaborei com</p>
    <div class="home-companies__logos">
      <div class="home-companies__track" aria-hidden="true">
        <div v-for="company in companies" :key="`primary-${company.name}`" class="home-companies__logo-item">
          <component
            :is="company.component"
            :class="['home-companies__logo', company.class]"
            role="img"
            :aria-label="company.name"
          />
        </div>
        <div v-for="company in companies" :key="`dup-${company.name}`" class="home-companies__logo-item">
          <component
            :is="company.component"
            :class="['home-companies__logo', company.class]"
            role="img"
            :aria-label="company.name"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  companies: Array<{
    name: string
    component: unknown
    class?: string
  }>
}>()
</script>

<style scoped>
.home-companies {
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.home-companies__title {
  margin: 0;
  text-align: center;
}

.home-companies__logos {
  display: flex;
  overflow: hidden;
  align-items: center;
  position: relative;
}

.home-companies__track {
  display: flex;
  align-items: center;
  gap: 32px;
}

.home-companies__logo-item {
  display: flex;
  justify-content: center;
  height: 42px;
  align-items: center;
  flex: 0 0 auto;
  filter: grayscale(100%);
}

.home-companies__logo {
  max-width: 168px;
  height: auto;
}

@media (max-width: 899px) {
  .home-companies {
    gap: 4px;
  }

  .home-companies__logos {
    -webkit-mask-image: linear-gradient(
      90deg,
      transparent 0%,
      #000 12%,
      #000 88%,
      transparent 100%
    );
    mask-image: linear-gradient(
      90deg,
      transparent 0%,
      #000 12%,
      #000 88%,
      transparent 100%
    );
  }

  .home-companies__track {
    animation: logos-marquee 16s linear infinite;
    will-change: transform;
  }
}

@media (min-width: 900px) {
  .home-companies {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }

  .home-companies__logos {
    width: 100%;
  }

  .home-companies__track {
    width: 100%;
    gap: 0;
  }

  .home-companies__track > :nth-child(n + 6) {
    display: none;
  }

  .home-companies__track > .home-companies__logo-item {
    flex: 1 1 0;
    justify-content: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-companies__track {
    animation: none;
    transform: translateX(0);
  }
}

@keyframes logos-marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
</style>
