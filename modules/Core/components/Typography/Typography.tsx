import { createElement } from 'react'

interface ITypographyProps {
  element?: string
  text: string
}

export const Typography = ({
  element = 'p',
  text,
}: ITypographyProps): JSX.Element => createElement(element, {}, text)
