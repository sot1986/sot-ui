<script setup lang="ts">
import { DialogTitle } from '@headlessui/vue'

defineOptions({
  name: 'UiModalTitle',
})
</script>

<template>
  <DialogTitle as="h3" class="text-base font-semibold text-gray-900">
    <slot />
  </DialogTitle>
</template>
