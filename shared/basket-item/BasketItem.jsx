import React from 'react'
import styles from './basket-item.module.scss'
import { FaTrash } from "react-icons/fa6";
import { useDispatch} from 'react-redux';
import { incrementQuantity,decrementQuantity,calculateAllSum, calculateAllGoods, deleteFromBasket} from '../../app/GlobalRedux/features/basketSlice';

export default function BasketItem(props) {

  const dispatch=useDispatch()

  return (
    <div >
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

          <div className={styles.plus_minus}>
            <a className={styles.plus} onClick={()=>{dispatch(incrementQuantity(props)); dispatch(calculateAllSum()); dispatch(calculateAllGoods())}}>+</a>
            <div className={styles.number}>{props.goodQuantity}</div>
            <a className={styles.minus} onClick={()=>{dispatch(decrementQuantity(props)); dispatch(calculateAllSum()); dispatch(calculateAllGoods())}}>-</a>
          </div>

          <div className={styles.price}>{props.price*props.goodQuantity} ₴</div>
          <FaTrash className={styles.bxs_trash} onClick={()=>{dispatch(deleteFromBasket(props)); dispatch(calculateAllSum());dispatch(calculateAllGoods())}} />
          
        </div>
       
    </div>
    </div>
  )
}
