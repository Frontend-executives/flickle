import { ReactElement, ReactNode } from 'react'

import styles from './Container.module.scss'

interface IContainerProps {
  children: ReactNode
}

export const Container = ({ children }: IContainerProps): ReactElement => (
  <section className={styles.container}>{children}</section>
)
