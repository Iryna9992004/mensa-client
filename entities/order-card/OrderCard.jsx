import React from 'react'
import styles from '../admin-order-card/admin-order-card.module.scss'

export default function OrderCard(props) {

  const sum=()=>{
    const res=props.list.reduce((acumulator,currentValue)=>acumulator+currentValue.goodQuantity*currentValue.price,0);
    return res;
  }

  return (
    <div>
    <div className={styles.basket_r}>
   <hr className={styles.line} color="lightgrey" />
   <div className={styles.wrapper}>

     <div className={styles.good_buy_name}>
       <div className={styles.good_buy_name_text}>Номер замовлення {props.id}</div>
       <div className={styles.good_buy_name_description}>
           <div style={{color:'gray', marginBottom:10, fontWeight:700}}>Дата замовлення: {props.createdAt}</div>
           {props.list.map(item=><li key={item.id}>{item.name}: {item.goodQuantity} шт. Ціна: {item.price} грн,</li>)}
        
           <div style={{color:'gray', marginTop:10, fontWeight:700}}>Контактні дані: {props.phoneNumber} {props.email}</div>
       </div>
     </div>
    <div style={{color:'gray', marginBottom:10, fontWeight:700, fontSize:17}}>Статус замовлення: {props.status}</div>
     <div className={styles.price}>Сума: {sum()} ₴</div>
   </div>
  
</div>
</div>
  )
}
