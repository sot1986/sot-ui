<script setup lang="ts" generic="T">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ref, watch } from 'vue'

defineOptions({
  name: 'Slider',
  inheritAttrs: false,
})

defineProps<{
  show: boolean
}>()

const emits = defineEmits<{
  (event: 'close'): void
}>()

const el = ref<HTMLElement>()

watch(el, (e) => {
  if (!e) {
    return
  }

  e.querySelectorAll('button').forEach((button) => {
    if (button.hasAttribute('data-close')) {
      button.addEventListener('click', () => {
        emits('close')
      })
    }
  })
})
</script>

<template>
  <TransitionRoot as="template" :show="show">
    <Dialog as="div" class="relative z-40" @close="$emit('close')">
      <div class="fixed inset-0" />

      <div ref="el" class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-2xl">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="flex min-h-full flex-1 flex-col">
                    <slot />
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
