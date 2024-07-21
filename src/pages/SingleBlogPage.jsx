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
            <main className='lg:flex lg:container mx-auto  p-4 gap-4'>
                <section className='lg:w-9/12 w-full'>
                        
                            {/* <img src={singleBlog.image} alt={singleBlog.title} className='w-full h-auto' /> */}
                            <h1 className='md:text-3xl text-2xl my-2 font-semibold'>{singleBlog.title}</h1>

                            <div className='md:flex gap-4 ' >
                                <div className='md:w-6/12 h-fit bg-red-500'>
                                    <iframe width="100%" height="315" src={singleBlog.video} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                                
                                <div className='md:w-6/12 grid'>
                                    <p className='flex items-center gap-1' dangerouslySetInnerHTML={{ __html: singleBlog.artist }} />
                                    <p className='flex items-center gap-1 '><FaUser /> {singleBlog.author}</p>
                                    <p>Published: {singleBlog.published_date}</p>
                                    {/* <p className='flex items-center gap-1'>{singleBlog.artist}</p> */}

                                </div>
                            </div>

                            <h3 className='text-xl my-2 font-semibold'>{singleBlog.title}</h3>
                            <div className='flex items-center gap-1' dangerouslySetInnerHTML={{ __html: singleBlog.lyrics }} />
                        
                </section>
                <aside className='lg:w-3/12 w-full  bg-gray-100'>
                </aside>
            </main>
        </div>
    )
}

export default singleBlogPage