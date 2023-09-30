import { createElement, ReactElement } from 'react'

interface ITypographyProps {
  element?: string
  text: string
}

export const Typography = ({
  element = 'p',
  text,
}: ITypographyProps): ReactElement => createElement(element, {}, text)
