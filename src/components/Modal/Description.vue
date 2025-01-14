<script setup lang="ts">
defineOptions({
  name: 'UiModalDescription',
  inheritAttrs: false,
})
</script>

<template>
  <div class="mt-2">
    <p class="text-sm text-gray-500" v-bind="$attrs">
      <slot />
    </p>
  </div>
</template>
