import React from 'react'
import styles from '../styles/mainName.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
    <div className={styles.container1}>

        <div className={styles.footer__inner}>
            <div className={`${styles.footer__col}  ${styles.footer__col__first}`}>
                <div className={styles.footer__logo}>Mensa Candles</div>
                <div className={styles.footer__text}>097 383 88 66 – Марина(для переписки є вайбер) ; 
                <div>Локація – Львів.</div> 
               Термін виконання замовлення 3-4 дні з урахуванням ваших побажань щодо кольорової гами. 
                <div></div>Відправка по всій Україні Нова пошта, укрпошта.
                </div>
                </div>

            </div>

            <div className={`${styles.footer__col}  ${styles.footer__col__second}`}>
                <div className={styles.footer__title}>Pictures</div>

                <div className={styles.blogs}>
                    <div className={styles.blogs__item}>
                        <img className={styles.blogs__img} src="https://adoring-pare-dda5f1.netlify.app/assets/images/blog/1.jpg" alt=""/>
                    </div>

                    <div className={styles.blogs__item}>
                        <img className={styles.blogs__img} src="https://adoring-pare-dda5f1.netlify.app/assets/images/blog/2.jpg" alt=""/>
                    </div>

                    <div className={styles.blogs__item}>
                        <img className={styles.blogs__img} src="https://adoring-pare-dda5f1.netlify.app/assets/images/blog/3.jpg" alt=""/>
                    </div>
                </div>
            
            </div>
        </div>
</footer>

  )
}
