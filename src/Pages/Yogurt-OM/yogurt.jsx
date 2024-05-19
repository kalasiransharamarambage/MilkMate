import React from 'react'
import { Image } from 'react-bootstrap';
import yoghurt from 
function yogurt() {
    return (
        <div className="App">
          <h1>React Bootstrap Image Example</h1>
          <Image src={yoghurt} rounded style={{ width: "auto", height: "80vh" }} />
        </div>
      );
}

export default yogurt