import { type ClassNameValue, twMerge } from 'tailwind-merge'

export function mergeCss(base: ClassNameValue | ClassNameValue[], value?: unknown): ClassNameValue {
  if (value && typeof value === 'object' && 'class' in value && typeof value.class === 'string')
    return twMerge(base, value.class)

  return twMerge(base)
}

export function noCss<T>(value: T): T extends object ? Omit<T, 'class'> : T {
  if (!value || typeof value !== 'object')
    return value as T extends object ? Omit<T, 'class'> : T

  if (Array.isArray(value))
    return value as T extends object ? Omit<T, 'class'> : T

  if ('class' in value)
    return { ...value, class: undefined } as T extends object ? Omit<T, 'class'> : T

  return value as T extends object ? Omit<T, 'class'> : T
}
