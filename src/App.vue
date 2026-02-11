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
        <div class="hero-text">
          <p class="hero-kicker">
            UX Designer na <strong><a target="_blank" href="https://www.onebox.one/">Onebox</a></strong>
          </p>
          <h1 id="hero-title">
            UX Designer <span>focado em soluções</span> escaláveis.
          </h1>
        </div>
      </section>

      <section class="cases container" aria-label="Projetos selecionados">
        <div class="companies-row">
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
        <div class="cases-grid">
          <article v-for="item in primaryCases" :key="item.title" class="case-card">
            <a href="#" aria-label="Veja mais detalhes">
              <div class="case-logo">
                <component
                  :is="item.logo"
                  class="case-logo__svg"
                  :class="item.logoClass"
                  role="img"
                  :aria-label="item.logoLabel"
                />
              </div>
              <div class="case-content">
                <p class="case-title">{{ item.title }}</p>
                <span class="text-link text-link--light">
                  Ver projeto
                  <span class="arrow">
                    <IconArrow class="icon" aria-hidden="true" />
                  </span>
                </span>
              </div>
            </a>
          </article>
        </div>
      </section>

      <section class="emphasis container" aria-labelledby="emphasis-title">
        <div class="emphasis-left">
          <p id="emphasis-title" class="emphasis-title">
            Crio soluções
            <span>escaláveis entre</span>
            UX, marca e tecnologia.
          </p>
          
        </div>
        <div class="emphasis-right">
          <div class="resume-row">
            <p class="resume-label">Atuação profissional</p>
            <p class="resume-text">
              Designer de produto com atuação em ambientes de agência, startups e
              empresas de tecnologia, lidando com diferentes níveis de complexidade
              e maturidade de produto.
            </p>
          </div>
          <div class="resume-row resume-row--divider">
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

      <section class="identity container" aria-labelledby="identity-title">
        <h2 id="identity-title">Identidade visual</h2>
        <div class="identity-grid">
          <article class="identity-card">
            <div class="identity-image placeholder"></div>
            <a class="text-link" href="#" aria-label="Veja mais detalhes">
              Veja mais detalhes
              <span class="arrow">
                <IconArrow class="icon" aria-hidden="true" />
              </span>
            </a>
          </article>
          <article class="identity-card">
            <div class="identity-image">
              <img :src="assets.identityOne" alt="Maella Bela" />
            </div>
            <a class="text-link" href="#" aria-label="Veja mais detalhes">
              Veja mais detalhes
              <span class="arrow">
                <IconArrow class="icon" aria-hidden="true" />
              </span>
            </a>
          </article>
          <article class="identity-card">
            <div class="identity-image">
              <img :src="assets.identityTwo" alt="Identidade visual" />
            </div>
            <a class="text-link" href="#" aria-label="Veja mais detalhes">
              Veja mais detalhes
              <span class="arrow">
                <IconArrow class="icon" aria-hidden="true" />
              </span>
            </a>
          </article>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-brand">
          <BrandMark class="brand-icon brand-icon--footer" role="img" aria-label="André Oliveira" />
        </div>
        <div class="footer-links">
          <a href="https://dribbble.com/andreoliveiradesigner" target="_blank" rel="noreferrer">Dribbble</a>
          <a href="https://www.instagram.com/andreoliveira.des.br" target="_blank" rel="noreferrer">Instagram</a>
          <a href="mailto:andreoliveiradesigner@gmail.com">E-mail</a>
        </div>
        <div class="footer-meta">
          <p>Produtos são feitos por pessoas, para pessoas.</p>
          <p>© andré oliveira 2026</p>
        </div>
      </div>
      <div class="footer-skyline" aria-hidden="true">
        <FooterSkyline class="footer-skyline-svg" />
      </div>
    </footer>
  </div>
</template>

