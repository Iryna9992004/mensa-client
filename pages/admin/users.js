import React from 'react'
import AdminNavbar from '../../widgets/admin-navbar/AdminNavbar'
import styles from '../../styles/main.module.scss'
import AdminUsers from '../../widgets/admin-users/UI/AdminUsers'
import useAuth from '../../api/authMiddleware'

export default function Users() {
  useAuth()
  return (
    <div className={styles.body1}>
        <AdminNavbar />
        <AdminUsers />
    </div>
  )
}
