import React from 'react'
import styles from '../styles/basket-navbar.module.scss'
import { useSelector } from 'react-redux'

export default function BasketNavbar() {
  const totalSum=useSelector(state=>state.basket.totalSum)
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>MENSA</a>
      <div className={styles.header_btn}>
        <a href="#" className={styles.sum_to_pay}>{totalSum} ₴</a>
      </div>
    </header>
  )
}