<script setup>
import BrandMark from './components/BrandMark.vue'
import IconArrow from './components/icons/IconArrow.vue'
import IconDownload from './components/icons/IconDownload.vue'
import LogoBettha from './components/logos/LogoBettha.vue'
import LogoDistrito from './components/logos/LogoDistrito.vue'
import LogoGrupoPaes from './components/logos/LogoGrupoPaes.vue'
import LogoHyundai from './components/logos/LogoHyundai.vue'
import LogoInnocean from './components/logos/LogoInnocean.vue'
import LogoMartinLuz from './components/logos/LogoMartinLuz.vue'
import LogoBepay from './components/logos/LogoBepay.vue'
import LogoGoodVibres from './components/logos/LogoGoodVibres.vue'
import FooterSkyline from './components/FooterSkyline.vue'

const assets = {
  identityOne: 'https://www.figma.com/api/mcp/asset/b6c1aeb6-1519-4ff2-9d0f-a319bcbfd2c5',
  identityTwo: 'https://www.figma.com/api/mcp/asset/6dd86a72-a083-4da8-9d53-67c167d507a4',
}

const companies = [
  { name: 'Martin Luz', component: LogoMartinLuz, class: 'company-logo-svg--martinluz' },
  { name: 'Innocean', component: LogoInnocean, class: 'company-logo-svg--innocean' },
  { name: 'Hyundai', component: LogoHyundai, class: 'company-logo-svg--hyundai' },
  { name: 'Distrito', component: LogoDistrito, class: 'company-logo-svg--distrito' },
  { name: 'Bettha', component: LogoBettha, class: 'company-logo-svg--bettha' },
]

