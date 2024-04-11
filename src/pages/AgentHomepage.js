import React from 'react';
import './style/AgentHomepage.css';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import {Link} from 'react-router-dom';
import { Modal} from 'antd'; 
import { useState } from 'react';
import Newcall from '../Components/Newcall';


function AgentHomepage() {

  const [visible,setVisible ] = useState(false);

  return (
    <div>
   <div className='agent-home-container'>
   

 <Sidebar/>

    </div>
    <div className='content-col' style={{height:'100vh'}}>
   <Navbar/>
   <div className='Call-details-row'>
    <h4 className='Call-details'>Call Details</h4>
    <div >

                
                          </div>
    <div class="container-details">
    <div class="column">
        <div className='date'style={{margin:'10% 0 0 9%'}}>
        <span class="material-symbols-outlined" style={{float:'left',fontWeight:'200'}}>calendar_month</span>

        <h6 style={{fontWeight:'350',textAlign:'center'}} >13-03-24</h6>
        </div>
      
    </div>
    <div class="column-searchbar">
   <div className="searchbar">
  <div className="searchbar-wrapper">
    <div className="searchbar-left">
      <div className="search-icon-wrapper">
        <span className="search-icon searchbar-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
            </path>
          </svg>
        </span>
      </div>
    </div>
    <div className="searchbar-center">
      <div className="searchbar-input-spacer" />
      <input type="text" className="searchbar-input"  name="q" autoCapitalize="off" autoComplete="off" title="Search" role="combobox" placeholder="Search By Name Phone number" />
    </div>
   
  </div>
</div>

  

    </div>
    <div class="column-filter">
    <div className='filter'style={{margin:'13% 0 0 9%'}}>
    <span class="material-symbols-outlined"style={{float:'left',fontWeight:'200'}}>filter_alt</span>
        <h6 style={{fontWeight:'350'}} >&nbsp;Filter</h6>
        </div>
    </div>
    
             <button type="button" className="btn btn-primary" style={{margin:'0 2% 0 44%',height:'20%'}}
             onClick={()=>{setVisible(true)}}>+ Add New</button>

  </div>



   </div>
   {/* ----------------table------------------------------------ */}
   <div className='table-container'>
   <div>
  <table className="table " >
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
             <span class="material-symbols-outlined" style={{margin:'5px 10px', float:'left',color:'black',fontWeight:'300'}} onClick={()=>{setVisible(true)}}>border_color</span>
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
    </tbody>
  </table>
 
</div>
{/* ---------------Modal------------------------------------------- */}
<Modal onCancel = {()=> setVisible(false)} 
    footer={null} 
    visible={visible}>
      <Newcall/>
        
    </Modal>

   </div>

    </div>
 
   
   
   </div>

   
  )
}

export default AgentHomepage
