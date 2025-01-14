<script setup lang="ts">
import { DialogTitle } from '@headlessui/vue'


defineOptions({
  name: 'SliderHeader',
  inheritAttrs: false,
})

defineProps({
  title: {
    type: String,
  },
})
</script>

<template>
  <div class="bg-gray-50 px-4 py-6 sm:px-6">
    <div class="flex items-start justify-between space-x-3">
      <div class="space-y-1">
        <slot>
          <DialogTitle class="text-base font-semibold leading-6 text-gray-900">
            {{ title }}
          </DialogTitle>
        </slot>
      </div>
      <div class="flex h-7 items-center">
        <button
          type="button"
          class="relative text-gray-400 hover:text-gray-500"
          data-close
        >
          <span class="absolute -inset-2.5" />
          <span class="sr-only">Close panel</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

        </button>
      </div>
    </div>
  </div>
</template>
