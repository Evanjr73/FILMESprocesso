import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/login/login'
import Home from './pages/home/home'
import Adm from './pages/adm/adm'

import { BrowserRouter as Router,  Routes , Route} from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
       <Router>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/adm' element={<Adm/>}/>

          </Routes>

       </Router>
    
    </>
  )
}

export default App
