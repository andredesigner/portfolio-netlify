<template>
  <component
    :is="tag"
    class="app-link-arrow"
    :class="{ 'app-link-arrow--compact': compact }"
    v-bind="attrs"
  >
    <span><slot /></span>
    <span class="app-link-arrow__icon" aria-hidden="true">
      <IconArrow class="icon" />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import IconArrow from '~/components/icons/IconArrow.vue'

const props = withDefaults(
  defineProps<{
    href?: string
    to?: string
    target?: string
    rel?: string
    ariaLabel?: string
    compact?: boolean
  }>(),
  {
    compact: false,
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
.icon {
  width: 24px;
  height: 24px;
}

.app-link-arrow--compact {
  line-height: 24px;
}
</style>
