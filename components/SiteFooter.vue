<template>
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
</template>

<script setup lang="ts">
import BrandMark from '~/components/BrandMark.vue'
import FooterSkyline from '~/components/FooterSkyline.vue'
</script>

<style scoped>
.site-footer {
  min-height: 101vh;
  padding-top: 128px;
  position: relative;
  overflow: hidden;
  align-content: end;
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

@media (max-width: 899px) {
  .footer-skyline {
    display: block;
  }

  .footer-skyline > :not(:first-child) {
    display: none;
  }
}

@media (min-width: 900px) {
  .brand-icon--footer {
    width: 186px;
  }

  .footer-skyline-svg {
    width: 592px;
  }
}
</style>
