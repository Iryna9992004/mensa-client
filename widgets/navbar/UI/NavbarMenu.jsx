import Link from 'next/link'
import React,{useState} from 'react'
import styles from '../styles/navbar.module.scss'
import { BiSolidCart } from "react-icons/bi";
import { GrMenu } from "react-icons/gr";

export default function NavbarMenu() {
  const [open, setOpen]=useState(true);
  let openClass=open?styles.navbar:`${styles.navbar} ${styles.open}`

  return (
    <header className={styles.header}>
        <a href="#" className={styles.logo}>MENSA</a>
        <GrMenu  className={styles.menu_icon} onClick={()=>setOpen(!open)}/>
        <ul className={openClass}>
            <li className={styles.li}><Link href="/">Головна</Link></li>
            <li className={styles.li}><Link href="/user/catalog">Каталог</Link></li>
            <li className={styles.li}><Link href="/user/profile">Мій профіль</Link></li>
        </ul>

      <div className={styles.header_btn}>
         <Link href="/user/login" className={styles.sign_up}>Вхід</Link>
         <Link href="/user/basket" className={styles.basket}><span>Кошик</span> <BiSolidCart className={styles.bxs_cart} /></Link>
      </div>
    </header>
  )
}
