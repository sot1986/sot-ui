<script setup lang="ts">
import { RadioGroup } from '@headlessui/vue'
import UiFieldHelper from '../Field/Helper.vue'

defineOptions({
  name: 'UiRadio',
  inheritAttrs: false,
})

defineProps<{
  error?: string
  helper?: string
}>()
</script>

<template>
  <RadioGroup data-control as="fieldset" v-bind="$attrs">
    <slot />
  </RadioGroup>
  <UiFieldHelper v-if="helper || error" :error>
    {{ helper }}
  </UiFieldHelper>
</template>
