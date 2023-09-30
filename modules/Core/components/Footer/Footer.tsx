import Image from 'next/image'

import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <a
        className={styles.link}
        href='https://www.themoviedb.org/'
        target='_blank'
      >
        <Image alt='tmdb-logo' height={32} src='/tmdb-logo.svg' width={200} />
      </a>
    </footer>
  )
}
