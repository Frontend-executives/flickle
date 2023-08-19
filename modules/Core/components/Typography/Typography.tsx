import { createElement } from 'react'

interface TypographyProps {
  text: string
  element?: string
}

export const Typography = ({
  text,
  element = 'p',
}: TypographyProps): JSX.Element => {
  return createElement(element, {}, text)
}
