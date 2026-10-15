import { useEffect, useRef, useState } from 'react'

function AnimatedStat({ stat }) {
  const ref = useRef(null)
  const numericValue = typeof stat.value === 'number'
  const [count, setCount] = useState(() => (
    numericValue && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? stat.value : 0
  ))

  useEffect(() => {
    if (!numericValue || !ref.current) return undefined

    const element = ref.current
    let animationFrame
    let observer
    let cancelled = false

    const animate = () => {
      const duration = 1000
      const startTime = performance.now()
      const step = (now) => {
        if (cancelled) return
        const progress = Math.min((now - startTime) / duration, 1)
        const easedProgress = 1 - (1 - progress) ** 3
        setCount(Math.round(stat.value * easedProgress))
        if (progress < 1) animationFrame = window.requestAnimationFrame(step)
      }
      animationFrame = window.requestAnimationFrame(step)
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    } else {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          animate()
          observer.disconnect()
        }
      }, { threshold: 0.4 })
      observer.observe(element)
    }

    return () => {
      cancelled = true
      observer?.disconnect()
      window.cancelAnimationFrame(animationFrame)
    }
  }, [numericValue, stat.value])

  return (
    <div className="stat-card" ref={ref}>
      <i className={`bi ${stat.icon}`} aria-hidden="true" />
      <strong aria-label={`${numericValue ? `${stat.value}${stat.suffix ?? ''}` : stat.value} ${stat.label}`}>
        {numericValue ? `${count}${stat.suffix ?? ''}` : stat.value}
      </strong>
      <span>{stat.label}</span>
    </div>
  )
}

export default AnimatedStat
