import React from 'react'
import Navbar from './components/Navbar'
import { Routes , Route } from 'react-router-dom'
import Home from './components/Home'
import Feed from './components/Feed'

function App() {
  return (
    <div>
        <Routes>
           <Route  index path='/' element={<Home/>}></Route>
        </Routes>
         <Routes>
            <Route path='feed' element={<><Navbar/><Feed/></>}></Route>
         </Routes>
    </div>
  )
}

export default App