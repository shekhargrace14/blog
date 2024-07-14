import { BrowserRouter,  Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import About from "./pages/About"

const App = () => {
  return(
    <>
    <h1>app</h1>
      <Navbar/>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/services" element={<Services/>}/>
           <Route path="/blog" element={<Blog/>}/>
           <Route path="/contact" element={<Contact/>}/> 
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App