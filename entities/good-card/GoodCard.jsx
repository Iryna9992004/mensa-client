import React from 'react';
import styles from './goodCard.module.scss';
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, calculateAllSum, calculateAllGoods } from '../../app/GlobalRedux/features/basketSlice'; // Імпорт дії addToBasket з вашого slice
import $api from '../../http/index'
import {useRouter} from 'next/router'
import Link from 'next/link';

export default function GoodCard(props) {
  const dispatch = useDispatch();
  const likedStyle = props.liked ? `${styles.bx_heart} ${styles.liked}` : styles.bx_heart;
  const router=useRouter()


  const handleAddToBasket = () => {
    const newItem = {
      imageUrl: props.imageUrl,
      name: props.name,
      price: props.price,
      goodQuantity: props.goodQuantity
    };
    dispatch(addToBasket(newItem));
    dispatch(calculateAllGoods());
    dispatch(calculateAllSum())
  };


  const addToLiked=async()=>{
    try{
      if(localStorage.getItem('token')){
        if(!props.liked){
          await $api.post('/liked/add',{name:props.name,description:props.description,url:props.url,price:props.price});
          alert('Додано до списку вподобань')
        }
        else if(props.liked){
          await $api.post(`/liked/delete/${props.id}`)
          alert('Видалено списку вподобань')
        }

      }
      else{
        alert('Користувач не авторизований! Ввійдіть у свій акаунт або авторизуйтеся');
      }
    }
    catch(e){
      console.log(e)
    }
  }

  return (
    <div className={styles.card}>
      <Link href={`/user/${props.id}`}><img src={props.imageUrl} className={styles.img}  /></Link>
      <div className={styles.like_name}>
        <div className={styles.like}><FaHeart className={likedStyle} onClick={addToLiked}/></div>
        <div className={styles.name}>{props.name}</div>
      </div>
      <div className={styles.price_add}>
        <span className={styles.price}>{props.price} ₴</span>
        <a onClick={handleAddToBasket} className={styles.add}>Додати</a>
      </div>
    </div>
  );
}
