/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          'base-field': 'var(--color-text-field)',
          'helper-field': 'var(--color-helper-field)',
          'placeholder-field': 'var(--color-placeholder-field)',
          'label-field': 'var(--color-label-field)',
          'label-required-marker': 'var(--color-label-required-marker)',
          'base-option': 'var(--color-option-field)',
          'focus-option': 'var(--color-text-option-focus)',
        },
      },
      backgroundColor: {
        skin: {
          'base-field': 'var(--color-bg-field)',
          'outline-field': 'var(--color-bg-outline-field)',
          'disabled-field': 'var(--color-bg-disabled-field)',
          'checked-field': 'var(--color-bg-checked-field)',
        },
      },
      ringColor: {
        skin: {
          'base-field': 'var(--color-ring-field)',
          'focus-field': 'var(--color-ring-focus-field)',
        },
      },
      borderColor: {
        skin: {
          'base-field': 'var(--color-border-field)',
          'focus-field': 'var(--color-border-focus-field)',
          'disabled-field': 'var(--color-border-disabled-field)',
          'checked-field': 'var(--color-border-checked-field)',
        },
      },
      outlineColor: {
        skin: {
          'base-field': 'var(--color-outline-field)',
          'focus-field': 'var(--color-outline-focus-field)',
        },
      },
    },
  },
  plugins: [],
}
