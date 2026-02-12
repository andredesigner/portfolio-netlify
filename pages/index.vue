<template>
  <div class="home-page">
    <div class="home-page__frame container">
      <HomeHeader />

      <main>
        <HomeHero :resume-items="resumeItems" />
        <HomeCompanies :companies="companies" />
        <HomeDigitalProjects :projects="caseProjects" />
        <HomeIdentityProjects :projects="brandingProjects" />
      </main>
    </div>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getAllProjects } from '~/lib/projects'
import HomeHeader from '~/components/home/HomeHeader.vue'
import HomeHero from '~/components/home/HomeHero.vue'
import HomeCompanies from '~/components/home/HomeCompanies.vue'
import HomeDigitalProjects from '~/components/home/HomeDigitalProjects.vue'
import HomeIdentityProjects from '~/components/home/HomeIdentityProjects.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import LogoBettha from '~/components/logos/LogoBettha.vue'
import LogoDistrito from '~/components/logos/LogoDistrito.vue'
import LogoInnocean from '~/components/logos/LogoInnocean.vue'
import LogoMartinLuz from '~/components/logos/LogoMartinLuz.vue'
import LogoHyundai from '~/components/logos/LogoHyundai.vue'

const allProjects = getAllProjects()
const digitalOrder: Record<string, number> = {
  'grupo-paes-site': 1,
  'bepay-pix-automatico': 2,
  'good-vibes-interface-remota': 3,
  'hyundai-reserva-online': 4,
}

const caseProjects = computed(() =>
  allProjects
    .filter((project) => project.type === 'digital')
    .sort((a, b) => (digitalOrder[a.slug] ?? 999) - (digitalOrder[b.slug] ?? 999)),
)
const brandingProjects = computed(() => allProjects.filter((project) => project.type === 'branding'))

const resumeItems = [
  {
    label: 'Atuação profissional',
    text:
      'Designer de produto com atuação em ambientes de agência, startups e empresas de tecnologia, lidando com diferentes níveis de complexidade e maturidade de produto.',
  },
  {
    label: 'Experiência em produto',
    text:
      'Mais de 10 anos projetando produtos digitais, websites e sistemas, atuando do discovery à entrega e colaborando com times multidisciplinares.',
  },
  {
    label: 'Base visual e UX',
    text:
      'Formação em design gráfico, com especialização em UX, o que garante decisões consistentes entre experiência, identidade visual e interface.',
  },
]

const companies = [
  { name: 'Martin Luz', component: LogoMartinLuz, class: 'company-logo-svg--martinluz' },
  { name: 'Innocean', component: LogoInnocean, class: 'company-logo-svg--innocean' },
  { name: 'Hyundai', component: LogoHyundai, class: 'company-logo-svg--hyundai' },
  { name: 'Distrito', component: LogoDistrito, class: 'company-logo-svg--distrito' },
  { name: 'Bettha', component: LogoBettha, class: 'company-logo-svg--bettha' },
]
</script>

<style scoped>
.home-page {
  padding: 0 var(--page-gutter);
}

.home-page__frame {
  width: 100%;
}

:deep(.company-logo-svg--martinluz) {
  width: 168px;
  height: 42px;
}

:deep(.company-logo-svg--innocean) {
  width: 129px;
  height: 20px;
}

:deep(.company-logo-svg--hyundai) {
  width: 169px;
  height: 26px;
}

:deep(.company-logo-svg--distrito) {
  width: 107px;
  height: 29px;
}

:deep(.company-logo-svg--bettha) {
  width: 96px;
  height: 24px;
}

@media (max-width: 899px) {
  .home-page {
    padding: 0 12px;
  }

  :deep(.company-logo-svg--martinluz) {
    width: 126px;
    height: 32px;
  }

  :deep(.company-logo-svg--innocean) {
    width: 97px;
    height: 15px;
  }

  :deep(.company-logo-svg--hyundai) {
    width: 127px;
    height: 20px;
  }

  :deep(.company-logo-svg--distrito) {
    width: 80px;
    height: 22px;
  }

  :deep(.company-logo-svg--bettha) {
    width: 72px;
    height: 18px;
  }
}
</style>
