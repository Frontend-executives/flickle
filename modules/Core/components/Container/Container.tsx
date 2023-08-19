import { ReactNode } from 'react'
import styles from './Container.module.scss'

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps): JSX.Element => {
  return <section className={styles.container}>{children}</section>
}
