import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Card from "./Card";

const RelatedBlogs = () => {
    const { state: { products } } = useContext(ProductContext);
    return (
        <>
            <section className='w-full my-4'>
                <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
                    {products.slice(0, 3).map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </section>

        </>
    )
}

export default RelatedBlogs