let animationsPromise

export function initializeAnimations() {
  if (!animationsPromise) {
    animationsPromise = Promise.all([
      import('aos'),
      import('aos/dist/aos.css'),
    ]).then(([{ default: AOS }]) => {
      AOS.init({
        duration: 650,
        once: true,
        offset: 70,
        disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      })
      return AOS
    }).catch((error) => {
      console.error('Animations could not be initialized.', error)
      return null
    })
  }

  return animationsPromise
}

export function refreshAnimations({ hard = false } = {}) {
  return initializeAnimations().then((AOS) => {
    if (hard) AOS?.refreshHard()
    else AOS?.refresh()
  })
}