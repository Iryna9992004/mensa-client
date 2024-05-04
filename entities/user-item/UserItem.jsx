import React,{useState} from 'react'
import styles from './user-item.module.scss'

export default function UserItem(props) {

  return (
    <div>
         <div className={styles.basket_r}>
        <hr className={styles.line} color="lightgrey" />
        <div className={styles.wrapper}>

          <div className={styles.good_buy_name}>
            <div className={styles.good_buy_name_text}>{props.surname} {props.name}</div>
            <div className={styles.good_buy_name_text} style={{color:'gray', fontWeight:700}}>Номер телефону: {props.phoneNumber}</div>
            <div className={styles.good_buy_name_text} style={{color:'gray', fontWeight:700}}>Електронна пошта: {props.email}</div>
          </div>
        </div>
    </div>
    </div>
  )
}
