import React from 'react';
import Flickity from 'react-flickity-component';
import styles from './style.module.scss';
import './f.css'

const flickityOptions={
    initialIndex:2
}

export default function Carousel(props) {
  return (
    <div className={styles.container}>
      <Flickity className={styles.slider}
      elementType='div'
      disableImagesLoaded={false}
      options={flickityOptions}
      reloadOnUpdate
      static>
       {props.images.map(item=><img className={styles.image} src={item}/>)}
      
      </Flickity>
    </div>
  );
}
