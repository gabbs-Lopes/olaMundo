import React from 'react'
import styles from './BotaoPrincipal.module.css'

export default function BotaoPrincipal({ children, size}) {
  return (
    <button className={`
      ${styles.botaoPrincipal}
      ${styles[size]}
    `}>
        {children}
    </button>
  )
}
