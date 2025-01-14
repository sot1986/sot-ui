<script setup lang="ts">
import { ListboxLabel } from '@headlessui/vue'

defineOptions({
  name: 'UiSelectLabel',
  inheritAttrs: false,
})
</script>

<template>
  <ListboxLabel data-label class="block text-sm font-medium leading-6 text-gray-900 group-has-[[data-control][required]]:after:content-['*'] group-has-[[data-control][required]]:after:text-red-800 group-has-[[data-control][required]]:after:ml-1">
    <slot />
  </ListboxLabel>
</template>
