import React, { useEffect, useState } from 'react'
import styles from '../styles/admin-users.module.scss'
import UserItem from '../../../entities/user-item/UserItem'
import $api from '../../../http'

export default function AdminUsers() {
  const [user,setUser]=useState('')

  useEffect(()=>{
  async function getUsers(){
    try{
      const response=await $api.get('/users/getAll');
      setUser(response.data)
    }
    catch(e){
      console.log(e)
    }
  } getUsers()
  },[])
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
       <div className={styles.create_account_text}>Користувачі</div>
    </div>
    {user && user.map(item => <UserItem key={item.id} name={item.name} surname={item.surname} phoneNumber={item.phoneNumber} email={item.email} />)}


    <hr className={styles.line} color="lightgrey" />
    </div>
  )
}