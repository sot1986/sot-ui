<script setup lang="ts">
import { mergeCss, noCss } from '../../Utils/twMerge'

defineOptions({
  name: 'UiRadioOptions',
  inheritAttrs: false,
})

withDefaults(defineProps<{
  alignment?: 'horizontal' | 'vertical'
  as?: string
}>(), {
  alignment: 'vertical',
  as: 'div',
})
</script>

<template>
  <component
    :is="as"
    v-bind="noCss($attrs)"
    :class="alignment === 'horizontal'
      ? mergeCss('mt-2 space-y-6 sm:flex sm:items-center sm:gap-x-10 sm:space-y-0 sm:flex-wrap', $attrs)
      : mergeCss('mt-6 space-y-6', $attrs)"
  >
    <slot />
  </component>
</template>
