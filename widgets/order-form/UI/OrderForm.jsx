import React, { useState, useEffect } from 'react';
import styles from '../../../styles/main.module.scss';
import Link from 'next/link';
import OrderItem from '../../../entities/order-item/OrderItem';
import { useSelector } from 'react-redux';
import $api from '../../../http/index';
import { useRouter } from 'next/router';

export default function OrderForm() {
  const orderList = useSelector(state => state.basket.basketList);
  const router=useRouter()

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await $api.get('/users/get');
        setName(response.data.name || '');
        setSurname(response.data.surname || '');
        setPhoneNumber(response.data.phoneNumber || '');
        setEmail(response.data.email || '');
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);

  const makeOrder = async () => {
    try {
      if (orderList.length === 0) {
        alert('Ваш кошик пустий!');
        return;
      }
      if(name===''&& surname==='' &&phoneNumber===''&& email===''){alert('Заповніть обовязкові поля!'); router.push('/user/basket/order'); return}
      const req = await $api.post('/order/add', { name, surname, phoneNumber, email, list: orderList });
      if (req) {
        alert('Замовлення успішно оформлено!');
        router.push('/user/catalog')
      }
    } catch (error) {
      console.error('Error making order:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <input
          className={styles.input_form}
          value={name}
          onChange={e => setName(e.target.value)}
          type="input"
          placeholder="Ім'я:"
        />
        <input
          className={styles.input_form}
          value={surname}
          onChange={e => setSurname(e.target.value)}
          type="input"
          placeholder="Прізвище:"
        />
        <input
          className={styles.input_form}
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
          type="input"
          placeholder="Номер телефону:"
        />
        <input
          className={styles.input_form}
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="input"
          placeholder="Ел. пошта:"
        />

        {orderList.map(item => (
          <OrderItem
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            goodQuantity={item.goodQuantity}
            price={item.price}
          />
        ))}
        <div className={styles.btn_comeback_pay}>
          <Link href="/user/basket" className={styles.comeback} passHref>
           Повернутися назад
          </Link>
          <Link href='/user/catalog' className={styles.pay} onClick={makeOrder}>
            Оформити замовлення
          </Link>
        </div>
      </div>
    </div>
  );
}
