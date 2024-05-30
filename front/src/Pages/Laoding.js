import React from'react'
import Footer from '../component/Footer/Footer'
import Navbar from '../component/Navbar/Navbar'
import ServiceActeur from '../component/Service2/ServiceActeur'
import Service from '../component/Services/Service'
import HeaderSlide from '../component/Slides/HeaderSlide'
 import { Signup } from '../component/SignUp/Signup'
export default function Loading(){
    return(
    <>
     
     <Footer/>  
    <HeaderSlide/>     
    <Service/>
    <ServiceActeur/>  
     <Signup />
       <Navbar/>
     
      
      

        


    </>
    )
 }