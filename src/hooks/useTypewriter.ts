import { useEffect, useState } from "react"

interface UseTypewriterOptions {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function useTypewriter({
  words,
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseDuration = 1600,
}: UseTypewriterOptions) {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) {
      return
    }

    const currentWord = words[wordIndex]

    const isFinishedTyping =
      !isDeleting && displayedText === currentWord

    const isFinishedDeleting =
      isDeleting && displayedText.length === 0

    let delay = isDeleting ? deletingSpeed : typingSpeed

    if (isFinishedTyping) {
      delay = pauseDuration
    }

    const timeout = window.setTimeout(() => {
      if (isFinishedTyping) {
        setIsDeleting(true)
        return
      }

      if (isFinishedDeleting) {
        setIsDeleting(false)
        setWordIndex((currentIndex) => (currentIndex + 1) % words.length)
        return
      }

      const nextLength = displayedText.length + (isDeleting ? -1 : 1)

      setDisplayedText(currentWord.slice(0, nextLength))
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [
    deletingSpeed,
    displayedText,
    isDeleting,
    pauseDuration,
    typingSpeed,
    wordIndex,
    words,
  ])

  return displayedText
}