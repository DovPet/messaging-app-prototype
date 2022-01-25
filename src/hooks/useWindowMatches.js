import { useEffect, useState } from 'react'

export const useWindowMatches = (maxLength, minLength, width = true) => {
  const dimension = width ? 'width' : 'height'
  const [isInRange, setRange] = useState(false)
  const changeSizeState = x => {
    setRange(x.matches)
  }
  let matcher
  if (minLength) {
    matcher = window.matchMedia(
      `(min-${dimension}: ${minLength}px) and (max-${dimension}: ${maxLength}px)`
    )
  } else {
    matcher = window.matchMedia(`(max-${dimension}: ${maxLength}px)`)
  }
  useEffect(() => {
    changeSizeState(matcher)
    matcher.addListener(changeSizeState)
    return () => {
      matcher.removeListener(changeSizeState)
    }
  }, [])
  return [isInRange]
}