const primaryCases = [
  {
    title: 'Criação e implementação do site institucional',
    logo: LogoGrupoPaes,
    logoClass: 'case-logo__svg--grupo',
    logoLabel: 'Grupo Paes',
  },
  {
    title: 'Experiência de Pix automático',
    logo: LogoBepay,
    logoClass: 'case-logo__svg--bepay',
    logoLabel: 'Bepay',
  },
  {
    title: 'Interface para controle remoto de hardware',
    logo: LogoGoodVibres,
    logoClass: 'case-logo__svg--goodvibes',
    logoLabel: 'Good Vibes',
  },
  {
    title: 'Criação da experiência de reserva de carros online',
    logo: LogoHyundai,
    logoClass: 'case-logo__svg--hyundai',
    logoLabel: 'Hyundai',
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');

:global(html) {
  scroll-behavior: smooth;
}

:global(*) {
  box-sizing: border-box;
}

:global(body) {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  color: #0e0b0f;
  background: #ffffff;
}

:global(img) {
  display: block;
}

a {
  color: inherit;
}

.page {
  padding: 0 12px;
}

.container {
  margin: 0 auto;
  width: 100%;
  max-width: 1392px;
}

.site-header {
  padding: 16px 0;
  background-color: #fff;
}

.header-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: space-between;
}

.brand .brand-icon {
  width: 32px;
  height: 45px;
  color: #0e0b0f;
}

.brand-icon--footer {
  width: 112px;
  height: 260px;
  color: #ffb607;
}

.footer-skyline-svg {
  width: 100%;
  height: auto;
  display: block;
  flex-shrink: 0;
}

.footer-skyline-svg--short {
  width: 208px;
}

.pill-button {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 10px 20px 10px 16px;
  border-radius: 999px;
  background: #ececec;
  color: inherit;
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
}

.pill-button .icon {
  width: 24px;
  height: 24px;
}

.hero {
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hero-kicker {
  font-size: 14px;
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
  font-size: 32px;
  font-weight: 500;
  margin: 0;
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

.cases-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.case-card {
  background: #0e0b0f;
  border-radius: 32px;
  padding: 32px;
  color: #ffffff;
}

.case-card a {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  text-decoration: none;
  color: inherit;
  height: 100%;
  min-height: 420px;
}

.case-logo {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 160px;
}

.case-logo__svg {
  height: auto;
  max-width: 100%;
}

.case-logo__svg--grupo {
  width: 196px;
}

.case-logo__svg--bepay {
  width: 116px;
}

.case-logo__svg--goodvibes {
  width: 116px;
}

.case-logo__svg--hyundai {
  width: 140px;
  filter: invert(1);
}

.case-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: auto;
}

.case-title {
  font-size: 24px;
  line-height: 1.15;
  margin: 0;
  font-weight: 300;
  text-align: center;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.16px;
  line-height: 1.52;
  color: inherit;
  text-decoration: none;
}

.text-link--light {
  color: #ffffff;
}

.text-link--light .icon {
  filter: invert(1);
}

.arrow {
  width: 24px;
  height: 24px;
  display: inline-flex;
}

.arrow .icon {
  width: 24px;
  height: 24px;
}

.emphasis {
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 128px 0 64px;
}

.emphasis-title {
  font-size: 24px;
  line-height: 1.15;
  font-weight: 500;
  margin: 0;
}

.emphasis-left {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.emphasis-right {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.resume-row {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.resume-row--divider {
  border-top: 1px solid #0e0b0f;
  border-bottom: 1px solid #0e0b0f;
  padding: 32px 0;
}

.resume-label {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.128px;
  line-height: 1.52;
  margin: 0;
}

.resume-text {
  font-size: 16px;
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

.identity h2 {
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

.identity-image.placeholder {
  background: #d9d9d9;
}

.site-footer {
  padding-top: 128px;
  position: relative;
  overflow: hidden;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;
  text-align: center;
}

.footer-links {
  display: flex;
  gap: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.52;
}

.footer-links a {
  text-decoration: none;
}

.footer-meta {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  line-height: 1.52;
  font-weight: 400;
}

.footer-meta p {
  margin: 0;
}

.footer-skyline {
  display: flex;
  gap: 0;
  width: 100%;
  padding-top: 128px;
  justify-content: center;
}

@media (max-width: 899px) {
  .header-inner,
  .emphasis{
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

  .footer-skyline {
    display: block;
  }

  .footer-skyline > :not(:first-child) {
    display: none;
  }

  .hero-text{
    text-align: center;
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

.pill-button:focus-visible,
.text-link:focus-visible {
  outline: 2px solid #0e0b0f;
  outline-offset: 4px;
}

@media (min-width: 900px) {
  .page {
    padding: 0 24px;
  }

  .cases {
    padding-bottom: 64px;
  }

  .identity h2 {
    font-size: 36px;
  }

  .hero-kicker {
    font-size: 18px;
  }

  .resume-text {
    font-size: 20px;
  }

  .pill-button{
    font-size: 16px;
    padding: 16px 32px 16px 28px;
  }

  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 64px 24px;
  }

  .hero-text {
    grid-column: 1;
  }

  .companies-row {
    grid-column: 1 / -1;
  }

  .hero h1 {
    font-size: 52px;
  }

  .hero h1 span{
    display: block;
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

  .cases {
    max-width: 100%;
  }

  .cases-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }

  .case-card {
    height: 700px;
  }

  .case-content {
    gap: 64px;
  }

  .case-title {
    font-size: 48px;
    line-height: 1.15;
  }

  .emphasis {
    flex-direction: row;
    gap: 24px;
    align-items: flex-start;
  }

  .emphasis-left,
  .emphasis-right {
    flex: 1;
  }

  .emphasis-title {
    font-size: 48px;
    line-height: 1.15;
  }

  .emphasis-title{
    span{
      display: block;
    }
  }

  .resume-row {
    flex-direction: row;
    gap: 24px;
    padding-bottom: 64px;
  }

  .resume-label {
    width: 331px;
    flex-shrink: 0;
    font-size: 16px;
  }

  .resume-row--divider {
    padding: 64px 0;
  }

  .identity-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .identity-image {
    height: 448px;
  }

  .brand-icon--footer{
    width: 186px;
  }

  .footer-skyline-svg {
    width: 592px;
  }

  .case-logo__svg--grupo {
    width: 295px;
  }

  .case-logo__svg--bepay {
    width: 161px;
  }

  .case-logo__svg--goodvibes {
    width: 199px;
  }

  .case-logo__svg--hyundai {
    width: 214px;
    filter: invert(1);
  }
  .text-link {
    font-size: 20px;
  }
  
}
</style>
