<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, watch } from 'vue'

const route = useRoute()
let cleanup: (() => void) | null = null

const setupFooterObserver = async () => {
  if (cleanup) {
    cleanup()
    cleanup = null
  }

  await nextTick()
  const footer = document.querySelector<HTMLElement>('footer.site-footer')

  if (!footer) {
    document.body.classList.remove('footer-in-view')
    return
  }

  let ticking = false

  const update = () => {
    ticking = false
    const footerTop = footer.offsetTop
    const scrollTop = window.scrollY || window.pageYOffset
    const isAtTop = scrollTop >= footerTop
    document.body.classList.toggle('footer-in-view', isAtTop)
  }

  const onScroll = () => {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(update)
    }
  }

  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)

  cleanup = () => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
    document.body.classList.remove('footer-in-view')
  }
}

onMounted(() => {
  setupFooterObserver()
})

watch(
  () => route.fullPath,
  () => {
    setupFooterObserver()
  },
)

onBeforeUnmount(() => {
  cleanup?.()
  cleanup = null
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');

html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  color: #0e0b0f;
  background: #ffffff;
}

img {
  display: block;
}

a {
  color: inherit;
}
</style>
