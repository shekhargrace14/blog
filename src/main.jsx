import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './pages/Home.jsx'
// import About from './pages/About.jsx'
// import Services from './pages/Services.jsx'
// import Blog from './pages/Blog.jsx'
// import Contact from './pages/Contact.jsx'
// import ProductProvider from './context/ProductContext.jsx'


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/services",
//         element:<Services/>
//       },
//       {
//         path:"/blog",
//         element:<Blog/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       }

//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ProductProvider> */}
    {/* <RouterProvider router={router}/> */}
    <App/>
    {/* </ProductProvider> */}
  </React.StrictMode>,
)
