import React, { useContext } from 'react'
import Banner from '../Components/Banner'
import { ProductContext } from '../context/ProductContext'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
  const { state: { products } } = useContext(ProductContext)
  console.log(products)
  return (
    <div>
      <Banner title={"Welcome to Blog"} paragraph={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa quia, in a ratione laborum voluptatibus tempora quae corrupti incidunt aut sunt nam, reiciendis qui vitae officiis non vero dolorem."} button={"Learn More"} />
      <main className='lg:flex lg:container mx-auto my-4 gap-4'>
        <section className='lg:w-8/12 w-full'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {products.slice(0,9).map(item => (
              <div className='bg-[#f7f7f7]  border-gray-100 border-2 p-4' key={item.id}>
                <iframe width="100%" height="auto" src={item.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p className='text-xs flex items-center gap-1'><FaUser /> {item.author}</p>
                <p className='text-xs'>{item.published_date}</p>
                <Link to={`./singleBlogPage/${item.id}`}>
                  <h3 className='line-clamp-2 text-xl my-2 font-semibold'>{item.title}</h3>
                </Link>
                <p className='flex items-center gap-1'>{item.artist}</p>
                {/* <div className='flex items-center gap-1' dangerouslySetInnerHTML={{ __html: item.lyrics }} /> */}

              </div>
            ))}
          </div>

        </section>
        <aside className='lg:w-4/12 w-full bg-gray-100'>

        </aside>
      </main>

    </div>
  )
}

export default Home