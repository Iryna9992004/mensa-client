import React, { useEffect, useState } from 'react';
import styles from './product-modal.module.scss';
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Carousel from '../../shared/carousel/Carousel';
import $api from '../../http';
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { addToBasket,calculateAllGoods,calculateAllSum } from '../../app/GlobalRedux/features/basketSlice';

export default function ProductModal({ id }) {
  const [order, setOrder] = useState();
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    const newItem = {
      imageUrl: order.pictures[0],
      name: order.good.name,
      price: order.good.price,
      goodQuantity: 1
    };
    
    dispatch(addToBasket(newItem));
    dispatch(calculateAllGoods());
    dispatch(calculateAllSum())

  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await $api.get(`/goods/getOne/${id}`);
        setOrder(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    if (id) { 
      fetchData();
    }
  }, [id]);

  const addToLiked=async()=>{
    try{
      if(localStorage.getItem('token')){
        if(!props.liked){
          await $api.post('/liked/add',{name:order.good.name,description:order.good.description,url:order.pictures[0],price:order.good.price});
        }
        else if(props.liked){
          await $api.post(`/liked/delete/${props.id}`)
        }

        router.reload()
      }
      else{
        alert('Користувач не авторизований! Ввійдіть у свій акаунт або авторизуйтеся');
      }
    }
    catch(e){
      console.log(e)
    }
  }


  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.body}>
      <div className={styles.modal}>
        <div className={styles.about}>
          <div className={styles.about__name}>{order.good.name}</div>
          <div className={styles.about__name_description}>Свічка</div>
          <div className={styles.about__description}>{order.good.description}</div>
        </div>

        <Carousel images={order.pictures}/>

        <div className={styles.about1}>
          <div className={styles.about__name}>{order.good.name}</div>
          <div className={styles.about__name_description}>Свічка</div>
          <div className={styles.about__description}>{order.good.description}</div>
        </div>

        <div className={styles.buy}>
          <div className={styles.buy__price}>{order.good.price} ₴</div>
          <button className={styles.buy__basket} onClick={handleAddToBasket}><span>Додати в кошик </span> <PiShoppingCartSimpleFill className={styles.icon} /></button>
          <button className={styles.buy__basket} onClick={addToLiked}><span>Подобається </span> <FaHeart className={styles.icon} /></button>
          <Link href='/user/catalog'><button className={styles.buy__basket1}><span>Повернутися назад</span></button></Link>
        </div>
      </div>
    </div>
  );
}
