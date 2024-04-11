import React from 'react';
import './style/Navbar.css'

function Navbar() {
  return (
    <div>
       {/* <div className="navbar">
       
       <div className="logo" style={{fontWeight:'bold',backgroundColor:'black',padding:'5px 15px',color:'white',borderRadius:'40px'}}>Consultancy 4 U</div>
       
       <div style={{marginRight:'0%'}}>
       <label className="switch">
       <input type="checkbox" />
       <span className="slider" />
     </label>
     
       </div>
       
     </div> */}
{/* ------------------------------------------ */}
<div className="navbar">
<div className="logo" style={{fontWeight:'bold',backgroundColor:'black',padding:'5px 15px',color:'white',borderRadius:'40px'}}>Consultancy 4 U</div>
  <div className and="button-container" >
    
  <label className="switch" style={{marginRight:'13px', marginTop:'10px',float:'left'}}>
       <input type="checkbox" />
       <span className="slider" />
     </label>
     <h6 style={{marginRight:'30px',marginTop:'10px',float:'left'}}>Status</h6>
      
     <span className="material-symbols-outlined" style={{marginRight:'5px',backgroundColor:'lightblue', padding:'10px',borderRadius:'50%'}}>account_circle</span>

   
  </div>
</div>



    </div>
  )
}

export default Navbar
