<script setup lang="ts">
import { useAttrs } from 'vue'
import { mergeCss, noCss } from '../Utils/twMerge'
import UiFieldErrorIcon from './Field/ErrorIcon.vue'
import UiFieldError from './Field/Helper.vue'
import UiLabel from './Label.vue'

defineOptions({
  name: 'UiFieldInput',
  inheritAttrs: false,
})

withDefaults(defineProps<{
  label?: string
  error?: string
  helper?: string
  variant?: 'default' | 'outline'
}>(), {
  variant: 'default',
})

const attrs = useAttrs()

const [model, modifiers] = defineModel({
  get(value) {
    if (typeof value !== 'string') {
      return value
    }

    if (modifiers.date || attrs.type === 'date') {
      return Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(new Date(value))
    }

    if (modifiers.datetime || attrs.type === 'datetime-local') {
      return Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date(value))
    }

    return value
  },
})
</script>

<template>
  <UiLabel v-if="label">
    {{ label }}
  </UiLabel>
  <div class="relative mt-2 rounded-md shadow-sm">
    <template v-if="variant === 'default'">
      <input
        v-model="model"
        data-control
        :class="mergeCss('block peer w-full rounded-md border-0 py-1.5 aria-[invalid]:pr-10 text-skin-base-field ring-1 ring-inset ring-skin-base-field placeholder:text-skin-placeholder-field focus:ring-2 focus:ring-inset focus:ring-skin-focus-field sm:text-sm sm:leading-6', $attrs)"
        v-bind="noCss($attrs)"
      >
    </template>
    <template v-else>
      <input
        v-model="model"
        data-control
        :class="mergeCss('peer block w-full border-0 bg-skin-outline-field py-1.5 text-skin-base-field placeholder:text-skin-placeholder-field aria-[invalid]:pr-10 focus:ring-0 sm:text-sm sm:leading-6', $attrs)"
        v-bind="noCss($attrs)"
      >
      <div class="absolute inset-x-0 bottom-0 border-t border-skin-outline-field peer-focus:border-t-2 peer-focus:border-skin-focus-field" aria-hidden="true" />
    </template>
    <UiFieldErrorIcon />
  </div>
  <UiFieldError v-if="helper || error" :error>
    {{ helper }}
  </UiFieldError>
</template>
