
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './page/Home'
import Projects from './page/Projects'
import About from './page/About'
import Contact from './page/Contact'
import Services from './page/Services'
import Testimonials from './page/Testimonials'
import Login from './page/Login'
import Signup from './page/Signup'


function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Testimonials' element={<Testimonials/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
      
        
    </>
  )
}

export default App
