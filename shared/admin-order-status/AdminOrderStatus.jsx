import React, { useState } from 'react'
import styles from './admin-order-status.module.scss'
import $api from '../../http';
import { useRouter } from 'next/router';

export default function AdminOrderStatus(props) {
  const [status, setStatus] = useState('Оформлено');
  const router = useRouter();

  async function addStatus() {
    try {
      await $api.post('/order/changeStatus', {  status, id: props.id,});
      router.reload();
    } catch (e) {
      console.log(e);
    }
  }
  
  return (
    <div className={styles.wrapper}>
       <div className={styles.wrapper__list}>
          <a onClick={() => setStatus("Оформлено")} className={styles.wrapper__status}>Оформлено</a>
          <a onClick={() => setStatus("Скасовано")} className={styles.wrapper__status}>Скасовано</a>
          <a onClick={() => setStatus("В обробці")} className={styles.wrapper__status}>В обробці</a>
          <a onClick={() => setStatus("Виконано")} className={styles.wrapper__status}>Виконано</a>
       </div>
       <button className={styles.btn} onClick={addStatus}>Зберегти</button>
    </div>
  );
}
