<script setup lang="ts">
import { RadioGroupLabel } from '@headlessui/vue'
import { mergeCss, noCss } from '../../Utils/twMerge'

defineOptions({
  name: 'UiRadioLabel',
  inheritAttrs: false,
})
</script>

<template>
  <div>
    <RadioGroupLabel data-label as="legend" :class="mergeCss(`block text-sm font-medium leading-6 text-skin-label-field group-has-[[data-control][required]]:after:content-['*'] group-has-[[data-control][required]]:after:text-skin-label-required-marker group-has-[[data-control][required]]:after:ml-1`, $attrs)" v-bind="noCss($attrs)">
      <slot />
    </RadioGroupLabel>
  </div>
</template>
