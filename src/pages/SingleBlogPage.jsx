import React, { useContext } from 'react'
import Banner from '../Components/Banner'
import { ProductContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const singleBlogPage = () => {
    const { state: { products } } = useContext(ProductContext);
    const { id } = useParams();

    const singleBlog = products.find(item => item.id === parseInt(id));

    console.log(id); // Debug: Logs the id from the URL
    console.log(singleBlog); // Debug: Logs the found product

    if (!singleBlog) {
        return <div>Blog post not found</div>;
    }

    return (
        <div>
            <main className='flex lg:container mx-auto my-4 gap-4'>
                <section className='w-8/12'>
                        <div className=''>
                            {/* <img src={singleBlog.image} alt={singleBlog.title} className='w-full h-auto' /> */}
                            <h1 className='line-clamp-2 text-3xl my-2 font-semibold'>{singleBlog.title}</h1>

                            <div className='grid grid-flow-col  ' >
                                <div >
                                    <iframe  src={singleBlog.video} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                                <div >
                                    <p className='flex items-center gap-1 '><FaUser /> {singleBlog.author}</p>
                                    <p>Published: {singleBlog.published_date}</p>
                                    <p className='flex items-center gap-1'>{singleBlog.artist}</p>

                                </div>
                            </div>

                            <h3 className='line-clamp-2 text-xl my-2 font-semibold'>{singleBlog.title}</h3>
                            <div className='flex items-center gap-1' dangerouslySetInnerHTML={{ __html: singleBlog.lyrics }} />
                        </div>
                </section>
                <aside className='w-4/12 bg-gray-100'>

                </aside>
            </main>
        </div>
    )
}

export default singleBlogPage