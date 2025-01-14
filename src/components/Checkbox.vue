<script setup lang="ts">
import { mergeCss, noCss } from '../Utils/twMerge'
import UiFieldHelper from './Field/Helper.vue'
import UiLabel from './Label.vue'

defineOptions({
  name: 'UiCheckbox',
  inheritAttrs: false,
})

defineProps<{
  error?: string
  label?: string
  helper?: string
}>()

const model = defineModel<boolean>()
</script>

<template>
  <div class="relative flex items-start">
    <div class="flex h-6 items-center">
      <input
        v-model="model"
        data-control
        type="checkbox"
        :class="mergeCss('h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 disabled:text-indigo-500/70 disabled:cursor-not-allowed', $attrs)"
        v-bind="noCss($attrs)"
      >
    </div>
    <div class="ml-3 text-sm/6">
      <slot>
        <UiLabel v-if="label">
          {{ label }}
        </UiLabel>
        <UiFieldHelper v-if="helper || error" :error>
          {{ helper }}
        </UiFieldHelper>
      </slot>
    </div>
  </div>
</template>
