import React from 'react';
import './CParentDisplay.css';
import Button from 'react-bootstrap/Button';

function CParentDisplay() {
    return (
        <div class="main">
           <h3 class="h3">Detail List-Goat</h3>   
        <div className="DetailList">
          <span class="details">
           
           
            <div class="area" style={{textAlign:'center'}}>
            <br></br>
            <h5>Range of the Age :            Day 01-3 months</h5>
            <h5>Length :                      4m</h5>
            <h5>Width  :                     2m</h5>
            <h5>Area   :                      sq.mt8</h5>
            <h5>cost for 1 sq.mt :            Rs.900.00</h5>
            </div>
            </span>
            </div>
        
       

                               
<Button class="bt" variant="primary" size="medium" disabled>
  Go back
</Button>
       
      </div>
    );
    
}
export default CParentDisplay;