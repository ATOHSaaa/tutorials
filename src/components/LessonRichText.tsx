import { Fragment } from 'react'

const BOLD_PATTERN = /(\*\*[^*]+?\*\*)/g

export function renderLessonText(text: string): React.ReactNode[] {
  const parts = text.split(BOLD_PATTERN)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    return part ? <Fragment key={index}>{part}</Fragment> : null
  })
}

export function LessonParagraph({ text }: { text: string }) {
  return <p>{renderLessonText(text)}</p>
}
