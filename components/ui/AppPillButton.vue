<template>
  <component
    :is="tag"
    class="app-pill-button"
    :class="[
      `app-pill-button--${variant}`,
      { 'app-pill-button--full': fullWidth },
    ]"
    v-bind="attrs"
  >
    <slot name="icon" />
    <span><slot /></span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    href?: string
    to?: string
    target?: string
    rel?: string
    ariaLabel?: string
    variant?: 'neutral' | 'primary'
    fullWidth?: boolean
  }>(),
  {
    variant: 'neutral',
    fullWidth: false,
  },
)

const tag = computed(() => {
  if (props.to) return 'NuxtLink'
  if (props.href) return 'a'
  return 'button'
})

const attrs = computed(() => {
  if (props.to) {
    return {
      to: props.to,
      'aria-label': props.ariaLabel,
    }
  }

  if (props.href) {
    return {
      href: props.href,
      target: props.target,
      rel: props.rel,
      'aria-label': props.ariaLabel,
    }
  }

  return {
    type: 'button',
    'aria-label': props.ariaLabel,
  }
})
</script>

<style scoped>
.app-pill-button--full {
  width: 100%;
}
</style>
