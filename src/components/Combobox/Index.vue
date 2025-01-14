<script setup lang="ts" generic="T extends string | number | null | Object | undefined">
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOptions,
} from '@headlessui/vue'
import { useThrottleFn } from '@vueuse/core'
import { ref } from 'vue'
import UiFieldHelper from '../Field/Helper.vue'
import UiComboboxLabel from './Label.vue'

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
  cursorMeta?: {
    path: string
    per_page: number
    prev_cursor: string | null
    next_cursor: string | null
  }
  by?: string | ((value?: T) => boolean)
  multiple?: boolean
  create?: string
}>(), {
  as: 'div',
  queryAtFirstEnter: true,
})

const emits = defineEmits<{
  (event: 'update:modelValue', value: T): void
  (event: 'query', value: string): void
  (event: 'prev', value: { query: string, token: string }): void
  (event: 'next', value: { query: string, token: string }): void
  (event: 'create'): void
}>()

const query = ref('')

const updateQuery = useThrottleFn((value: string) => {
  query.value = value
  emits('query', value)
}, 500, true, true)

function updateModelValue(value: T) {
  query.value = ''
  return emits('update:modelValue', value)
}

const firstEnter = ref(true)
function queryOnFirstEnter() {
  if (firstEnter.value && props.queryAtFirstEnter) {
    firstEnter.value = false
    emits('query', query.value)
  }
}
</script>

<template>
  <Combobox
    data-control
    :model-value="(modelValue as any)"
    :by="by"
    :as="as"
    :multiple="multiple"
    @update:model-value="updateModelValue"
  >
    <template v-if="label">
      <UiComboboxLabel>{{ label }}</UiComboboxLabel>
    </template>

    <div class="relative mt-2">
      <ComboboxInput
        data-control
        class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-skin-base-field shadow-sm ring-1 ring-inset ring-skin-base-field focus:ring-2 focus:ring-inset placeholder:text-skin-placeholder-field focus:ring-skin-focus-field sm:text-sm sm:leading-6"
        v-bind="$attrs"
        @change="updateQuery($event.target.value)"
        @blur="query = ''"
        @focus="queryOnFirstEnter"
      />
      <ComboboxButton
        type="button"
        class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
        </svg>
      </ComboboxButton>
      <ComboboxOptions
        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      >
        <template v-if="create">
          <button
            type="button"
            class="cursor-pointer hover:bg-gray-100 py-2 px-3 block w-full text-left"
            @click.prevent="emits('create')"
          >
            <span>{{ create }}</span>
          </button>
        </template>

        <template v-if="cursorMeta?.prev_cursor">
          <button
            :key="cursorMeta.prev_cursor"
            type="button"
            class="cursor-pointer hover:bg-gray-100 py-2 px-3 block w-full text-left"
            @click.prevent="emits('prev', { query, token: cursorMeta.prev_cursor })"
          >
            <span>... Previous</span>
          </button>
        </template>
        <slot />
        <template v-if="cursorMeta?.next_cursor">
          <button
            :key="cursorMeta.next_cursor"
            type="button"
            class="cursor-pointer hover:bg-gray-100 py-2 px-3 block w-full text-left"
            @click.prevent="emits('next', { query, token: cursorMeta.next_cursor })"
          >
            <span>Next ...</span>
          </button>
        </template>
      </ComboboxOptions>
    </div>

    <UiFieldHelper v-if="helper" class="mt-2" :error>
      {{ helper }}
    </UiFieldHelper>
  </Combobox>
</template>
