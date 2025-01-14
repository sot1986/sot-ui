<script setup lang="ts">
import { RadioGroupOption } from '@headlessui/vue'
import { mergeCss, noCss } from '../../Utils/twMerge'

defineOptions({
  name: 'UiRadioOption',
  inheritAttrs: false,
})
</script>

<template>
  <RadioGroupOption v-slot="{ checked }" v-bind="noCss($attrs)" as="label" class="flex items-center">
    <input
      type="radio"
      data-control
      :checked="checked"
      :class="mergeCss('relative size-4 appearance-none rounded-full border border-skin-base-field bg-skin-base-field before:absolute before:inset-1 before:rounded-full before:bg-skin-base-field checked:border-skin-checked-field checked:bg-skin-checked-field focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skin-focus-field disabled:border-skin-disabled-field disabled:bg-skin-disabled-field focus:ring-skin-focus-field focus:text-skin-focus-option disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden checked:hover:text-skin-focus-option', $attrs)"
    >
    <span class="ml-3 block text-sm/6 font-medium text-skin-base-option">
      <slot />
    </span>
  </RadioGroupOption>
</template>
