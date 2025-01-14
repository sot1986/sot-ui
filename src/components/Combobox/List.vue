<script setup lang="ts">
defineOptions({
  name: 'UiComboboxList',
})

defineEmits(['remove'])
</script>

<template>
  <li class="cursor-pointer select-none" @click.prevent="$emit('remove')">
    <slot />
  </li>
</template>
