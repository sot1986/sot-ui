<script setup lang="ts">
defineOptions({
  name: 'UiFieldHelper',
})

withDefaults(defineProps<{
  as?: string
  error?: string | string[]
}>(), {
  as: 'p',
})
</script>

<template>
  <component :is="as" data-helper class="mt-2 text-sm text-skin-helper-field">
    <template v-if="!error">
      <slot />
    </template>
    <template v-else>
      <slot name="error" :error="error">
        {{ typeof error === 'string' ? error : error.join(', ') }}
      </slot>
    </template>
  </component>
</template>
