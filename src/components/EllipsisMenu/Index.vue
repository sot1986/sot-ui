<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import { nextTick, ref } from 'vue'

defineOptions({
  name: 'UiEllipsisMenu',
})

const props = defineProps({
  anchor: String,
})

const wrapper = ref<HTMLElement>()

const itemsStyle = ref<{
  position: 'fixed' | 'absolute'
  top?: string
  right?: string
  opacity?: string
  translate?: string
}>({ position: 'fixed' })

function handleOpen() {
  if (!props.anchor) {
    itemsStyle.value = { position: 'absolute', right: '0px' }
    return
  }

  itemsStyle.value = { position: 'fixed', opacity: '0' }

  const anchorRect = document.querySelector(props.anchor)!.getBoundingClientRect()

  nextTick(() => {
    const buttonRect = wrapper.value!.querySelector('[data-control]')!.getBoundingClientRect()
    const itemsRect = wrapper.value!.querySelector('[data-items]')!.getBoundingClientRect()

    if (itemsRect.bottom < anchorRect.bottom) {
      itemsStyle.value = {
        position: 'absolute',
        opacity: '1',
        right: '0px',
      }
      return
    }

    if (anchorRect.top > buttonRect.bottom - itemsRect.height) {
      itemsStyle.value = {
        position: 'fixed',
        opacity: '1',
        translate: `calc(-100% + ${buttonRect.width}px) 0px`,
      }
      return
    }

    itemsStyle.value = {
      position: 'absolute',
      opacity: '1',
      top: `${-itemsRect.height + 8}px`,
      right: `${buttonRect.width + 4}px`,
    }
  })
}
</script>

<template>
  <div ref="wrapper">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          data-control="menu-button" class="flex items-center rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" v-bind="$attrs"
          @click="handleOpen"
        >
          <span class="sr-only">Open options</span>
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd" />
          </svg>
        </MenuButton>
      </div>

      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems as="template">
          <div
            data-items
            :style="itemsStyle"
            class="min-w-max z-50 mt-2 rounded-md bg-white shadow-lg ring-1 origin-top-right ring-black ring-opacity-5 focus:outline-none py-1"
          >
            <slot />
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
