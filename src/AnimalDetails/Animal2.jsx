import React  from 'react'
import animal2 from '../assets/akilaImages/animal2.jpg';
import eyeImage from '../assets/akilaImages/eye.png';
import cowArtImage from '../assets/akilaImages/cowArt.jpg';

import Navbar from '../Components/Navbar/Navbar.jsx';

export default function Animal2() {

    const bgstyle = {
        backgroundImage: `url(${animal2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '800px', 
        width: 'auto',  
        display: 'flex', 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        paddingLeft: '20px',
        margin:'10px',
        opacity: 0.95
      };

      const cardContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
         
      };

      const cardStyle = {
        backgroundColor: '#C9E9F2',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        textAlign: 'left',
        width: '330px',
        display: 'flex',
        //flexDirection: 'column',
        alignItems: 'left',
        height : '200px',
        marginLeft:'50px'
    };

    const textStyle = {
        fontSize: '30px',
        fontWeight: 'bold',
        marginTop: '10px',
        textAlign: 'left'
      };

      const imageStyle = {
        width: '50px',
        height: '50px',
        margin: '0px'
      };

    

  return (
    <div>
        <Navbar/>
    <div style={bgstyle}>
        <div style={cardContainerStyle}>
            <div style={cardStyle} >
                {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={eyeImage} alt="Eye" style={imageStyle} />
                </div> */}
                
                <div style={textStyle}>
                    See <br/>Animals
                </div>
                <img src={cowArtImage} alt="Cow" style={{ ...imageStyle, width: '200px', height: '200px'}} />
            </div>

            <div style={cardStyle}>
                <div style={textStyle}>
                    Add <br/>Animals
                </div>
                <img src={cowArtImage} alt="Cow" style={{ ...imageStyle, width: '200px', height: '200px'}} />
            </div>

            <div style={cardStyle}>
                <div style={textStyle}>
                    Medi  <br/>Info
                </div>
                <img src={cowArtImage} alt="Cow" style={{ ...imageStyle, marginLeft:'40px', width: '200px', height: '200px'}} />
            </div>     
        </div>   
        
    </div>
    </div>
    
  )
}
