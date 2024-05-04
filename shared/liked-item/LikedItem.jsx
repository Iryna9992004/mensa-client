import React from 'react'
import styles from './liked-item.module.scss'
import { FaTrash } from "react-icons/fa6";
import $api from '../../http';
import {useRouter} from 'next/router'

export default function LikedItem(props) {
  const router=useRouter();

  const deleteItem=async()=>{
    try{
      const response=await $api.post(`/liked/delete/${props.id}`);
      router.reload()
      return response.data
    }
    catch(e){
      console.log(e)
    }
  }

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
            <div className={styles.good_buy_name_description}>високоякісний віск, 15 см</div>
          </div>

          <div className={styles.price}>{props.price} ₴</div>
          <FaTrash className={styles.bxs_trash} onClick={deleteItem} />
        </div>
    </div>
    </div>
  )
}
