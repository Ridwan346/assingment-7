
import { Suspense, useState } from 'react'
import './App.css'
import Baner from './baner'
import Card from './card'
import Nav from './nav'
import Footer from './footer'
import Sidecard from './Sidecard'
let ticit = fetch("/tiket.json").then(x => x.json())

function App() {
 let tiket = ticit
 let [baytiket,setbaytiket] =useState([])
 console.log(baytiket)
  return (
    <>
      <Nav></Nav>
      <Baner></Baner>
    
       <Suspense fallback={<h1>loding..</h1>}>
       <Card tiket={tiket} baytiket={baytiket} setbaytiket={setbaytiket}></Card>
     </Suspense>
    
     <Footer></Footer>
    </>
  )
}

export default App
