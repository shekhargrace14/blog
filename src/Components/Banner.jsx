import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Banner = ({ title, paragraph, button }) => {
    return (
        <div className='bg-black'>
            <div className='container mx-auto py-32 '>
                <div className='row text-white'>
                    <div className='column  flex justify-center items-center flex-col'>
                        <h1 className='text-5xl font-bold mb-5 text-center'>{title} </h1>
                        <p className='text-center'>{paragraph}</p>
                        {/* {button === "" ? "" :

                            <Link to={"/"} className=' flex items-end my-4'><button className="flex items-center gap-2  justify-center py-2 px-4 border-2  border-white" > {button} </button></Link>

                        } */}
                        {button !== null ? (
                            <Link to={"/"} className="flex items-end my-4">
                                <button className="flex items-center gap-2 justify-center py-2 px-4 border-2 border-white">
                                    {button}
                                </button>
                            </Link>
                        ) : null}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner