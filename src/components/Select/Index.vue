<script setup lang="ts" generic="T extends string | number | null | Object | undefined">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
} from '@headlessui/vue'
import { ref } from 'vue'
import { mergeCss, noCss } from '../../Utils/twMerge'
import UiFieldHelper from '../Field/Helper.vue'
import UiSelectLabel from './Label.vue'

defineOptions({
  name: 'Combobox',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  modelValue: T
  label?: string
  error?: string
  as?: string
  helper?: string
  queryAtFirstEnter?: boolean
  defaultValue?: T
  by?: T extends object ? keyof T : undefined
  disabled?: boolean
  multiple?: boolean
  name?: string
  horizontal?: boolean
}>(), {
  as: 'div',
  queryAtFirstEnter: false,
})

const emits = defineEmits<{
  (event: 'update:modelValue', value: T): void
  (event: 'focus', value: FocusEvent): void
  (event: 'firstEnter'): void
}>()

const firstEnter = ref(false)
function queryOnFirstEnter(e: FocusEvent) {
  emits('focus', e)
  if (firstEnter.value && props.queryAtFirstEnter) {
    emits('firstEnter')
  }
}
</script>

<template>
  <Listbox
    :model-value="(modelValue as any)"
    :as="as"
    :by="by"
    :disabled
    :multiple
    :name
    :horizontal
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-if="label">
      <UiSelectLabel>{{ label }}</UiSelectLabel>
    </template>

    <div class="relative mt-2">
      <ListboxButton
        :class="mergeCss('w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-skin-base-field shadow-sm ring-1 ring-inset ring-skin-base-field focus:ring-2 focus:ring-inset placeholder:text-skin-placeholder-field focus:ring-skin-focus-field sm:text-sm sm:leading-6 min-h-9 text-left', $attrs)"
        data-control
        v-bind="noCss($attrs)"
        @focus="queryOnFirstEnter"
      >
        <span class="block truncate pr-8" :class="mergeCss('text-left', $attrs)">
          <slot />
        </span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-gray-400" aria-hidden="true">
            <path fill-rule="evenodd" d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <slot name="options" />
        </ListboxOptions>
      </transition>
    </div>

    <UiFieldHelper v-if="helper || error" class="mt-2" :error>
      {{ helper }}
    </UiFieldHelper>
  </Listbox>
</template>
