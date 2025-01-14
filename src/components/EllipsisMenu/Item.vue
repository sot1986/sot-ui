<script setup lang="ts">
import { MenuItem } from '@headlessui/vue'

defineOptions({
  name: 'UiEllipsisMenuItem',
  inheritAttrs: false,
})

withDefaults(defineProps<{
  as?: string | Record<string, unknown>
}>(), { as: 'button' })
</script>

<template>
  <MenuItem v-slot="{ active }">
    <component
      v-bind="$attrs"
      :is="as"
      class="w-full text-right block px-4 py-2 text-sm"
      :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']"
      type="button"
    >
      <slot />
    </component>
  </MenuItem>
</template>
