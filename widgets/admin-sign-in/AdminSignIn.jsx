'use client'
import React,{useState} from 'react'
import styles from './admin-sign-in.module.scss'
import Link from 'next/link'
import styles1 from '../../styles/main.module.scss'
import { AdminAuthService } from './service/AdminAuthService'


export default function AdminSignIn() {
  const [login,setLogin]=useState('')
  const [password,setPassword]=useState('')

  return (
    <div className={styles.form_wrapper}>
        <div className={styles.create_account_text}>Вхід</div>

        <input className={styles1.input_form} placeholder='Логін:' value={login} onChange={e=>setLogin(e.target.value)}/>
        <input type="password" className={styles1.input_form} placeholder='Пароль:' value={password} onChange={e=>setPassword(e.target.value)}/>

        <div className={styles.btn_register_signup}>
            <Link className={styles.create_account_btn} href="/user/catalog">Назад</Link>
            <Link href="/admin/catalog" onClick={()=>AdminAuthService.login(login,password)} className={styles.create_account_btn}>Ввійти</Link>
        </div>
       
   </div>
  )
}
