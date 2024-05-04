import Link from 'next/link'
import React,{useState} from 'react'
import styles from '../navbar/styles/navbar.module.scss'
import { GrMenu } from "react-icons/gr";
import { TbLogout2 } from "react-icons/tb";
import { useRouter } from 'next/router';

export default function AdminNavbar() {
  const [open, setOpen]=useState(true);
  const router=useRouter()
  let openClass=open?styles.navbar:`${styles.navbar} ${styles.open}`

  const logout=()=>{
    localStorage.removeItem('adminToken');
    router.reload()
  }
  
  return (
    <header className={styles.header}>
        <a className={styles.logo}>MENSA</a>
        <GrMenu  className={styles.menu_icon} onClick={()=>setOpen(!open)}/>
        <ul className={openClass}>
            <li className={styles.li}><Link href="/admin/catalog">Каталог</Link></li>
            <li className={styles.li}><Link href="/admin/orders">Замовлення</Link></li>
            <li className={styles.li}><Link href="/admin/users">Користувачі</Link></li>
        </ul>

      <div className={styles.header_btn}>
         <a className={styles.basket} onClick={logout}><span>Вихід</span> <TbLogout2 className={styles.bxs_cart} /></a>
      </div>
    </header>
  )
}