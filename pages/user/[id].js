import React from 'react'
import ProductModal from '../../widgets/product-modal/ProductModal'
import Navbar from '../../widgets/navbar/UI/NavbarMenu'
import Footer from '../../features/main/UI/Footer'
import { useRouter } from 'next/router'

export default function modal() {
  const {query}=useRouter()

  return (
    <div>
      <Navbar />
      <ProductModal id={query.id}/>
      <Footer />
    </div>
  )
}

