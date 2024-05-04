import React,{useState,useEffect} from 'react'
import styles from '../../../styles/order-list.module.scss'
import OrderCard from '../../../entities/order-card/OrderCard'
import $api from '../../../http'
import IsEmpty from '../../../shared/is-empty/IsEmpty'


export default function OrderList() {
  const [orders,setOrders]=useState([])
  
  useEffect( ()=>{async function get(){
      try{
        if(!localStorage.getItem('token')){
          return
        }
        const response=await $api.get('/order/get')
        setOrders(response.data)
      }
      catch(e){
        console.log(e)
      }
    }
    get()}
  ,[])
  return (
    <div className={styles.list_items}>
      <hr className={styles.line} color="lightgrey" />
    {orders?orders.map(item=><OrderCard key={item.id} id={item.id} name={item.name} 
    email={item.email} createdAt={item.createdAt} status={item.status} phoneNumber={item.phoneNumber} list={item.list}/>):null}
    {orders.length===0?<IsEmpty text="Список замовлень пустий!"/>:null}

    </div>
  )
}
