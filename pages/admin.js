import React from 'react'
import AdminSignIn from '../widgets/admin-sign-in/AdminSignIn'
import styles from '../styles/main.module.scss'

export default function Admin() {
  return (
    <div className={styles.body}>
      <AdminSignIn />
    </div>
  )
}
