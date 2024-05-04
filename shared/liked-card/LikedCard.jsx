import React from 'react'
import styles from './liked-card.module.scss'


export default function LikedCard(props) {
  return (
    <div>
           <div className={styles.basket_r}>
        <hr className={styles.line} color="lightgrey" />
        <div className={styles.wrapper}>
          <img className={styles.img}
            src={props.imageUrl}
          />
          <div className={styles.good_buy_name}>
            <div className={styles.good_buy_name_text}>{props.name}</div>
            <div className={styles.good_buy_name_description}>високоякісний віск</div>
          </div>

          <div className={styles.price}>{props.goodQuantity} шт.</div>
          <div className={styles.price}>{props.price*props.goodQuantity} ₴</div>
        </div>
       
    </div>
    </div>
  )
}
