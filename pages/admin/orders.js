import React from 'react'
import AdminNavbar from '../../widgets/admin-navbar/AdminNavbar'
import AdminOrders from '../../widgets/admin-orders/UI/AdminOrders'
import styles from '../../styles/main.module.scss'
import useAuth from '../../api/authMiddleware'

export default function Orders() {
  useAuth()
  return (
    <div className={styles.body1}>
        <AdminNavbar />
        <AdminOrders />
    </div>
  )
}
