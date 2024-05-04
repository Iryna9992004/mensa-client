import React from 'react'
import styles from '../styles/basket-list.module.scss'
import BasketItem from '../../../shared/basket-item/BasketItem'
import Link from 'next/link'
import EmptyBasket from '../../../entities/empty-basket/EmptyBasket'
import { BiSolidCart } from "react-icons/bi";
import { useSelector } from 'react-redux'

export default function BasketList() {
  const basketList=useSelector(state=>state.basket.basketList)
  const totalSum=useSelector(state=>state.basket.totalSum)
  const totalQuantity=useSelector(state=>state.basket.totalQuantity)

  return (
    <div className={styles.container}>
    <div className={styles.basket_name}>
      <BiSolidCart className={styles.bxs_cart}/>
      <div className={styles.basket_text}>Кошик</div>
    </div>

    <div className={styles.basket_items}>
   
    {basketList.length === 0 && <EmptyBasket />}
    {basketList.map(item=><BasketItem key={item.name} imageUrl={item.imageUrl} name={item.name} goodQuantity={item.goodQuantity} price={item.price} />)}


    <hr className={styles.line} color="lightgrey" />
      <div className={styles.sum_price}>
        <div className={styles.sum}><span className={styles.all_sum}>Всього: </span><span className={styles.count_sum}>{totalQuantity} шт.</span></div>
        <div className={styles.sum}><span className={styles.all_sum}>Сума: </span><span className={styles.count_price}>{totalSum} ₴</span></div>
      </div>

      <div className={styles.btn_comeback_pay}>
        <Link href="/user/catalog" className={styles.comeback}><i className='bx bxs-left-arrow'></i> Повернутися назад</Link>
        <Link href="/user/basket/order" className={styles.pay}>Оформити замовлення</Link>
      </div>
    </div>
    </div>
  )
}
