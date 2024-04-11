import React from 'react';
import './style/Sidebar.css';
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div>
       <div className='sidebar-col'>
   <div className="sidebar">
  <div className="company-logo">
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png" alt ="" style={{width:'30px', height:'30px'}}/>

  </div>
  <div className='sidebar-buttons'>
  <div className="sidebar-item">
  <Link to="/dashboard">
  <span className="material-symbols-outlined" style={{color:'white'}} >analytics</span>
  </Link>
  </div>
  <div className="sidebar-item">
  <Link to="/home">
  <span class="material-symbols-outlined" style={{color:'white'}}>perm_phone_msg</span>
  </Link>
  </div>
  <div className="sidebar-item">
   <Link to="/">
  <span class="material-symbols-outlined" style={{color:'white'}}>edit_square</span>
  </Link>
  </div>
  <div className="sidebar-item">
   <Link to="/">
  <span class="material-symbols-outlined" style={{color:'white'}}>book_5</span>
  </Link>
  </div>
  </div>
</div>



    </div>
    </div>
  )
}

export default Sidebar
