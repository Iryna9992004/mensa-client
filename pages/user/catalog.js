import React from 'react'
import NavbarMenu from '../../widgets/navbar/UI/NavbarMenu'
import GoodList from '../../widgets/good-list/UI/GoodList'
import Footer from '../../features/main/UI/Footer'

export default function Catalog({goodList}) {
  return (
    <div>
         <NavbarMenu />
        <GoodList goodList={goodList}/> 
        <Footer />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  try {
    const req = await fetch('http://localhost:5000/goods/get');
    const goodList = await req.json();

    return {
      props: {
        goodList,
      }
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        goodList: []
      }
    };
  }
};
