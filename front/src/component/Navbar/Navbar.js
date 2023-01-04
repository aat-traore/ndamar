import React from 'react';
import Footer from '../Footer/Footer';
import './Navbar.css'
export default function Navigation (){
 
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
      Titre:"Services",
      Url:"#",
      cName:"nav-links"
    }
  ]
  
    return(
    <>
    <div className="NavbarItems">
     <h1 className='NavbarLogo'>NDaamar</h1>
        <div className="menu">
          <ul>
            {
            MenuItems.map((item,index)=>  
                (<li className='faux' key={index}>
                  <a className={item.cName} href={item.Url}>
                    {item.Titre}
                  </a>
                  </li>)
              )}
                 <ul className="nav navbar-nav navbar-right">
                  <button className="navbar-btn btn btn-custom" id="sign-up">Sign Up</button>
					        <button className="navbar-btn btn btn-custom" id="login">Log In</button>
				        </ul>

          </ul>
          
        </div>
       
    </div>

    </>
    )
}