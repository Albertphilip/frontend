import React from 'react';
import './style/Newcall.css';

function Newcall() {
  return (
    <div>
      <h5 style={{margin:'0 0 5% 0'}}>Add New Call Details</h5>
      <div className='add-call-details' >
        {/* ----------------form ----------------------- */}
    <form>
  <div className="form-group" style={{margin:'0 0 2% 0'}}>
    <label >Date</label>
    <input type="date" className="form-control"   />
  </div>
  <div className="form-group" style={{margin:'0 0 2% 0'}}>
    <label >Client Name</label>
    <input type="text" className="form-control"   />
  </div>
  <div className="form-group" style={{margin:'0 0 2% 0'}}>
    <label >Phone Number</label>
    <input type="text" className="form-control"   />
  </div>
  <div className="form-group" style={{margin:'0 0 2% 0'}}>
    <label >Name (Optional)</label>
    <input type="text" className="form-control"   />
  </div>
  <div className="form-group" style={{margin:'0 0 2% 0'}}>
    <label >Purpose of Call</label>
    <input type="text" className="form-control"   />
  </div>
  <div className="form-group" style={{margin:'0 0 2% 0'}}>
    <label >Status of Call</label>
    <input type="text" className="form-control"   />
  </div>
  <div className="form-group" style={{margin:'0 0 2% 0'}}>
    <label >Call Duration</label>
    <input type="text" className="form-control"   />
  </div>
  <div className="form-group" style={{margin:'0 0 2% 0'}}>
    <label >Comments (if any)</label>
    <input type="text" className="form-control"   />
  </div>
  
  <div class="button-container">
  <button class="button-cancel">Cancel</button>
    <button class="button">Save</button>
  </div>
</form>


      </div>
    </div>
  )
}

export default Newcall
