import React from 'react'
import styles from './empty-basket.module.scss'
import { SlBasket } from "react-icons/sl";

export default function EmptyBasket() {
  return (
    <div>
        <div className={styles.basket_name}>
        <SlBasket className={styles.bxs_cart} />
        <div className={styles.basket_text}>Ваш кошик пустий!</div>
        <div className={styles.basket_text2}>Ще не було замовлень, щоб оформити замовлення перейдіть у розділ “Каталог”</div>
      </div>

    </div>
  )
}
