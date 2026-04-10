import { useEffect, useMemo, useState } from 'react'

function TypewriterText({ text, speed = 36, className = '' }) {
  const [index, setIndex] = useState(0)
  const isComplete = index >= text.length

  useEffect(() => {
    setIndex(0)
  }, [text])

  useEffect(() => {
    if (index >= text.length) return undefined
    // Reveal one character at a fixed pace for a gentle typewriter feel.
    const timer = window.setTimeout(() => setIndex((prev) => prev + 1), speed)
    return () => window.clearTimeout(timer)
  }, [index, speed, text])

  useEffect(() => {
    const fullDuration = text.length * speed + 600
    const failSafe = window.setTimeout(() => setIndex(text.length), fullDuration)
    return () => window.clearTimeout(failSafe)
  }, [speed, text])

  const displayText = useMemo(() => text.slice(0, index), [index, text])

  return (
    <p className={className}>
      {displayText}
      {!isComplete && (
        <span className="cursor" aria-hidden="true">
          |
        </span>
      )}
    </p>
  )
}

export default TypewriterText
