import { shallowRef, onMounted, onUnmounted } from 'vue'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const isMobile = shallowRef(false)
  let mql: MediaQueryList | null = null

  function onChange() {
    isMobile.value = mql?.matches ?? false
  }

  onMounted(() => {
    mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    mql.addEventListener('change', onChange)
    isMobile.value = mql.matches
  })

  onUnmounted(() => {
    mql?.removeEventListener('change', onChange)
  })

  return { isMobile }
}
