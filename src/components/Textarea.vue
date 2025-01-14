<script setup lang="ts" generic="T extends string | null | undefined">
import type { BaseTextareaProps } from '../types/uiTypes'
import { useTextareaAutosize } from '@vueuse/core'
import { computed } from 'vue'
import { mergeCss, noCss } from '../Utils/twMerge'
import UiFieldHelper from './Field/Helper.vue'
import UiLabel from './Label.vue'

defineOptions({
  name: 'UiFieldTextarea',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BaseTextareaProps<T>>(), {
  autosize: false,
  variant: 'default',
  rows: undefined,
})

const emits = defineEmits<{
  (e: 'update:model-value', value: T): void
}>()

const getValue = computed({
  get() {
    return props.modelValue ?? ''
  },
  set(newValue: string) {
    if (props.nullable && !newValue) {
      emits('update:model-value', null as T)
      return
    }
    emits('update:model-value', newValue as T)
  },
})

const { textarea, input } = useTextareaAutosize({ input: getValue, styleProp: props.rows ? 'minHeight' : undefined })

const css = computed(() => props.nocss
  ? undefined
  : (props.variant === 'default'
      ? 'block w-full rounded-md border-0 border-skin-base-field py-1.5 text-skin-base-field shadow-sm ring-1 ring-inset ring-skin-base-field placeholder:text-skin-placeholder-field focus:ring-2 focus:ring-inset resize-none focus:ring-skin-focus-field sm:text-sm sm:leading-6'
      : 'block w-full border-0 bg-gray-50 py-1.5 text-skin-base-field placeholder:text-skin-placeholder-field aria-[invalid]:pr-10 focus:ring-0 sm:text-sm sm:leading-6'))
</script>

<template>
  <UiLabel v-if="label">
    {{ label }}
  </UiLabel>
  <template v-if="variant === 'default'">
    <textarea
      v-if="autosize"
      ref="textarea"
      v-model="input"
      :rows="rows"
      data-control
      :class="mergeCss([css, 'resize-none'], $attrs)"
      v-bind="noCss($attrs)"
    />
    <textarea
      v-else
      v-model="getValue"
      data-control
      :rows="rows"
      :class="mergeCss(css, $attrs)"
      v-bind="noCss($attrs)"
    />
  </template>
  <template v-else>
    <div class="border-b border-gray-200 focus-within:border-indigo-600">
      <textarea
        v-if="autosize"
        ref="textarea"
        v-model="input"
        data-control
        :rows="rows"
        :class="mergeCss([css, 'resize-none'], $attrs)"
        v-bind="noCss($attrs)"
      />
      <textarea
        v-else
        v-model="getValue"
        data-control
        :rows="rows"
        :class="mergeCss(css, $attrs)"
        v-bind="noCss($attrs)"
      />
    </div>
  </template>

  <UiFieldHelper v-if="helper || error" :error="error">
    {{ helper }}
  </UiFieldHelper>
</template>
