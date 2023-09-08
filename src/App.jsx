import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './bootstrap/css/bootstrap.min.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import About from './components/About'
import { useRoutes } from 'react-router-dom'
import Footer from './components/Footer'
import Register from './components/Register'
import Contact from './components/Contact'
import UserInfo from './components/UserInfo'


function App() {
  // const [count, setCount] = useState(0)
  const element = useRoutes([
    {
      path: '/',
      element: <Homepage />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: 'quran',
      element: <Home />
    },
    {
      path: 'register',
      element: <Register />
    },
    {
      path: 'contact',
      children:[
        {
          index: true,
          element: <Contact/>
        },
        {
          path:':userId',
          element: <UserInfo />
        }
      ]
    },
    {
      path: '*',
      element: <h1 className='text-center'>Error 404 <br/>Page not Found</h1>
    }
  ])
  return (
    <>
    
    
    <Navbar />
    {element}
    <Footer />

    {/* <Homepage /> */}
    {/* <About /> */}
      {/* <Home /> */}
    </>
  )
}

export default App
