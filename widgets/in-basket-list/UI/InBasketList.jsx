import React from 'react'
import styles from '../../../styles/order-list.module.scss'
import BasketItem from '../../../shared/basket-item/BasketItem'
import { useSelector } from 'react-redux'
import IsEmpty from '../../../shared/is-empty/IsEmpty'

export default function InBasketList() {
  const basketList=useSelector(state=>state.basket.basketList)
  return (
    <div className={styles.list_items}>
        {basketList.map(item=><BasketItem imageUrl={item.imageUrl} name={item.name} key={item.name} goodQuantity={item.goodQuantity} price={item.price}/>)}
        <hr className={styles.line} color="lightgrey" />
        {basketList.length === 0 ? <IsEmpty text="Кошик пустий!" /> : null}
       
    </div>
  )
}