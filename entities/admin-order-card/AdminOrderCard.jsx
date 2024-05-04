import React,{useState} from 'react'
import styles from './admin-order-card.module.scss'
import AdminOrderStatus from '../../shared/admin-order-status/AdminOrderStatus'

export default function AdminOrderCard(props) {
 const [status,setStatus]=useState(false);

  const sum=()=>{
    return props.list.reduce((price,item)=>item.price*item.goodQuantity + price,0)
  }

  return (
    <div>
         <div className={styles.basket_r}>
        <hr className={styles.line} color="lightgrey" />
        <div className={styles.wrapper}>

          <div className={styles.good_buy_name}>
            <div className={styles.good_buy_name_text}>{props.name} {props.surname}</div>
            <div className={styles.good_buy_name_description}>
                <div style={{color:'gray', marginBottom:10, fontWeight:700}}>Дата замовлення: {props.createdAt}</div>
                {props.list.map(item=><li >{item.name}: {item.goodQuantity} шт. Ціна: {item.price} грн</li>)}
                <div style={{color:'gray', marginTop:10, fontWeight:700}}>Контактні дані: {props.phoneNumber} {props.email}</div>
            </div>
          </div>

         <div style={{color:'gray', marginBottom:10, fontWeight:700, fontSize:17}}>Статус замовлення: {props.status}</div>

          <div className={styles.price}>Сума: {sum()} ₴</div>
        <button className={styles.btn} onClick={()=>setStatus(!status)}>Змінити статус</button>
        </div>
       
    </div>
    {status?<AdminOrderStatus id={props.id} />:''}
    </div>
  )
}
