<script setup lang="ts">
import { mergeCss, noCss } from '../Utils/twMerge'

defineOptions({
  name: 'UiFieldLabel',
  inheritAttrs: false,
})
</script>

<template>
  <label
    data-label
    :class="mergeCss(`block text-sm font-medium leading-6 text-skin-label-field group-has-[[data-control][required]]:after:content-['*'] group-has-[[data-control][required]]:after:text-skin-label-required-marker group-has-[[data-control][required]]:after:ml-1`, $attrs)"
    v-bind="noCss($attrs)"
  >
    <slot />
  </label>
</template>
