import React from 'react'
import AdminNavbar from '../../widgets/admin-navbar/AdminNavbar'
import AdminAddForm from '../../features/admin-add-form/AdminAddForm'
import styles from '../../styles/main.module.scss'
import useAuth from '../../api/authMiddleware'

export default function catalog({goodList}) {
  useAuth()

  return (
    <div className={styles.body1}>
    <AdminNavbar />
    <AdminAddForm goodList={goodList}/>
  </div>
  )
}

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:5000/goods/get');
    
    const data = await response.json(); 
    console.log(data);
    return {
      props: {
        goodList: data
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        goodList: null
      }
    };
  }
}
