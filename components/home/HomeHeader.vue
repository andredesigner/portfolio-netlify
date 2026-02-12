<template>
  <header class="site-header">
    <div class="layout-two-columns home-header">
      <div class="brand">
        <BrandMark class="brand-icon" role="img" aria-label="André Oliveira" />
      </div>
      <div class="home-header__actions">
        <AppPillButton
          href="https://www.dropbox.com/scl/fi/hb1syvsmrbnknvf3fb7x7/andre-oliveira-curriculo.pdf?rlkey=sda5kzkh6d20gf1clm63j68my&e=1&st=kdu9nou9&dl=0"
          target="_blank"
          rel="noreferrer"
          aria-label="Baixar currículo"
          variant="neutral"
        >
          <template #icon>
            <IconDownload class="home-header__icon" aria-hidden="true" />
          </template>
          Currículo
        </AppPillButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import BrandMark from '~/components/BrandMark.vue'
import IconDownload from '~/components/icons/IconDownload.vue'
import AppPillButton from '~/components/ui/AppPillButton.vue'
</script>

<style scoped>
.home-header {
  align-items: center;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}

.home-header__actions {
  display: flex;
  justify-content: flex-start;
}

.home-header__icon {
  width: 24px;
  height: 24px;
}

@media (min-width: 900px) {
  
}
</style>
