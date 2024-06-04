import React from 'react';
import './CChildDisplay.css';
import Button from 'react-bootstrap/Button';

function CChildDisplay() {
    return (
       
        <div class="main">
          <span class="span1">
          <h3 class="h3">Detail List-Cow</h3>
        <div className="DetailList">
          <span class="details">
         
            <div class="area" style={{textAlign:'center'}}>
           
            <br></br>
            <h5>Range of the Age :            Day 01-6 months</h5>
            <h5>Length  :                     6m</h5>
            <h5>Width :                       4m</h5>
            <h5>Area :                        sq.mt24</h5>
            <h5>cost for 1 sq.mt :            Rs.1200.00</h5>
            </div>
            </span>
       </div>

                       
<Button class="bt" variant="primary" size="medium" disabled>
  Go back
</Button>
</span>
      </div>
      
    );
}

export default CChildDisplay;