import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense, useState } from 'react'
import './App.css'
import Baner from './baner'
import Card from './card'
import Nav from './nav'
import Footer from './footer'
let ticit = fetch("/tiket.json").then(x => x.json())

function App() {
 let tiket = ticit
 let [baytiket,setbaytiket] =useState([])
 console.log(baytiket)
 let remove = (v)=>{
    let newtiket = baytiket.filter(x => x.id !== v.id)
    setbaytiket(newtiket)
 }
  return (
    <>
     <ToastContainer position="top-right" autoClose={2000} />
      <Nav></Nav>
      <Baner baytiket={baytiket}></Baner>
    
       <Suspense fallback={<h1>loding..</h1>}>
       <Card tiket={tiket} baytiket={baytiket} setbaytiket={setbaytiket} remove={remove}></Card>
     </Suspense>
    
     <Footer></Footer>
    </>
  )
}

export default App
