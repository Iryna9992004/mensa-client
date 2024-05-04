import React from 'react'
import styles from './is-empty.module.scss'

export default function IsEmpty(props) {
  return (
    <div className={styles.container}>
        <div className={styles.text}>{props.text}</div>
    </div>
  )
}
