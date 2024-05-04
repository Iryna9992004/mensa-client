import React from 'react'
import styles from '../styles/mainName.module.css'
import styles1 from '../../../styles/main.module.scss'
import Footer from './Footer'

export default function MainName() {
  return (
    <div>
      <div className={styles1.body}>
      <section className={styles.name__description}>
        <h1>MENSA CANDLES</h1>
      </section>
    </div>

    <section className={styles.section} id="about">
                <div className={styles.section__header}>
                    <h3 className={styles.section__suptitle}>Що ми робимо</h3>
                    <h2 className={styles.section__title}>Коротко про нас</h2>
                    <div className={styles.section__text}>
                        <p>Різьблені свічки ручної роботи, які можуть стати оригінальним подарунком на Новий рік, Різдво, День Святого Валентина, День народження, Весілля, Хрестини, День вчителя. Свічка виготовляється з високоякісного харчового парафіну
                            П-2, який не шкідливий для здоров'я.</p>
                    </div>
                </div>

            <div className={styles.container}>
                <div className={styles.section__header}>
                    <h3 className={styles.section__suptitle}>Our stories</h3>
                    <h2 className={styles.section__title}>Latest blog</h2>
                </div>

                <div className={styles.blog}>
                    <div className={styles.blog__item}>
                        <div className={styles.blog__header}>
                            <a>
                                <img className={styles.blog__photo} src="https://adoring-pare-dda5f1.netlify.app/assets/images/blog/1.jpg" alt=""/>
                            </a>
                            <div className={styles.blog__date}>
                                <div className={styles.blog__date_day}>1</div>

                            </div>
                        </div>
                        <div className={styles.blog__content}>
                            <div className={styles.blog__text}>Ви оформлюєте замовлення. Ми завжди уточнюємо деталі замовлення. Після оформлення замовлення наш менеджер зв’яжеться з Вами щоб підтвердити й уточнити деталі замовлення.</div>
                        </div>

                    </div>

                    <div className={styles.blog__item}>
                        <div className={styles.blog__header}>
                            <a>
                                <img className={styles.blog__photo} src="https://adoring-pare-dda5f1.netlify.app/assets/images/blog/2.jpg" alt=""/>
                            </a>
                            <div className={styles.blog__date}>
                                <div className={styles.blog__date_day}>2</div>

                            </div>
                        </div>
                        <div className={styles.blog__content}>
                            <div className={styles.blog__text}>Карта Приватбанку. 100% передоплата на карту Приватбанку. У цьому випадку ви не оплачуєте комісію за накладений платіж. Післяплата. Ви можете оплатити замовлення при отриманні на пошті (накладений платіж). Ця послуга коштує
                                дорожче звичайного відправлення, тому що Ви додатково сплачуєте комісію за повернення грошових коштів відправнику (20 грн. + 2% від суми замовлення).</div>
                        </div>

                    </div>

                    <div className={styles.blog__item}>
                        <div className={styles.blog__header}>
                            <a>
                                <img className={styles.blog__photo} src="https://adoring-pare-dda5f1.netlify.app/assets/images/blog/3.jpg" alt=""/>
                            </a>
                            <div className={styles.blog__date}>
                                <div className={styles.blog__date_day}>3</div>

                            </div>
                        </div>
                        <div className={styles.blog__content}>
                            <div className={styles.blog__text}>Доставка по Україні. Доставка по Україні здійснюється Новою поштою (1-3 дні). У разі відправлення замовлення Новою поштою, послуги пошти покупець сплачує при отриманні замовлення, вартість такого відправлення залежить від ваги
                                посилки та міста куди необхідно доставити посилку.</div>
                        </div>
                    </div>
                </div>
                </div>
        </section>
        <Footer />
    </div>
  )
}
