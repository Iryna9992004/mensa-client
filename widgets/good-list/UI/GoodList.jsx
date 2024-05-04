import React, { useEffect, useState } from 'react';
import styles from '../styles/goodlist.module.scss';
import GoodCard from '../../../entities/good-card/GoodCard';

export default function GoodList({ goodList }) {

  return (
    <section className={styles.good_cards}>
      {goodList.map(item => (
        <GoodCard
          id={item.id}
          key={item.name}
          liked={item.liked}
          name={item.name}
          imageUrl={item.url}
          url={item.imageUrl}
          price={item.price}
          goodQuantity={item.goodQuantity}
        />
      ))}
    </section>
  );
}
