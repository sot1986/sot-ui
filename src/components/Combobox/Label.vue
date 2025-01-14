<script setup lang="ts">
import { ComboboxLabel } from '@headlessui/vue'

defineOptions({
  name: 'UiComboboxLabel',
  inheritAttrs: false,
})
</script>

<template>
  <ComboboxLabel data-label class="block text-sm font-medium leading-6 text-gray-900 group-has-[[data-control][required]]:after:content-['*'] group-has-[[data-control][required]]:after:text-red-800 group-has-[[data-control][required]]:after:ml-1">
    <slot />
  </ComboboxLabel>
</template>
