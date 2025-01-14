import type { TextareaHTMLAttributes } from 'vue'

export interface BaseTextareaProps<T> extends /* @vue-ignore */ TextareaHTMLAttributes {
  modelValue?: T
  nullable?: T extends null ? boolean : false
  autosize?: boolean
  nocss?: boolean
  label?: string
  error?: string
  helper?: string
  rows?: string
  variant?: 'default' | 'outline'
}
