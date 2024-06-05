import React from 'react'


export default function AddAnimal() {

    const FullPageRec = {
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        width: '100%',
        height: '180vh',
        // backgroundColor: '#E0F7FA',
        // border: "2px solid #00FFFF",
    }

    const upperRec = {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '80vh',
        // backgroundColor: '#E0F7FA',
        // border: "2px solid #00FFFF",
    }    

    const AddPhotoCircle = {
        display: "flex",
        alignItems: "center",
        padding: "100px",
        border: "0px solid #00FFFF", 
        borderRadius: "50%",
        backgroundColor: "#9FCCDF",
        width: "20vw",
        marginLeft: "8%",
        marginTop: "150px",
        height: "40vh",
        flexDirection: "column",
        cursor:'pointer'
      }

    const DetailsMainRec = {
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        marginTop:'100px',
        marginLeft: '80px',
        width: '90%',
        height: '63vh',
        
        // backgroundColor: '#E0F7FA',
        // border: "2px solid #00FFFF",
    }

    const DetailsRec = {
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#E0F7FA',
        // border: "2px solid #00FFFF",
        borderRadius :'20px',
        marginLeft : '0%',
        marginTop: '15px',
        marginBottom: '15px',
        width: '100%',
        height: '10vh',
    }  

    const OtherDetailsRec = {
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#E0F7FA',
        // border: "2px solid #00FFFF",
        borderRadius :'20px',
        marginTop:'10px',
        marginLeft : '8%',
        marginBottom : '50px',
        width: '90vw',
        height: '30vh',
    }

    const SaveButtonRec = {
        display: 'flex',
        backgroundColor: '#C9E9F2',
        border: "2px solid #00FFFF",
        borderRadius :'15px',
        marginLeft : '45%',
        marginTop: '15px',
        marginBottom: '15px',
        width: '15%',
        height: '8vh',
    }

    const TopicRec = {
        display: 'flex',
        backgroundColor: '#C9E9F2',
        border: "2px solid #00FFFF",
        borderRadius :'15px',
        marginTop : '8px',
        marginLeft : '8px',
        width: '28%',
        height: '7vh',
    }

    const InputRec = {
        display: 'flex',
        backgroundColor: '#C9E9F2',
        border: "2px solid #00FFFF",
        borderRadius :'15px',
        marginTop : '8px',
        marginLeft : '8px',
        width: '67%',
        height: '7vh',
    }

    const InputTextStyle = {
        display: 'flex',
        border:'2px',
        backgroundColor:'#C9E9F2',
        outline: 'none',
        width:'95%',
        marginLeft:'2.5%',
        // textAlign:'center'
    }

    const OtherDetailsTopicRec = {
        display: 'flex',
        backgroundColor: '#C9E9F2',
        border: "2px solid #00FFFF",
        borderRadius :'15px',
        marginTop : '8px',
        marginLeft : '8px',
        width: '20%',
        height: '7vh',
    }

    const OtherDetailsInputRec = {
        display: 'flex',
        backgroundColor: '#C9E9F2',
        border: "2px solid #00FFFF",
        borderRadius :'15px',
        marginTop : '8px',
        marginLeft : '8px',
        width: '76%',
        height: '27vh',
    }

    const h5Style = {
        marginTop :'5px',
        fontWeight : '600',
        margin:'auto'
    }

    const ButtonStyle = {
        display: 'block',
        backgroundColor: '#C9E9F2',
        outline :'none',
        border : 'none',
        width:'100%',
        textAlign:'center',
        borderRadius:'15px',
        fontWeight:'650',
        fontSize: '25px'
    }

    



  return (
    <div>
       
      <div style={FullPageRec}>
        <div style={upperRec}>
            <div style={AddPhotoCircle}><h3 style={{margin:'auto',marginTop:'-20px',textAlign:'center',fontWeight:'650'}}>Add Photo</h3></div>
            <div style={DetailsMainRec}>
                <div style={DetailsRec}>
                    <div style={TopicRec}><h5 style={h5Style}>Animal ID</h5></div>
                    <div><h1 style={{marginLeft:'4px',fontWeight:'700'}}>-</h1></div>
                    <div style={InputRec}><input type="text" style={InputTextStyle}  /></div>
                </div>
                <div style={DetailsRec}>
                    <div style={TopicRec}><h5 style={h5Style}>BirthDay</h5></div>
                    <div><h1 style={{marginLeft:'4px',fontWeight:'700'}}>-</h1></div>
                    <div style={InputRec}><input type="text" style={InputTextStyle} /></div>
                </div>
                <div style={DetailsRec}>
                    <div style={TopicRec}><h5 style={h5Style}>Age</h5></div>
                    <div><h1 style={{marginLeft:'4px',fontWeight:'700'}}>-</h1></div>
                    <div style={InputRec}><input type="text" style={InputTextStyle} /></div>
                </div>
                <div style={DetailsRec}>
                    <div style={TopicRec}><h5 style={h5Style}>Date of Addmission</h5></div>
                    <div><h1 style={{marginLeft:'4px',fontWeight:'700'}}>-</h1></div>
                    <div style={InputRec}><input type="text" style={InputTextStyle} /></div>
                </div>
            </div>
        </div>
        <div style={OtherDetailsRec}>
            <div style={OtherDetailsTopicRec}><h5 style={h5Style}>Vaccination Details</h5></div>
            <div><h1 style={{marginLeft:'4px',fontWeight:'700'}}>-</h1></div>
            <div style={OtherDetailsInputRec}><input type="text" style={InputTextStyle}  /></div>
        </div>
        <div style={OtherDetailsRec}>
            <div style={OtherDetailsTopicRec}><h5 style={h5Style}>Other Details</h5></div>
            <div><h1 style={{marginLeft:'4px',fontWeight:'700'}}>-</h1></div>
            <div style={OtherDetailsInputRec}><input type="text" style={InputTextStyle}  /></div>
        </div>
        <div style={SaveButtonRec}>
          
            <button style={ButtonStyle} >Submit</button></div>
      </div>
    </div>
  )
}
