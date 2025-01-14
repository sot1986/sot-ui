import { reactive } from 'vue'

export interface ModalI<T> {
  show: boolean
  target: T | null
  open: (value: T) => Promise<void>
  close: () => Promise<void>
}

export default function<T>(
  cb?: {
    open?: (value: T) => void | Promise<void>
    close?: () => void | Promise<void>
  },
) {
  const modal = reactive({
    show: false,
    target: null as null | T,
    open,
    close,
  }) as ModalI<T>

  async function open(value: T) {
    if (modal.show) {
      return Promise.resolve()
    }

    if (cb?.open) {
      await cb?.open(value)
    }
    modal.target = value as T
    modal.show = true
  }

  async function close() {
    if (!modal.show) {
      return Promise.resolve()
    }

    if (cb?.close) {
      await cb?.close()
    }
    modal.target = null
    modal.show = false
  }

  return modal
}
