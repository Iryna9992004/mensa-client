import React from 'react'
import styles from '../../styles/main.module.scss'

export default function SignInInput() {
  return (
    <div>
        <input className={styles.input_form} placeholder='Логін:' />
        <input  className={styles.input_form} placeholder='Пароль:' />
    </div>
  )
}
