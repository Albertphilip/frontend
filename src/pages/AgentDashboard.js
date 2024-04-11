import React from 'react';
import './style/AgentHomepage.css';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import {Link} from 'react-router-dom';
import './style/AgentDashboard.css'

function AgentDashboard() {
  return (
    <div>
     <div className='agent-home-container'>
   

   <Sidebar/>
  
      </div>
      <div className='content-col-dash' style={{height:'100vh'}}>
     <Navbar/>
     <div className='Call-details-row '>
    <h4 className='Call-details-dash'>Overview</h4>
    <div className="card-group ">
  <div className="card "style={{margin:'1% 0 1% 3%',border:'0'}}>
    
    <div className="card-body" style={{margin:'10px 0 0 10px'}}>
      <div className='' >
      <span class="material-symbols-outlined" style={{color:'#fe4112',backgroundColor:'#fdf5f2',padding:'10px',borderRadius:'5px'}}>edit_square</span>
      </div>
      <h6 className="card-text" style={{marginTop:'15px'}}>Total Calls</h6>
      <h1 className="card-text" style={{marginTop:'10px'}}>424</h1>
    </div>
  </div>
  <div className="card"style={{margin:'1% 0 1% 2%',border:'0'}}>
   
    <div className="card-body" style={{margin:'10px 0 0 10px'}}>
    <div className='' >
      <span class="material-symbols-outlined" style={{color:'#009649',backgroundColor:'#f2fdf5',padding:'10px',borderRadius:'5px'}}>perm_phone_msg</span>
      </div>
      <h6 className="card-text" style={{marginTop:'15px'}}>Calls Connected</h6>
      <h1 className="card-text" style={{marginTop:'10px'}}>124</h1>
    </div>
  </div>
  <div className="card"style={{margin:'1% 0 1% 2%',border:'0'}}>
   
    <div className="card-body" style={{margin:'10px 0 0 10px'}}>
    <div className='' >
      <span class="material-symbols-outlined" style={{color:'#fe4112',backgroundColor:'#fdf5f2',padding:'10px',borderRadius:'5px'}}>perm_phone_msg</span>
      </div>
      <h6 className="card-text" style={{marginTop:'15px'}}>Calls Disconnected</h6>
      <h1 className="card-text" style={{marginTop:'10px'}}>24</h1>
    </div>
  </div>
  <div className="card"style={{margin:'1% 4% 1% 2%',border:'0'}}>
  
    <div className="card-body" style={{margin:'10px 0 0 10px'}}>
    <div className='' >
      <span class="material-symbols-outlined" style={{color:'#fe4112',backgroundColor:'#fdf5f2',padding:'10px',borderRadius:'5px'}}>trending_down</span>
      </div>
      <h6 className="card-text" style={{marginTop:'15px'}}>Total Logged-in Time</h6>
      <h1 className="card-text" style={{marginTop:'10px'}}>242 Hrs</h1>
    </div>
  </div>
</div>
   



   </div>
   {/* -------------------------table---------------------------------------- */}
   <div className='table-container-dashboard' >
   <div >
  <table className="table" >
    <thead className="theads table-secondary" >
      <tr>
        <th scope="col">Phone Number</th>
        <th scope="col">Purpose Of Call</th>
        <th scope="col">Status of Call</th>
        <th scope="col">Call Duration</th>
        <th scope="col">Comments (if any)</th>
        <th scope="col">Client</th>
        <th scope="col">Edit/Delete</th>


      </tr>
    </thead>
    <tbody  >
      <tr className='' style={{height:'10vh'}} >
        <td>+91 9874561230
            <h6 style={{color:'lightgray', fontWeight:'light'}}>Arun</h6>
        </td>
        <td>Offer Details</td>
        <td>
            <div style={{backgroundColor:'rgb(252, 227, 227)',width:'60%',height:'auto',textAlign:'center',borderRadius:'30px',color:'red',fontSize:'smaller',padding:'3px 0',marginTop:'5%'}}>
            Not Interested
            </div>
        </td>
        <td>1.40 min</td>
        <td>--</td>
        <td>Samsung</td>
        <td>
            <Link to= ''>
             <span class="material-symbols-outlined" style={{margin:'5px 10px', float:'left',color:'black',fontWeight:'300'}}>border_color</span>
            </Link>
            <Link to= ''>
            <span class="material-symbols-outlined"style={{margin:'5px 10px', float:'left',color:'black',fontWeight:'300'}}>delete</span>
            </Link>
        </td>
      </tr>
      <tr lassName='' style={{height:'10vh'}} >
        <td>+91 9884561230</td>
        <td>Offer Details</td>
        <td>
        <div style={{backgroundColor:'rgb(196, 248, 196)',width:'45%',height:'auto',textAlign:'center',borderRadius:'30px',color:'green',fontSize:'smaller',padding:'3px 0',marginTop:'5%'}}>
            Interested
            </div>
        </td>
        <td>40 s</td>
        <td>Will visit 17-03-24</td>
        <td>Samsung</td>
        <td>
            <Link to= ''>
            <span class="material-symbols-outlined" style={{margin:' 5px 10px', float:'left',color:'black',fontWeight:'300'}}>border_color</span>
            </Link>
            <Link to= ''>
            <span class="material-symbols-outlined"style={{margin:'5px 10px', float:'left',color:'black',fontWeight:'300'}}>delete</span>
            </Link>
        </td>
      </tr>
      
      <tr lassName='' style={{height:'10vh'}}>
        <td>+91 9884561230</td>
        <td>Offer Details</td>
        <td>
            <div style={{backgroundColor:'rgb(252, 227, 227)',width:'60%',height:'auto',textAlign:'center',borderRadius:'30px',color:'red',fontSize:'smaller',padding:'3px 0',marginTop:'5%'}}>
            Not Interested
            </div>
        </td>
        <td>1.40 min</td>
        <td>--</td>
        <td>Samsung</td>
        <td>
            <Link to= ''>
            <span class="material-symbols-outlined" style={{margin:'5px 10px', float:'left',color:'black',fontWeight:'300'}}>border_color</span>
            </Link>
            <Link to= ''>
            <span class="material-symbols-outlined"style={{margin:'5px 10px', float:'left',color:'black',fontWeight:'300'}}>delete</span>
            </Link>
        </td>
      </tr>
      <tr lassName='' style={{height:'10vh'}} >
        <td>+91 9874561230
            
        </td>
        <td>Offer Details</td>
        <td>
            <div style={{backgroundColor:'rgb(252, 227, 227)',width:'60%',height:'auto',textAlign:'center',borderRadius:'30px',color:'red',fontSize:'smaller',padding:'3px 0',marginTop:'5%'}}>
            Not Interested
            </div>
        </td>
        <td>1.40 min</td>
        <td>--</td>
        <td>Samsung</td>
        <td>
            <Link to= ''>
            <span class="material-symbols-outlined" style={{margin:'5px 10px', float:'left',color:'black',fontWeight:'300'}}>border_color</span>
            </Link>
            <Link to= ''>
            <span class="material-symbols-outlined"style={{margin:'5px 10px', float:'left',color:'black',fontWeight:'300'}}>delete</span>
            </Link>
        </td>
      </tr>
      <tr lassName='' style={{height:'10vh'}} >
        <td>+91 9874561230
            
        </td>
        <td>Offer Details</td>
        <td>
            <div style={{backgroundColor:'rgb(252, 227, 227)',width:'60%',height:'auto',textAlign:'center',borderRadius:'30px',color:'red',fontSize:'smaller',padding:'3px 0',marginTop:'5%'}}>
            Not Interested
            </div>
        </td>
        <td>1.40 min</td>
        <td>--</td>
        <td>Samsung</td>
        <td>
            <Link to= ''>
            <span class="material-symbols-outlined" style={{margin:'5px 10px', float:'left',color:'black',fontWeight:'300'}}>border_color</span>
            </Link>
            <Link to= ''>
            <span class="material-symbols-outlined"style={{margin:'5px 10px', float:'left',color:'black',fontWeight:'300'}}>delete</span>
            </Link>
        </td>
      </tr>
      <tr lassName='' style={{height:'10vh'}} >
        <td>+91 9874561230
            
        </td>
        <td>Offer Details</td>
        <td>
            <div style={{backgroundColor:'rgb(252, 227, 227)',width:'60%',height:'auto',textAlign:'center',borderRadius:'30px',color:'red',fontSize:'smaller',padding:'3px 0',marginTop:'5%'}}>
            Not Interested
            </div>
        </td>
        <td>1.40 min</td>
        <td>--</td>
        <td>Samsung</td>
        <td>
            <Link to= ''>
            <span class="material-symbols-outlined" style={{margin:'5px 10px', float:'left',color:'black',fontWeight:'300'}}>border_color</span>
            </Link>
            <Link to= ''>
            <span class="material-symbols-outlined"style={{margin:'5px 10px', float:'left',color:'black',fontWeight:'300'}}>delete</span>
            </Link>
        </td>
      </tr>
      <tr lassName='' style={{height:'10vh'}} >
        <td>+91 9874561230
            
        </td>
        <td>Offer Details</td>
        <td>
            <div style={{backgroundColor:'rgb(252, 227, 227)',width:'60%',height:'auto',textAlign:'center',borderRadius:'30px',color:'red',fontSize:'smaller',padding:'3px 0',marginTop:'5%'}}>
            Not Interested
            </div>
        </td>
        <td>1.40 min</td>
        <td>--</td>
        <td>Samsung</td>
        <td>
            <Link to= ''>
            <span class="material-symbols-outlined" style={{margin:'5px 10px', float:'left',color:'black',fontWeight:'300'}}>border_color</span>
            </Link>
            <Link to= ''>
            <span class="material-symbols-outlined"style={{margin:'5px 10px', float:'left',color:'black',fontWeight:'300'}}>delete</span>
            </Link>
        </td>
      </tr>
    </tbody>
  </table>
 
</div>


   </div>
    </div>
    </div>
  )
}

export default AgentDashboard
