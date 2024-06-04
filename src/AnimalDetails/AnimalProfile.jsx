import React from 'react'

import Navbar from '../Components/Navbar/Navbar.jsx';
import { Button } from 'react-bootstrap';

export default function AnimalProfile() {

    const FullPageRec = {
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        width: '100%',
        height: '150vh',
    }

    const upperRec = {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '80vh',
    }

    const AnimalPhotoRec = {
        display: "flex",
        alignItems: "center",
        padding: "100px",
        border: "0px solid #00FFFF", 
        borderRadius: "15px",
        backgroundColor: "#9FCCDF",
        width: "40vw",
        marginLeft: "100px",
        marginRight :"5%",
        marginTop: "100px",
        height: "50vh",
        flexDirection: "column",
      }

    const EditDeleteNameRec = {
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        marginTop:'5px',
        width: '60%',
        height: '78vh',
    }

    const EditDeleteMainRec = {
        display: 'flex',
        flexDirection: 'row',
        marginTop:'5px',
        marginLeft : '10%',
        marginBottom: '70px',
        width: '90%',
        height: '10vh',
    }

    const EditDeleteSubRec = {
        display: 'flex',
        backgroundColor: '#E0F7FA',
        border: "2px solid #00FFFF",
        borderRadius: "15px",
        marginTop:'5px',
        marginLeft : '12%',
        width: '35%',
        height: '7vh',
        cursor : 'pointer'
    }

    const DetailsRec = {
        display: 'flex',
        backgroundColor: '#C9E9F2',
        border: "2px solid #00FFFF",
        borderRadius :'20px',
        marginTop:'5px',
        marginLeft : '5%',
        marginBottom : '50px',
        width: '90%',
        height: '10vh',
    }

    const MediInfoRec = {
        display: 'flex',
        backgroundColor: '#C9E9F2',
        border: "2px solid #00FFFF",
        borderRadius :'20px',
        marginTop:'10px',
        marginLeft : '8%',
        marginBottom : '50px',
        width: '88vw',
        height: '20vh',
    }

    const OtherDetailsRec = {
        display: 'flex',
        backgroundColor: '#C9E9F2',
        border: "2px solid #00FFFF",
        borderRadius :'20px',
        marginTop:'10px',
        marginLeft : '8%',
        marginBottom : '50px',
        width: '88vw',
        height: '30vh',
    }

    // const EditDeleteButtonStyle = {
    //     display : 'flex',
    //     backgroundColor: '#E0F7FA',
    //     borderRadius: "15px",
    //     width:"100%",
    //     border:'0px',
        
    // }




  return (
    <div>
        <Navbar/>
      <div style={FullPageRec}>
        <div style={upperRec}>
            <div style={AnimalPhotoRec}>
                
            </div>
            <div style={EditDeleteNameRec}>
                <div style={EditDeleteMainRec}>
                    <div style={EditDeleteSubRec}>
                        <Button style={{width:'100%',borderRadius:'15px',backgroundColor: '#E0F7FA'}}><span style={{color:'black',fontSize:'20px',fontWeight:'600'}}>Edit</span></Button>
                    </div>
                    <div style={EditDeleteSubRec}>
                        <Button style={{width:'100%', borderRadius:'15px',backgroundColor: '#E0F7FA',}}><span style={{color:'black',fontSize:'20px',fontWeight:'600'}}>Delete</span></Button>
                    </div>
                </div>
                <div style={DetailsRec}></div>
                <div style={DetailsRec}></div>
                <div style={DetailsRec}></div>
            </div>
        </div>
        <div style={MediInfoRec}></div>
        <div style={OtherDetailsRec}></div>
      </div>
      <div>

      </div>
    </div>
  )
}
