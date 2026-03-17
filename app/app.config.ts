export default defineAppConfig({
  ui: {
    colors: {
      primary: 'yellow',
      neutral: 'neutral'
    },
    input: {
      default: {
        variant: 'none'
      },
      slots: {
        // 'base' é o input real. 'root' é o container em volta dele.
        base: [
          '!bg-[var(--default)]',
          'text-[var(--default-foreground)]',
          'placeholder:text-[var(--field-placeholder)]',
          'placeholder: font-extralight',
          'rounded-lg',
          '!border-none',
          '!ring-0',
          'focus:ring-2 focus:ring-[var(--focus)] transition-all'
        ].join(' ')
      }
    },
    header: {
      slots: {
        root: '!bg-[var(--background)] border-b border-[var(--border)] backdrop-blur-none'
      }
    }
  }
})
