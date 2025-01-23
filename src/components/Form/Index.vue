<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

defineOptions({
  name: 'UiForm',
})

const props = withDefaults(defineProps<{
  novalidate?: boolean
  autocomplete?: 'on' | 'off'
  form?: {
    processing?: boolean
    errors?: Record<string, | string>
    valid?: (key: string) => boolean
    invalid?: (key: string) => boolean
  }
  injectKey?: string
}>(), {
  novalidate: true,
  autocomplete: 'off',
})

const el = ref<HTMLElement | null>(null)

const keys: string[] = []

onMounted(() => {
  if (!el.value || !props.form)
    return

  el.value.querySelectorAll('[data-field]').forEach((e) => {
    const key = e.getAttribute('data-field')
    if (!key)
      return

    keys.push(key)

    if (props.injectKey)
      e.setAttribute('data-form-key', props.injectKey)
  })
})

watch(() => props.form?.processing, (value) => {
  if (!el.value)
    return

  el.value.toggleAttribute('data-loading', value)
  const submitEl = el.value.querySelector('button[type="submit"]')
  submitEl?.toggleAttribute('disabled', value)
  submitEl?.toggleAttribute('aria-disabled', value)
  submitEl?.toggleAttribute('data-loading', value)
}, { immediate: true })

watch(() => Object.keys(props.form?.errors ?? {}), () => {
  if (!el.value)
    return

  keys.forEach((key) => {
    const e = el.value?.querySelector(`[data-field="${key}"]`)
    if (!e)
      return

    if (props.form?.valid && props.form?.valid(key)) {
      e.classList.remove('field-error')
      e.querySelector('[data-control]')?.removeAttribute('aria-invalid')
      return
    }

    if (props.form?.invalid && props.form?.invalid(key)) {
      e.classList.add('field-error')
      e.querySelector('[data-control]')?.setAttribute('aria-invalid', 'true')
    }
  })
}, { immediate: true })
</script>

<template>
  <form
    ref="el"
    data-form
    :novalidate
    :autocomplete
  >
    <slot />
  </form>
</template>
