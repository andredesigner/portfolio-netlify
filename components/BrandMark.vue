<template>
  <!-- <svg width="32" height="45" viewBox="0 0 32 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2056_1572)">
      <path d="M15.803 1.92515C15.803 1.92515 25.361 0.509019 28.5471 0.0361398C29.7701 -0.145737 31.2464 0.343448 31.5871 1.55261C32.1948 3.70879 31.9502 10.5097 31.9502 10.5097C31.9502 10.5097 30.6823 7.01769 27.0246 5.25787C23.2171 3.42657 15.7992 1.9264 15.7992 1.9264H15.8017L15.803 1.92515Z" fill="currentColor"/>
      <path d="M2.60722 20.6048C-2.02268 30.3847 -0.320477 41.005 6.41098 44.329C6.41722 44.3315 6.42346 44.3353 6.42845 44.3378C12.0829 47.249 21.3502 40.0229 24.6648 32.9009L21.329 42.9166H29.5043V24.9999C29.5043 17.696 28.3363 11.3918 23.1822 8.91701C16.0127 5.4739 7.10235 11.1171 2.60847 20.6035L2.60722 20.6048ZM11.3941 37.5945C4.20585 37.666 6.95384 24.6424 6.95384 24.6424L11.3129 24.0792C11.2331 24.507 11.1894 24.9585 11.1894 25.4239C11.1894 28.29 12.7893 30.613 14.7648 30.613C16.7403 30.613 18.3389 28.2887 18.3389 25.4239C18.3389 24.6336 18.2179 23.8823 17.9982 23.2138L23.0924 22.5552C23.0924 22.5552 18.5823 37.5193 11.3941 37.5933V37.5945Z" fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="clip0_2056_1572">
        <rect width="32" height="45" fill="white"/>
      </clipPath>
    </defs>
  </svg> -->

  <svg
    ref="svgRef"
    class="brand-mark"
    width="186"
    height="260"
    viewBox="0 0 186 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  <g clip-path="url(#clip0_2483_1412)">
  <path d="M91.3058 11.1228C91.3058 11.1228 146.53 2.9407 164.938 0.208513C172.005 -0.842329 180.534 1.98407 182.503 8.97036C186.014 21.4283 184.601 60.7225 184.601 60.7225C184.601 60.7225 177.275 40.5463 156.142 30.3785C134.143 19.7977 91.2842 11.13 91.2842 11.13H91.2986L91.3058 11.1228Z" fill="currentColor"/>
  <path d="M15.0641 119.049C-11.6865 175.555 -1.85151 236.917 37.0414 256.122C37.0774 256.137 37.1135 256.159 37.1423 256.173C69.8126 272.994 123.357 231.243 142.508 190.093L123.234 247.962H170.47V144.443C170.47 102.243 163.721 65.8186 133.942 51.5199C92.5181 31.6264 41.0359 64.2315 15.0713 119.042L15.0641 119.049ZM65.8325 217.212C24.3006 217.625 40.1779 142.378 40.1779 142.378L133.423 130.319C133.423 130.319 107.364 216.777 65.8325 217.205V217.212Z" fill="currentColor"/>
  <ellipse
    class="brand-mark__eye"
    cx="85.3051"
    cy="147"
    rx="20.6501"
    ry="30"
    fill="currentColor"
    :style="{
      '--eye-offset-x': `${eyeOffsetX}px`,
      '--eye-offset-y': `${eyeOffsetY}px`
    }"
  />
  </g>
  <defs>
  <clipPath id="clip0_2483_1412">
  <rect width="185.832" height="260" fill="white"/>
  </clipPath>
  </defs>
  </svg>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const svgRef = ref<SVGSVGElement | null>(null)
const eyeOffsetX = ref(0)
const eyeOffsetY = ref(0)

const VIEWBOX_WIDTH = 186
const VIEWBOX_HEIGHT = 260
const MAX_OFFSET_VIEWBOX = 28
const MAX_OFFSET_VIEWBOX_Y = 18

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

const handlePointerMove = (event: PointerEvent) => {
  const svg = svgRef.value
  if (!svg) return

  const rect = svg.getBoundingClientRect()
  if (!rect.width) return

  const x = event.clientX - rect.left
  const progress = clamp((x / rect.width) * 2 - 1, -1, 1)
  const maxOffsetPx = (rect.width * MAX_OFFSET_VIEWBOX) / VIEWBOX_WIDTH

  eyeOffsetX.value = progress * maxOffsetPx

  const y = event.clientY - rect.top
  const progressY = clamp((y / rect.height) * 2 - 1, -1, 1)
  const maxOffsetYPx = (rect.height * MAX_OFFSET_VIEWBOX_Y) / VIEWBOX_HEIGHT

  eyeOffsetY.value = progressY * maxOffsetYPx
}

const handlePointerLeave = () => {
  eyeOffsetX.value = 0
  eyeOffsetY.value = 0
}

onMounted(() => {
  const svg = svgRef.value
  if (!svg) return

  const container = svg.closest<HTMLElement>('.site-footer') ?? svg

  container.addEventListener('pointermove', handlePointerMove)
  container.addEventListener('pointerleave', handlePointerLeave)
})

onBeforeUnmount(() => {
  const svg = svgRef.value
  if (!svg) return

  const container = svg.closest<HTMLElement>('.site-footer') ?? svg

  container.removeEventListener('pointermove', handlePointerMove)
  container.removeEventListener('pointerleave', handlePointerLeave)
})
</script>

<style scoped>
.brand-mark__eye {
  transform: translate(var(--eye-offset-x, 0px), var(--eye-offset-y, 0px));
  transition: transform 160ms ease;
  will-change: transform;
}
</style>



  
