<script setup lang="ts">
import { DialogTitle } from '@headlessui/vue'

defineOptions({
  name: 'SliderTitle',
})
</script>

<template>
  <DialogTitle class="text-base font-semibold leading-6 text-gray-900">
    <slot />
  </DialogTitle>
</template>
