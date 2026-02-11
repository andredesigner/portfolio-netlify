<template>
  <div class="page">
    <header class="site-header">
      <div class="container header-inner">
        <div class="brand" data-node-id="2362:9">
          <BrandMark class="brand-icon" role="img" aria-label="André Oliveira" />
        </div>
        <div class="header-actions">
          <a
            class="pill-button"
            target="_blank"
            href="https://www.dropbox.com/scl/fi/hb1syvsmrbnknvf3fb7x7/andre-oliveira-curriculo.pdf?rlkey=sda5kzkh6d20gf1clm63j68my&e=1&st=kdu9nou9&dl=0"
            aria-label="Baixar currículo"
          >
            <IconDownload class="icon" aria-hidden="true" />
            <span>Currículo</span>
          </a>
        </div>
      </div>
    </header>

    <main>
      <section class="hero container" aria-labelledby="hero-title">
        <div class="hero-left">
          <div class="hero-text">
            <p class="hero-kicker">
              UX Designer na <strong><a target="_blank" href="https://www.onebox.one/">Onebox</a></strong>
            </p>
            <h1 id="hero-title">UX Designer focado em experiências escaláveis.</h1>
          </div>
          <a class="hero-cta" href="#projetos">Ver projetos</a>
        </div>
        <div class="hero-right">
          <div class="resume-row">
            <p class="resume-label">Atuação profissional</p>
            <p class="resume-text">
              Designer de produto com atuação em ambientes de agência, startups e
              empresas de tecnologia, lidando com diferentes níveis de complexidade
              e maturidade de produto.
            </p>
          </div>
          <div class="resume-row">
            <p class="resume-label">Experiência em produto</p>
            <p class="resume-text">
              Mais de 10 anos projetando produtos digitais, websites e sistemas,
              atuando do discovery à entrega e colaborando com times multidisciplinares.
            </p>
          </div>
          <div class="resume-row">
            <p class="resume-label">Base visual e UX</p>
            <p class="resume-text">
              Formação em design gráfico, com especialização em UX, o que garante
              decisões consistentes entre experiência, identidade visual e interface.
            </p>
          </div>
          <a
            class="text-link"
            href="https://www.linkedin.com/in/andreoliveiradesigner/"
            target="_blank"
            aria-label="Veja meu Linkedin"
          >
            Veja meu Linkedin
            <span class="arrow">
              <IconArrow class="icon" aria-hidden="true" />
            </span>
          </a>
        </div>
      </section>

      <div class="companies-row container">
        <p class="companies-title">Colaborei com</p>
        <div class="companies-logos">
          <div class="companies-track" aria-hidden="true">
            <div v-for="company in companies" :key="`primary-${company.name}`" class="company-logo">
              <component
                :is="company.component"
                class="company-logo-svg"
                :class="company.class"
                role="img"
                :aria-label="company.name"
              />
            </div>
            <div v-for="company in companies" :key="`dup-${company.name}`" class="company-logo">
              <component
                :is="company.component"
                class="company-logo-svg"
                :class="company.class"
                role="img"
                :aria-label="company.name"
              />
            </div>
          </div>
        </div>
      </div>

      <section id="projetos" class="cases container" aria-labelledby="cases-title">
        <div id="cases-title" class="cases-title">
          <p>Projetos</p>
          <p>selecionados</p>
        </div>
        <div class="cases-list">
          <article v-for="item in caseProjects" :key="item.slug" class="case-item">
            <div class="case-text">
              <p class="case-eyebrow">{{ item.client || item.title }}</p>
              <h2 class="case-title">{{ item.title }}</h2>
            </div>
            <NuxtLink class="text-link" :to="`/projetos/${item.slug}`" aria-label="Veja mais detalhes">
              Veja mais detalhes
              <span class="arrow">
                <IconArrow class="icon" aria-hidden="true" />
              </span>
            </NuxtLink>
          </article>
        </div>
      </section>

      <section class="identity container" aria-labelledby="identity-title">
        <h3 id="identity-title">Identidade visual</h3>
        <div class="identity-grid">
          <article v-for="item in brandingProjects" :key="item.slug" class="identity-card">
            <div class="identity-image">
              <img :src="item.coverImage.src" :alt="item.coverImage.alt" />
            </div>
            <NuxtLink class="text-link" :to="`/projetos/${item.slug}`" aria-label="Veja mais detalhes">
              Ver projeto
              <span class="arrow">
                <IconArrow class="icon" aria-hidden="true" />
              </span>
            </NuxtLink>
          </article>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getAllProjects } from '~/lib/projects'
import BrandMark from '~/components/BrandMark.vue'
import IconArrow from '~/components/icons/IconArrow.vue'
import IconDownload from '~/components/icons/IconDownload.vue'
import LogoBettha from '~/components/logos/LogoBettha.vue'
import LogoDistrito from '~/components/logos/LogoDistrito.vue'
import LogoInnocean from '~/components/logos/LogoInnocean.vue'
import LogoMartinLuz from '~/components/logos/LogoMartinLuz.vue'
import LogoHyundai from '~/components/logos/LogoHyundai.vue'

