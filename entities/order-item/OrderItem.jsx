import React from 'react'
import styles from './order-item.module.scss'
import LikedCard from '../../shared/liked-card/LikedCard'

export default function OrderItem(props) {
  return (
    <div className={styles.order}>
      <div className={styles.status}>
      </div>
      <LikedCard name={props.name} imageUrl={props.imageUrl} goodQuantity={props.goodQuantity} price={props.price}/>
      
    </div>
  )
}
