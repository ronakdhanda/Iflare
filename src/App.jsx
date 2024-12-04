import React from 'react'
import Name from './Components/Name/Name'
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel'
import { Services } from './Components/Servicess/Services'
import { Contact } from './Components/Contact/Contact'
// import { About } from './Components/About/About'

function App() {

  return (
    <div >
      <Header/>
      <Name/>
      <Carousel />
      <Services/>
      <Contact/>
      {/* <About/> */}
    </div>
  )
}

export default App