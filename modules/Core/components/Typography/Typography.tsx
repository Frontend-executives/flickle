import { createElement } from 'react'

interface TypographyProps {
  element?: string
  text: string
}

export const Typography = ({
  element = 'p',
  text,
}: TypographyProps): JSX.Element => createElement(element, {}, text)
