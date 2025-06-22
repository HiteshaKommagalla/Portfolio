// hooks/useStaggerAnimation.js
import { useEffect, useRef, useState } from "react"

export const useStaggerAnimation = (totalItems, delay = 100) => {
  const containerRef = useRef(null)
  const [visibleItems, setVisibleItems] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          for (let i = 0; i < totalItems; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const updated = new Set(prev)
                updated.add(i)
                return updated
              })
            }, i * delay)
          }
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [totalItems, delay])

  return [containerRef, visibleItems]
}
