import React, { useEffect, useState } from 'react'
import styles from '../styles/admin-orders.module.scss'
import AdminOrderCard from '../../../entities/admin-order-card/AdminOrderCard'
import $api from '../../../http/index'

export default function AdminOrders() {
  const [orders,setOrders]=useState([]);
  const [select,setSelect]=useState('Сортувати за статусом');


  const getCompleted=()=>{
    const list=orders.filter((item)=>{
      return item.status==="Оформлено"|| item.status==="В обробці"
    })
  return list
  }
  
  const getMade=()=>{
    const list=orders.filter((item)=>{
      return item.status==="Виконано"
    })
    return list
  }

  const getCanceled=()=>{
    const list=orders.filter((item)=>{
      return item.status==="Скасовано"
    })
    return list
  }

  useEffect(()=>{
    async function getOrders(){
      try{
        const orders=await $api.get('/order/getAllOrders');
        setOrders(orders.data)
      }
      catch(e){
        console.log(e)
      }
    }
    getOrders()
  },[])
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
       <div className={styles.create_account_text}>Замовлення</div>
       <div>
        <select className={styles.btn} onChange={e=>setSelect(e.target.value)}>
          <option >Сортувати за статусом</option>
          <option>Виконані</option>
          <option>Невиконані</option>
          <option>Скасовані</option>
        </select>
       </div>
      
    </div>
      {select==='Сортувати за статусом'?orders.map(item=><AdminOrderCard key={item.id} id={item.id} list={item.list} name={item.name} surname={item.surname} phoneNumber={item.phoneNumber} email={item.email} status={item.status} createdAt={item.createdAt}/>):null}
      {select==='Невиконані'?getCompleted().map(item=><AdminOrderCard key={item.id} id={item.id} list={item.list} name={item.name} surname={item.surname} phoneNumber={item.phoneNumber} email={item.email} status={item.status} createdAt={item.createdAt}/>):null}
      {select==='Виконані'?getMade().map(item=><AdminOrderCard key={item.id} id={item.id} list={item.list} name={item.name} surname={item.surname} phoneNumber={item.phoneNumber} email={item.email} status={item.status} createdAt={item.createdAt}/>):null}
      {select==='Скасовані'?getCanceled().map(item=><AdminOrderCard key={item.id} id={item.id} list={item.list} name={item.name} surname={item.surname} phoneNumber={item.phoneNumber} email={item.email} status={item.status} createdAt={item.createdAt}/>):null}
    
    <hr className={styles.line} color="lightgrey" />
    </div>
  )
}