import  React from 'react'
 import './Dashboard.css'
 export default function Dashboard(){
    return( 
    <>
     <input type="checkbox" id="nav-toggle"/>
    
    <div className="sidebar">
            <div className="sidebar-brand">
                <h2><span><i className="fab fa-accusoft"></i></span><span id="kleenpulse">LiquidTime</span></h2>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <a href="#" className="active"><span className="fas fa-cubes"></span>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"><span className="fas fa-users"></span>
                            <span>Customers</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"><span className="fas fa-clipboard-list"></span>
                            <span>Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"><span className="fas fa-shopping-bag"></span>
                            <span>Orders</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"><span className="fas fa-receipt"></span>
                            <span>Inventory</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"><span className="fa fa-user-circle"></span>
                            <span>Accounts</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"><span className="fas fa-clipboard"></span>
                            <span>Task</span>
                        </a>
                    </li>
                </ul>
            </div>
    </div>
    <div className="main-wrapper">
    <div className="main-content">
            <header>
                <h2 className="heading" id="dashboard">
                    Dashboard
                    </h2>
                    <label for="nav-toggle">
                        <span className="fas fa-bars"></span>
                    </label>
                  
                <div className="search">
                    <div className="search-rotate">
                    <div className="icon"></div>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="search" id="mysearch" autocomplete="off" onkeydown="display(this)"/>
                       </div>
                    
                </div>
               
                <div className="user-wrapper">
                    <img src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                        alt=""/>
                    <div>
                    <h4>LiquidTime</h4>
                </div>
                </div>
            </header>
            <main>
               
                <div className="switch" id="switch">
                    <div id="toggle">
                        <i className="fas fa-moon"></i>
                        <i className="fas fa-sun"></i>
                        <i className="indicator"></i>
    
                    </div>
                </div>
                <div className="cards">
                    <div className="card-single">
                        <div>
                            <h1 id="customer"></h1>
                            <span>Happy Clients</span>
                        </div>
                        <div>
                            <span className="fas fa-users"></span>
                        </div>
                    </div>
                    <div className="card-single">
                        <div>
                            <h1 id="project"></h1>
                            <span>Projects Done!</span>
                        </div>
                        <div>
                            <span className="fas fa-clipboard"></span>
                        </div>
                    </div>
                    <div className="card-single">
                        <div>
                            <h1 id="order"></h1>
                            <span>Confirmed Orders</span>
                        </div>
                        <div>
                            <span className="fas fa-shopping-bag"></span>
                        </div>
                    </div>
                    <div className="card-single">
                        <div>
                            <h1><sup>$</sup>
                                <p id="income"><b>k</b></p>
                            </h1>
                            <span>weekly Income</span>
                        </div>
                        <div>
                            <span className="fab fa-google-wallet"></span>
                        </div>
                    </div>
                </div>
                <div className="recent-grid">
                    <div className="projects">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="heading">Recent Projects</h3>
                                <button>See all <span className="fas fa-arrow-right"></span></button>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <td>Project Title</td>
                                                <td>Department</td>
                                                <td>Status</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>UI/UX Design</td>
                                                <td>UI Team</td>
                                                <td>
                                                    <span className="status purple"></span>review
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Web Dev</td>
                                                <td>Frontend</td>
                                                <td>
                                                    <span className="status pink"></span>pending
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ushop App</td>
                                                <td>Mobile Team</td>
                                                <td>
                                                    <span className="status orange"></span>active
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>UI/UX Design</td>
                                                <td>UI Team</td>
                                                <td>
                                                    <span className="status purple"></span>review
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Web Dev</td>
                                                <td>Frontend</td>
                                                <td>
                                                    <span className="status pink"></span>pending
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ushop App</td>
                                                <td>Mobile Team</td>
                                                <td>
                                                    <span className="status orange"></span>active
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>UI/UX Design</td>
                                                <td>UI Team</td>
                                                <td>
                                                    <span className="status purple"></span>review
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Web Dev</td>
                                                <td>Frontend</td>
                                                <td>
                                                    <span className="status pink"></span>pending
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ushop App</td>
                                                <td>Mobile Team</td>
                                                <td>
                                                    <span className="status orange"></span>active
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>UI/UX Design</td>
                                                <td>UI Team</td>
                                                <td>
                                                    <span className="status purple"></span>review
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Web Dev</td>
                                                <td>Frontend</td>
                                                <td>
                                                    <span className="status pink"></span>pending
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ushop App</td>
                                                <td>Mobile Team</td>
                                                <td>
                                                    <span className="status orange"></span>active
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="customers">
                        <div className="card">
                            <div className="card-header">
                               <h3 className="heading">New customer</h3>
                                <button>Sell all<span className="fas fa-arrow-right"></span></button>
                            </div>
    
                            <div className="card-body">
                                <div className="customer">
                                    <div className="info">
                                        <img src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                                            alt=""/>
                                        <div>
                                            <h4>
                                                lion Emusky</h4>
                                            <small>CEO @ TLS</small>
                                        </div>
                                    </div>
                                    <div className="contact">
                                        <span className="fas fa-user-circle"></span>
                                        <span className="fas fa-comment"></span>
                                        <span className="fas fa-phone"></span>
                                    </div>
                                </div>
    
                                <div className="customer">
                                    <div className="info">
                                        <img src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                                            alt=""/>
                                        <div>
                                            <h4>Ion Emusky</h4>
                                            <small>C0O @ AFK</small>
                                        </div>
                                    </div>
                                    <div className="contact">
                                    <span className="fas fa-user-circle"></span>
                                    <span className="fas fa-comment"></span>
                                    <span className="fas fa-phone"></span>
                                    </div>
                                </div>
    
                                <div className="customer">
                                    <div className="info">
                                        <img src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                                            alt=""/>
                                        <div>
                                            <h4>El-lion musky</h4>
                                            <small>CEO @ FOMO</small>
                                        </div>
                                    </div>
                                    <div className="contact">
                                    <span className="fas fa-user-circle"></span>
                                    <span className="fas fa-comment"></span>
                                    <span className="fas fa-phone"></span>
                                    </div>
                                </div>
    
                                <div className="customer">
                                    <div className="info">
                                        <img src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                                            alt=""/>
                                        <div>
                                            <h4>John Bezos</h4>
                                            <small>CEO @ Mazon</small>
                                        </div>
                                    </div>
                                    <div className="contact">
                                        <span className="fas fa-user-circle"></span>
                                        <span className="fas fa-comment"></span>
                                        <span className="fas fa-phone"></span>
                                    </div>
                                </div>
    
                                <div className="customer">
                                    <div className="info">
                                        <img src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                                            alt=""/>
                                        <div>
                                            <h4>Beelz Gai8</h4>
                                            <small>CEO @ Mycroft</small>
                                        </div>
                                    </div>
                                    <div className="contact">
                                        <span className="fas fa-user-circle"></span>
                                        <span className="fas fa-comment"></span>
                                        <span className="fas fa-phone"></span>
                                    </div>
                                </div>
    
                                <div className="customer">
                                    <div className="info">
                                        <img src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                                            alt=""/>
                                        <div>
                                            <h4>Jeam Krook</h4>
                                            <small>CEO @ Penapple</small>
                                        </div>
                                    </div>
                                    <div className="contact">
                                        <span className="fas fa-user-circle"></span>
                                        <span className="fas fa-comment"></span>
                                        <span className="fas fa-phone"></span>
                                    </div>
                                </div>
    
                                <div className="customer">
                                    <div className="info">
                                        <img src="https://assets.codepen.io/3853433/internal/avatars/users/default.png?format=auto&version=1617122449&width=40&height=40"
                                            alt=""/>
                                        <div>
                                            <h4>Cris Coya</h4>
                                            <small>CEO @ PenCode</small>
                                        </div>
                                    </div>
                                    <div className="contact">
                                        <span className="fas fa-user-circle"></span>
                                        <span className="fas fa-comment"></span>
                                        <span className="fas fa-phone"></span>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
    
            </main>
           
    </div>
    </div>
    <video className="video-1" src="https://res.cloudinary.com/liquidtime/video/upload/v1655385934/abstract_fihenv.mp4" loop muted autoplay></video>
    <video className="video-2" src="https://res.cloudinary.com/liquidtime/video/upload/v1655385877/dark_wave_irg2pp.mp4" loop muted
        autoplay></video>
      
    </>
   
   )
}