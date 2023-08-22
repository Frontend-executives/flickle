import { createElement, Fragment, ReactElement } from 'react'

interface IConditionProps {
  children: ReactElement
  match: boolean
}

export const Condition = ({
  children,
  match,
}: IConditionProps): JSX.Element | null => {
  if (match) {
    return createElement(Fragment, {}, children)
  }
  return null
}
