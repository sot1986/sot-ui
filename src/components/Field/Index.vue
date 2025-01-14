<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

defineOptions({
  name: 'UiField',
})

const props = withDefaults(defineProps<{
  name: string
  invalid?: boolean
  as?: string
}>(), {
  as: 'div',
  invalid: false,
})

const el = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!el.value) {
    return
  }

  el.value.querySelectorAll('[data-control]').forEach((e) => {
    e.setAttribute('id', `ui-${props.name}`)
    e.setAttribute('name', props.name)
    e.setAttribute('aria-describedby', `ui-helper-${props.name}`)
  })

  const labelEl = el.value.querySelector('[data-label]')
  if (labelEl) {
    labelEl.setAttribute('for', `ui-${props.name}`)
  }

  const helperEl = el.value.querySelector('[data-helper]')
  if (helperEl) {
    helperEl.setAttribute('id', `ui-helper-${props.name}`)
  }
})

watch(() => [props.invalid, !!el.value], ([value]) => {
  if (!el.value) {
    return
  }

  el.value.classList.toggle('field-error', value)
  const controlEl = el.value.querySelector('[data-control]')

  if (controlEl && props.invalid) {
    controlEl.setAttribute('aria-invalid', 'true')
  }
  controlEl?.removeAttribute('aria-invalid')
}, { immediate: true, deep: true })
</script>

<template>
  <component :is="as" ref="el" :data-field="name" class="group">
    <slot />
  </component>
</template>
