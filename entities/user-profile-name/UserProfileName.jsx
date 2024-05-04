import React,{useEffect, useState} from 'react'
import styles from './user-profile-name.module.scss'
import OrderList from '../../widgets/order-list/UI/OrderList'
import InBasketList from '../../widgets/in-basket-list/UI/InBasketList'
import LikedList from '../../widgets/liked-list/UI/LikedList'
import $api from '../../http'
import { useRouter } from 'next/router'
import { IoLogOutSharp } from "react-icons/io5";

export default function UserProfileName() {
  const [switchItem, setSwitch]=useState(1);
  let selected1=switchItem===1?`${styles.btn_bl} ${styles.btn__selected}`:styles.btn_bl
  let selected2=switchItem===2?`${styles.btn_bl} ${styles.btn__selected}`:styles.btn_bl
  let selected3=switchItem===3?`${styles.btn_bl} ${styles.btn__selected}`:styles.btn_bl

  let selected4=switchItem===1?`${styles.table} ${styles.btn__selected}`:styles.table
  let selected5=switchItem===2?`${styles.table} ${styles.btn__selected}`:styles.table
  let selected6=switchItem===3?`${styles.table} ${styles.btn__selected}`:styles.table

  const [user,setUser]=useState('Користувач не авторизований!');
  const [surname,setSurname]=useState('')

  const router=useRouter();

  useEffect(()=>{
    async function get(){
      try{
        const response=await $api.get('/users/get');
        setUser(response.data.name);
        setSurname(response.data.surname)
      }
      catch(e){
        console.log(e)
      }
    }
    get()
  },[])

  function logout(){
    localStorage.removeItem('token');
    router.reload()
  }

  return (
    <div className={styles.body}>
    <div className={styles.profile_wrapper}>
        <div className={styles.user_information}>
            <div className={styles.name_user}>{surname} {user}</div> 
            <a className={styles.btn_exit} onClick={logout}>Вихід</a>
            <IoLogOutSharp className={styles.exit_icon}/>
        </div>
        <div className={styles.liked_basket}>
            <a className={selected1} onClick={()=>setSwitch(1)}>Вподобані</a>
            <a className={selected2} onClick={()=>setSwitch(2)}>У кошику</a>
            <a className={selected3} onClick={()=>setSwitch(3)}>Замовлення</a>

            <a className={selected4} onClick={()=>setSwitch(1)}>Вподобані</a>
            <a className={selected5} onClick={()=>setSwitch(2)}>У кошику</a>
            <a className={selected6} onClick={()=>setSwitch(3)}>Замовлення</a>
        </div>
        {switchItem===1?<LikedList/>:''}
        {switchItem===2?<InBasketList />:''}
        {switchItem===3?<OrderList />:''}
    </div>
    </div>
  )
}
