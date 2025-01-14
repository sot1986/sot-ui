<script setup lang="ts">
import { ComboboxOption } from '@headlessui/vue'

defineOptions({
  name: 'UiComboboxOption',
})
</script>

<template>
  <ComboboxOption v-slot="{ active, selected }" as="template">
    <li class="relative cursor-default select-none py-2 pl-3 pr-9" :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
      <div class="flex">
        <span class="truncate" :class="[selected && 'font-semibold']">
          <slot v-bind="{ active, selected }" />
        </span>
        <span class="ml-2 truncate text-gray-500" :class="[active ? 'text-indigo-200' : 'text-gray-500']">
          <slot v-bind="{ active, selected }" name="description" />
        </span>
      </div>

      <span v-if="selected" class="absolute inset-y-0 right-0 flex items-center pr-4" :class="[active ? 'text-white' : 'text-indigo-600']">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5" aria-hidden="true">
          <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
        </svg>
      </span>
    </li>
  </ComboboxOption>
</template>
