import React, { useState } from 'react';
import styles from './admin-add-form.module.scss';
import AdminFormInput from '../../entities/admin-form-input/AdminFormInput';
import AdminGoodItem from '../admin-good-item/AdminGoodItem';

export default function AdminAddForm({ goodList }) {
  const [open, setOpen] = useState(false);

  const closeForm = (value) => {
    setOpen(value);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.create_account_text}>Каталог</div>
        <button className={styles.btn} onClick={() => setOpen(!open)}>Додати товар</button>
      </div>
      {open ? <AdminFormInput closeForm={closeForm} /> : ''}
      {goodList ? goodList.map(item =><AdminGoodItem imageUrl={item.url} id={item.id} key={item.id} name={item.name} description={item.description} price={item.price}/>) : null}
      <hr className={styles.line} color="lightgrey" />
    </div>
  );
}


