<script setup lang="ts">
import type { Component } from 'vue'
import { mergeCss, noCss } from '../Utils/twMerge'

defineOptions({
  name: 'UiButton',
  inheritAttrs: false,
})

withDefaults(defineProps<{
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  css?: 'primary' | 'secondary' | 'tertiary' | 'danger'
  as?: string | Component
}>(), {
  size: 'md',
  css: 'primary',
  as: 'button',
})

const buttonSizeCss = new Map([
  ['xs', 'px-2 py-1 text-xs'],
  ['sm', 'px-2 py-1 text-sm'],
  ['md', 'px-2.5 py-1.5 text-sm'],
  ['lg', 'px-3 py-2 text-sm'],
  ['xl', 'px-3.5 py-2.5 text-sm'],
])

const buttonColorCss = new Map([
  ['primary', 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 disabled:hover:bg-indigo-600'],
  ['secondary', 'bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:hover:bg-white'],
  ['tertiary', 'bg-white text-gray-700 hover:bg-gray-50 disabled:hover:bg-white'],
  ['danger', 'bg-red-600 text-white hover:bg-red-500 focus-visible:outline-red-600 disabled:hover:bg-red-600'],
])
</script>

<template>
  <component
    :is="as"
    :class="mergeCss(['rounded font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 relative', buttonSizeCss.get(size), buttonColorCss.get(css)], $attrs)"
    v-bind="noCss($attrs)"
  >
    <div class="[[data-loading]>&]:opacity-0 transition-opacity delay-100">
      <slot />
    </div>
    <div class="[[data-loading]>&]:opacity-100 opacity-0 absolute inset-0 flex items-center justify-center">
      <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" d="M4 12a8 8 0 018-8V2.5" stroke="currentColor" stroke-width="4" />
      </svg>
    </div>
  </component>
</template>