const allProjects = getAllProjects()
const caseProjects = computed(() => allProjects.filter((project) => project.type === 'digital'))
const brandingProjects = computed(() => allProjects.filter((project) => project.type === 'branding'))

const companies = [
  { name: 'Martin Luz', component: LogoMartinLuz, class: 'company-logo-svg--martinluz' },
  { name: 'Innocean', component: LogoInnocean, class: 'company-logo-svg--innocean' },
  { name: 'Hyundai', component: LogoHyundai, class: 'company-logo-svg--hyundai' },
  { name: 'Distrito', component: LogoDistrito, class: 'company-logo-svg--distrito' },
  { name: 'Bettha', component: LogoBettha, class: 'company-logo-svg--bettha' },
]

</script>

<style scoped>
.page {
  padding: 0 12px;
}

.header-inner {
  display: flex;
  align-items: center;
  gap: 24px;
}

.header-actions {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
}

.hero {
  padding: 64px 0 128px;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.hero-left,
.hero-right {
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero-kicker {
  font-size: 18px;
  line-height: 1.52;
  letter-spacing: 0.144px;
  margin: 0;
  font-weight: 400;
}

.hero-kicker strong {
  font-weight: 700;
}

.hero-kicker a {
  text-decoration: underline;
}

.hero h1 {
  font-size: clamp(40px, 6vw, 94px);
  font-weight: 500;
  line-height: 1.15;
  margin: 0;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  border-radius: 999px;
  background: #ffb607;
  color: #0e0b0f;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  width: fit-content;
}

.companies-row {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}

.companies-title {
  font-size: 16px;
  line-height: 1.52;
  letter-spacing: 0.128px;
  margin: 0;
  font-weight: 500;
}

.companies-logos {
  display: flex;
  overflow: hidden;
  align-items: center;
  position: relative;
}

.company-logo {
  display: flex;
  justify-content: center;
  height: 42px;
  align-items: center;
  filter: grayscale(100%);
  flex: 0 0 auto;
}

.companies-track {
  display: flex;
  align-items: center;
  gap: 32px;
}

.company-logo-svg {
  max-width: 170px;
  height: auto;
}

.company-logo-svg--martinluz {
  width: 168px;
  height: 42px;
}

.company-logo-svg--innocean {
  width: 129px;
  height: 20px;
}

.company-logo-svg--hyundai {
  width: 169px;
  height: 26px;
}

.company-logo-svg--distrito {
  width: 107px;
  height: 29px;
}

.company-logo-svg--bettha {
  width: 96px;
  height: 24px;
}

.cases {
  display: flex;
  flex-direction: column;
  gap: 128px;
  padding: 128px 0;
}

.cases-title {
  font-size: 36px;
  font-weight: 500;
  line-height: 1.15;
  margin: 0;
}

.cases-title p {
  margin: 0;
}

.cases-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 64px;
}

.case-item {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.case-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.case-eyebrow {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.16px;
  text-transform: uppercase;
  margin: 0;
}

.case-title {
  font-size: 24px;
  font-weight: 500;
  line-height: 1.15;
  margin: 0;
}

.resume-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.resume-label {
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.192px;
  line-height: 1.52;
  margin: 0;
}

.resume-text {
  font-size: 20px;
  letter-spacing: 0.16px;
  margin: 0;
  line-height: 1.52;
  font-weight: 500;
}

.identity {
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding-bottom: 128px;
}

.identity .identity-title {
  font-size: 24px;
  font-weight: 500;
  line-height: 1.15;
  margin: 0;
}

.identity-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 64px;
}

.identity-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.identity-image {
  border-radius: 16px;
  overflow: hidden;
  height: 280px;
}

.identity-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 899px) {
  .header-inner {
    padding-left: 8px;
    padding-right: 8px;
  }

  .companies-logos {
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

  .companies-row {
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: center;
  }

  .companies-track {
    animation: logos-marquee 16s linear infinite;
    will-change: transform;
  }

  .company-logo-svg--martinluz {
    width: 126px;
    height: 32px;
  }

  .company-logo-svg--innocean {
    width: 97px;
    height: 15px;
  }

  .company-logo-svg--hyundai {
    width: 127px;
    height: 20px;
  }

  .company-logo-svg--distrito {
    width: 80px;
    height: 22px;
  }

  .company-logo-svg--bettha {
    width: 72px;
    height: 18px;
  }

}

@media (prefers-reduced-motion: reduce) {
  .companies-track {
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

@media (min-width: 900px) {
  .page {
    padding: 0 24px;
  }

  .cases {
    max-width: 100%;
  }

  .cases-title {
    font-size: 48px;
  }

  .cases-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 142px;
    row-gap: 128px;
  }

  .case-title {
    font-size: 36px;
  }

  .identity #identity-title {
    font-size: 36px;
  }

  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 64px 24px;
  }

  .companies-row {
    flex-direction: row;
    align-items: center;
    margin-bottom: 32px;
  }

  .companies-logos {
    flex: 1;
  }

  .companies-track {
    width: 100%;
  }

  .companies-track > :nth-child(n + 6) {
    display: none;
  }

  .companies-track > .company-logo {
    flex: 1 1 0;
    justify-content: center;
  }

  .identity-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .identity-image {
    height: 448px;
  }

}
</style>
