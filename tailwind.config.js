// import plugin from 'tailwindcss/plugin'

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
  plugins: [
    // plugin(({ theme, addComponents }) => {
    //   theme('extend', {
    //     textColor: {
    //       skin: {
    //         'base-field': 'var(--color-text-field)',
    //         'helper-field': 'var(--color-helper-field)',
    //         'placeholder-field': 'var(--color-placeholder-field)',
    //         'label-field': 'var(--color-label-field)',
    //         'label-required-marker': 'var(--color-label-required-marker)',
    //         'base-option': 'var(--color-option-field)',
    //         'focus-option': 'var(--color-text-option-focus)',
    //       },
    //     },
    //     backgroundColor: {
    //       skin: {
    //         'base-field': 'var(--color-bg-field)',
    //         'outline-field': 'var(--color-bg-outline-field)',
    //         'disabled-field': 'var(--color-bg-disabled-field)',
    //         'checked-field': 'var(--color-bg-checked-field)',
    //       },
    //     },
    //     ringColor: {
    //       skin: {
    //         'base-field': 'var(--color-ring-field)',
    //         'focus-field': 'var(--color-ring-focus-field)',
    //       },
    //     },
    //     borderColor: {
    //       skin: {
    //         'base-field': 'var(--color-border-field)',
    //         'focus-field': 'var(--color-border-focus-field)',
    //         'disabled-field': 'var(--color-border-disabled-field)',
    //         'checked-field': 'var(--color-border-checked-field)',
    //       },
    //     },
    //     outlineColor: {
    //       skin: {
    //         'base-field': 'var(--color-outline-field)',
    //         'focus-field': 'var(--color-outline-focus-field)',
    //       },
    //     },
    //   })
    //   addComponents({
    //     ':root': {
    //       '--color-text-field': `theme('colors.gray.800')`,
    //       '--color-text-label': `theme('colors.gray.800')`,
    //       '--color-text-option': `theme('colors.gray.800')`,
    //       '--color-label-required-marker': `theme('colors.red.600')`,
    //       '--color-option-field': `theme('colors.gray.800')`,
    //       '--color-text-option-focus': `theme('colors.indigo.600')`,
    //       '--color-helper-field': `theme('colors.gray.500')`,
    //       '--color-placeholder-field': `theme('colors.gray.400')`,
    //       '--color-bg-field': `theme('colors.white')`,
    //       '--color-bg-outline-field': `theme('colors.gray.200')`,
    //       '--color-bg-disabled-field': `theme('colors.gray.100')`,
    //       '--color-bg-checked-field': `theme('colors.indigo.600')`,
    //       '--color-ring-field': `theme('colors.gray.300')`,
    //       '--color-ring-focus-field': `theme('colors.indigo.600')`,
    //       '--color-border-field': `theme('colors.gray.300')`,
    //       '--color-border-focus-field': `theme('colors.indigo.600')`,
    //       '--color-border-disabled-field': `theme('colors.gray.200')`,
    //       '--color-border-checked-field': `theme('colors.indigo.600')`,
    //       '--color-outline-field': `theme('colors.gray.300')`,
    //       '--color-outline-focus-field': `theme('colors.indigo.600')`,
    //     },
    //     '.field-error': {
    //       '--color-text-field': `theme('colors.red.600')`,
    //       '--color-placeholder-field': `theme('colors.red.400')`,
    //       '--color-ring-field': `theme('colors.red.500')`,
    //       '--color-ring-focus-field': `theme('colors.red.600')`,
    //       '--color-border-field': `theme('colors.red.500')`,
    //       '--color-border-focus-field': `theme('colors.red.600')`,
    //       '--color-helper-field': `theme('colors.red.700')`,
    //     },
    //   })
    // }),
  ],
}
