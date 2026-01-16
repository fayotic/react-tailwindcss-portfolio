import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Home} from "./pages/Home"
import { NotFound } from './pages/NotFound'
import {ContactMe} from './components/ContactMe'


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path = "*" element = {<NotFound />} />
          <Route path = "./pages/ContactMe" element = {<ContactMe />} />
       


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
