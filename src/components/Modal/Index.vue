<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { onMounted, ref } from 'vue'
import { mergeCss, noCss } from '../../Utils/twMerge'

defineOptions({
  name: 'UiModal',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  show?: boolean
  closeOnActions?: boolean
}>(), { show: false, closeOnActions: true })

const emits = defineEmits<{
  (event: 'close'): void
}>()

const el = ref<HTMLElement>()

onMounted(() => {
  if (!el.value || !props.closeOnActions)
    return

  const actionsBlock = el.value.querySelector('[data-modal-actions]')
  if (!actionsBlock)
    return

  actionsBlock.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      emits('close')
    })
  })
})
</script>

<template>
  <TransitionRoot as="template" :show="show">
    <Dialog class="relative z-10" v-bind="noCss($attrs)" @close="$emit('close')">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel ref="el" :class="mergeCss('relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6', $attrs)">
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
