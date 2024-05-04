import React from 'react';
import styles from './admin-good-item.module.scss';
import { FaTrash } from 'react-icons/fa';
import DeleteService from './service/delete-service'; 
import {useRouter} from 'next/router'

const AdminGoodItem = (props) => {

  const router=useRouter();

  const handleDelete = async () => {
    try {
      await DeleteService.delete(props.id);
      router.reload()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className={styles.basket_r}>
        <hr className={styles.line} style={{color: "lightgrey"}} />
        <div className={styles.wrapper}>
          <img className={styles.img} src={props.imageUrl} alt={props.name} />
          <div className={styles.good_buy_name}>
            <div className={styles.good_buy_name_text}>{props.name}</div>
            <div className={styles.good_buy_name_description}>{props.description}</div>
          </div>
          <div className={styles.price}>{props.price} ₴</div>
          <FaTrash className={styles.bxs_trash} onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default AdminGoodItem;
