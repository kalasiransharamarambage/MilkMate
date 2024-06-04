import React from "react";
import searchCow from "../assets/akilaImages/searchCow.png";
import cow1 from "../assets/akilaImages/cow1.jpg";
import cow2 from "../assets/akilaImages/cow2.jpg";
import cow3 from "../assets/akilaImages/cow3.jpg";
import cow4 from "../assets/akilaImages/cow4.jpg";
import cow5 from "../assets/akilaImages/cow5.jpeg";

import Navbar from '../Components/Navbar/Navbar.jsx';


export default function SeeAnimal() {

  const outerContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    flexWrap: "wrap",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    border: "2px solid #00FFFF", 
    borderRadius: "25px",
    backgroundColor: "#E0F7FA", 
    width: "100%",
    maxWidth: "600px",
    marginTop: "10px",
    marginLeft : '-55px',
    flexWrap: "wrap",
  };

  const inputStyle = {
    border: "none",
    outline: "none",
    padding: "10px",
    borderRadius: "5px",
    flex: "1",
    marginRight: "10px",
    backgroundColor: "#E0F7FA", 
    fontSize: "16px",
    minWidth: "200px",   
  };

  const buttonStyle = {
    padding: "10px 20px",
    border: "1px solid #0000FF", 
    borderRadius: "5px",
    backgroundColor: "#FFF", 
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "2px",
  };

  const imageStyle = {
    width: "200px",
    height: "200px",
    marginRight: "20px",
    marginBottom: "10px",
    marginTop :'15px'
  };

  const mainBigCowRec = {
    display: "flex",
    border: "2px solid #00FFFF",
    borderRadius: "10px",
    backgroundColor: "#E0F7FA",
    width: "90%",
    marginLeft: "5%",
    height: "auto",
    flexDirection: "row",
    overflowX: "scroll",
    padding: "20px",
    boxSizing: "border-box",
    marginTop:'80px',
    marginBottom : '50px'
  };

  const subBigCowRec = {
    display: "flex",
    alignItems: "center",
    padding: "100px",
    border: "0px solid #00FFFF", 
    borderRadius: "15px",
    backgroundColor: "#9FCCDF",
    width: "100px",
    marginLeft: "5%",
    marginRight :"5%",
    marginTop: "30px",
    height: "240px",
    flexDirection: "column",
    cursor: "pointer"
  }

  const subSmallCowRec = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "80px",
    border: "0px", 
    backgroundColor: "#9FCCDF", 
    marginTop:'-90px',
    marginLeft:'-3px',   
    width: "100px",
    height: "150px",
  }

  const subSmallCowPic = {
    alignItems: "center",
    width: "160px",   
    height: "160px",
    borderRadius : "20px"
  }

  const animalIdRec = {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    padding: "10px", 
    marginTop:'30px',
    marginLeft:'-3px',   
    width: "130px",
    height: "10px",
  }

  const animalIdStyle ={
    fontWeight: '700',
  }





  return (
    <div>
      <Navbar/>
      <div style={outerContainerStyle}>
        <img src={searchCow} alt="Cow Icon" style={imageStyle} />

        <div style={containerStyle}>
          <input type="text" placeholder="Enter Animal ID" style={inputStyle} />
          <button style={buttonStyle}>Search</button>
        </div>
      </div>
      <div style={mainBigCowRec}>
        <div style={subBigCowRec}>
            <div style = {subSmallCowRec}>
                <img src={cow1} alt="cow1" style={subSmallCowPic}/>
            </div>
            <div style = {animalIdRec}>
                <h5 style={animalIdStyle}>CW0001</h5>
            </div>
        </div>
        <div style={subBigCowRec}>
            <div style = {subSmallCowRec}>
                <img src={cow2} alt="cow2" style={subSmallCowPic}/>
            </div>
            <div style = {animalIdRec}>
                <h5 style={animalIdStyle}>CW0002</h5>
            </div>
        </div>
        <div style={subBigCowRec}>
            <div style = {subSmallCowRec}>
                <img src={cow3} alt="cow3" style={subSmallCowPic}/>
            </div>
            <div style = {animalIdRec}>
                <h5 style={animalIdStyle}>CW0003</h5>
            </div>
        </div>
        <div style={subBigCowRec}>
            <div style = {subSmallCowRec}>
                <img src={cow4} alt="cow4" style={subSmallCowPic}/>
            </div>
            <div style = {animalIdRec}>
                <h5 style={animalIdStyle}>CW0004</h5>
            </div>
        </div>
        <div style={subBigCowRec}>
            <div style = {subSmallCowRec}>
                <img src={cow5} alt="cow5" style={subSmallCowPic}/>
            </div>
            <div style = {animalIdRec}>
                <h5 style={animalIdStyle}>CW0005</h5>
            </div>
        </div>
        
      </div>
      {/* <br /><br /> */}
    </div>
  );
}
