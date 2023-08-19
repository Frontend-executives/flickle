import { createElement, Fragment, ReactElement } from 'react'

interface ConditionProps {
  children: ReactElement
  match: boolean
}

export const Condition = ({
  children,
  match,
}: ConditionProps): JSX.Element | null => {
  if (match) {
    return createElement(Fragment, {}, children)
  }
  return null
}
