import React, { useContext } from 'react'
import Banner from '../Components/Banner'
import ProductContext from '../context/ProductContext'

const Blog = () => {
  // const {value} = useContext(ProductContext)
  return (
    <div>
      <Banner title={"Blog"} button={null}/>
    </div>
  )
}

export default Blog