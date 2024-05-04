import React, { useState, useEffect } from 'react';
import styles from '../../../styles/order-list.module.scss';
import LikedItem from '../../../shared/liked-item/LikedItem';
import $api from '../../../http';
import IsEmpty from '../../../shared/is-empty/IsEmpty';

export default function LikedList() {
    const [likedList, setLikedList] = useState([]);

    useEffect(() => {
        async function getList() {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    return;
                }
                
                const response = await $api.get('/liked/list', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setLikedList(response.data);
            } catch (error) {
                console.error('Error fetching liked list:', error);
            }
        }

        getList();
    }, []);

    return (
        <div className={styles.list_items}>
           {likedList? likedList.map(item => (<LikedItem key={item.id} id={item.id} name={item.name} price={item.price} imageUrl={item.url} description={item.description} />)):null}

            <hr className={styles.line} color="lightgrey" />
            {likedList.length === 0 ? <IsEmpty text="Список вподобань пустий!" /> : null}
        </div>
    );
}
