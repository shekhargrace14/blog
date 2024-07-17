import React, { useContext } from 'react'
import Banner from '../Components/Banner'
import { ProductContext } from '../context/ProductContext'
import { FaUser } from 'react-icons/fa'

const Home = () => {
  const { state: { products } } = useContext(ProductContext)
  console.log(products)
  return (
    <div>

      <Banner title={"Welcome to Blog"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa quia, in a ratione laborum voluptatibus tempora quae corrupti incidunt aut sunt nam, reiciendis qui vitae officiis non vero dolorem."} button={"Learn More"} />
      <section className='lg:container mx-auto my-4'>
      
      <div className='grid grid-cols-4 gap-4'>
  {products.map(item => (
    <div className='bg-[#f7f7f7] rounded-2xl border-gray-100 border-2 p-2' key={item.id}>
      <img src={item.image} alt={item.title} className='w-full h-auto'/>
      <h3>{item.title}</h3>
      <p className='flex items-center gap-1'><FaUser /> {item.author}</p>
      <p>Published: {item.published_date}</p>
    </div>
  ))}
</div>

      </section>

    </div>
  )
}

export default Home