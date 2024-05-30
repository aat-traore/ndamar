import React from "react"
import '../Footer/Footer.css'
  //let mylogo= require('../../asssets/images/NDamar/7.svg') 
  import mylogo from '../../asssets/images/NDamar/lastVersion.png'
export default function Footer() {
  const MenuItems=[
    {
      Titre:"vehicules",
      Url:"#",
      cName:"nav-links"
    },
    {
      Titre:"Location",
      Url:"#",
      cName:"nav-links"
    },
    {
      Titre:"A Propos",
      Url:"#",
      cName:"nav-links"
    },
    {
      Titre:"Services",
      Url:"#",
      cName:"nav-links"
    }
  ]

    return (
  <>
   <div className="container__header">
    
  

    <div className="Navigation">
      <div className="Logo">
        <img src={mylogo} alt="title_web" className="mylogo"/>
      </div>
      <div className="links" >
        <ul>
          {
           MenuItems.map((item,index)=>
           (<li key={index}>
              <a className={item.cName} href={item.Url}>
                {item.Titre}
              </a>
            </li>)
           )}
        </ul>
      </div>
      <div className="button-nav">
        <ul className="button-right">
          <button className="navbar-btn btn btn-custom" id="sign-up">Sign Up</button>
          <button className="navbar-btn btn btn-custom" id="login">Log In</button>
        </ul>
      </div>

    </div>
  </div>
  </> 
  )}