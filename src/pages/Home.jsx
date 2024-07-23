import React, { useContext } from 'react'
import Banner from '../Components/Banner'
import { ProductContext } from '../context/ProductContext'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'

const Home = () => {
  const { state: { products } } = useContext(ProductContext)
  console.log(products)
  return (
    <div>
      <Banner title={"Welcome to Blog"} paragraph={"At blog, we believe in the power of music to inspire and uplift. Our mission is to provide you with the lyrics to your favorite gospel songs, so you can sing along and feel the spirit wherever you are."} button={"Learn More"} />
      <main className='lg:flex lg:container mx-auto  p-4 gap-4'>
        <section className='w-full my-4'>
          <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
            {products.map(item => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>



        <aside className='lg:w-3/12 w-full bg-gray-100'>

        </aside>
      </main>

    </div>
  )
}

export default Home