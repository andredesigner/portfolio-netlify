<template>
  <footer class="site-footer">
    <div class="container site-footer__content">
      <div class="site-footer__top">
        <div class="site-footer__brand">
          <BrandMark class="brand-icon brand-icon--footer" role="img" aria-label="André Oliveira" />
        </div>

        <nav class="site-footer__links" aria-label="Redes sociais">
          <a href="https://dribbble.com/andreoliveiradesigner" target="_blank" rel="noreferrer">Dribbble</a>
          <a href="https://www.instagram.com/andreoliveira.des.br" target="_blank" rel="noreferrer">Instagram</a>
          <a href="mailto:andreoliveiradesigner@gmail.com">E-mail</a>
        </nav>
      </div>

      <div class="site-footer__bottom">
        <div class="site-footer__meta">
          <p>Produtos são feitos por pessoas, para pessoas.</p>
          <p>© andré oliveira 2026</p>
        </div>

        <div class="site-footer__skyline" aria-hidden="true">
          <FooterSkyline class="site-footer__skyline-svg" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import BrandMark from '~/components/BrandMark.vue'
import FooterSkyline from '~/components/FooterSkyline.vue'
</script>

<style scoped>
.site-footer {
  min-height: 816px;
  padding-top: 128px;
  padding-bottom: 0;
}

.site-footer__content {
  display: flex;
  flex-direction: column;
  gap: 128px;
}

.site-footer__top {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
}

.site-footer__brand {
  display: flex;
  justify-content: center;
}

.site-footer__links {
  display: flex;
  gap: 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
}

.site-footer__links a {
  text-decoration: none;
  border-bottom: 1px solid #0e0b0f;
  padding-bottom: 16px;
}

.site-footer__bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 128px;
}

.site-footer__meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.site-footer__meta p {
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.2px;
  font-weight: 400;
  margin-bottom: 8px;
}

.site-footer__skyline {
  width: 100%;
  display: flex;
  justify-content: center;
}

.brand-icon--footer {
  width: 182px;
  height: 256px;
  color: #ffb607;
}

.site-footer__skyline-svg {
  width: 592px;
  height: auto;
  display: block;
}

@media (max-width: 899px) {
  .site-footer {
    min-height: 0;
  }

  .site-footer__content {
    gap: 96px;
  }

  .site-footer__links {
    gap: 12px;
    font-size: 14px;
    line-height: 24px;
  }

  .site-footer__links a {
    padding-bottom: 8px;
  }

  .site-footer__bottom {
    gap: 96px;
  }

  .brand-icon--footer {
    width: 140px;
    height: 197px;
  }

  .site-footer__skyline-svg {
    width: 100%;
  }
}
</style>
