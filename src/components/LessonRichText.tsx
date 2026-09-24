import { Fragment } from 'react'

const BOLD_PATTERN = /(\*\*[^*]+?\*\*)/g
const BULLET_LINE = /^[•\-]\s?/
const NUMBERED_LINE = /^\d+\.\s/

type Segment =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }

export function renderLessonText(text: string): React.ReactNode[] {
  const parts = text.split(BOLD_PATTERN)
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }
    return part ? <Fragment key={index}>{part}</Fragment> : null
  })
}

function parseSegments(text: string): Segment[] {
  const segments: Segment[] = []
  let ul: string[] | null = null
  let ol: string[] | null = null
  let pLines: string[] | null = null

  const flushUl = () => {
    if (ul?.length) segments.push({ type: 'ul', items: ul })
    ul = null
  }
  const flushOl = () => {
    if (ol?.length) segments.push({ type: 'ol', items: ol })
    ol = null
  }
  const flushP = () => {
    if (pLines?.length) segments.push({ type: 'p', text: pLines.join('\n') })
    pLines = null
  }

  for (const line of text.split('\n')) {
    if (BULLET_LINE.test(line)) {
      flushP()
      flushOl()
      if (!ul) ul = []
      ul.push(line.replace(BULLET_LINE, ''))
    } else if (NUMBERED_LINE.test(line)) {
      flushP()
      flushUl()
      if (!ol) ol = []
      ol.push(line.replace(NUMBERED_LINE, ''))
    } else if (line.trim() === '') {
      continue
    } else {
      flushUl()
      flushOl()
      if (!pLines) pLines = []
      pLines.push(line)
    }
  }

  flushUl()
  flushOl()
  flushP()
  return segments
}

export function LessonParagraph({ text }: { text: string }) {
  const segments = parseSegments(text)
  if (segments.length === 0) return null

  return (
    <>
      {segments.map((segment, index) => {
        if (segment.type === 'p') {
          return <p key={index}>{renderLessonText(segment.text)}</p>
        }
        if (segment.type === 'ul') {
          return (
            <ul key={index} className="lesson-list">
              {segment.items.map((item, itemIndex) => (
                <li key={itemIndex}>{renderLessonText(item)}</li>
              ))}
            </ul>
          )
        }
        return (
          <ol key={index} className="lesson-list lesson-list-ordered">
            {segment.items.map((item, itemIndex) => (
              <li key={itemIndex}>{renderLessonText(item)}</li>
            ))}
          </ol>
        )
      })}
    </>
  )
}
