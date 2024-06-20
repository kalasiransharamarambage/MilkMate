import "react";
import DashboardImg from "../../assets/Img/Factory.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ProductCard from "../../Components/ProductCard/ProductCard";
import yoghurt from "../../assets/Img/drink.png";
import curd from "../../assets/Img/curd2.png";
import cheese from "../../assets/Img/cheese.jpg";
import Butter from "../../assets/Img/Butter.png";
import MilkPowder from "../../assets/Img/milkPowder.jpg";
import drink from "../../assets/Img/yogurt.jpg";
import Footer from "../../Components/Footer/Footer";
import {Link} from "react-router-dom";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Dashboard() {

    useEffect(() => {
        AOS.init({
            duration: 2800,
        });
    }, []);

    const Card_IMG = [
        {
            img: yoghurt,
            title: "Yogurt",
            paragraph: "Yogurt is a creamy, tangy product created by fermenting milk with beneficial bacteria.",
        },
        {
            img: curd,
            title: "Curd",
            paragraph: "Curd is made by adding an acidic substance to milk, causing it to coagulate. It’s similar to yogurt but can vary in taste and texture.",
        },
        {
            img: drink,
            title: "Yogurt Drink",
            paragraph: "This is a liquid, drinkable form of yogurt, often flavored and sweetened.",
        },
        {
            img: MilkPowder,
            title: "Milk Powder",
            paragraph: "Milk powder is dehydrated milk that retains most nutrients and can be reconstituted with water.",
        },
        {
            img: cheese,
            title: "Cheese",
            paragraph: "Cheese is made by coagulating milk, separating the curds, and aging them. Varieties range from soft to hard, and mild to sharp.",
        },
        {
            img: Butter,
            title: "Milk Butter",
            paragraph: " Butter is produced by churning cream until it separates into butterfat and buttermilk. The butterfat is then collected and often salted.",
        },
    ]

    return (
        <div>
            <Row>
            <h1 className="text-center mb-4" style={{ fontSize: "55px",color:"black" ,marginTop:"20px"}}>
        Milk Mate Products
      </h1>
            </Row>
         
           
            <Row>
                <Col data-aos="fade-right" style={{ display: "flex", justifyContent: "end" }}>
                    <Image src={DashboardImg} style={{ width: "auto", height: "80vh" }} />
                </Col>
                <Col data-aos="fade-left" style={{ marginTop: "50px" }}>
                    <h3
                        style={{
                            marginTop: "100px",
                            textAlign: "start",
                            padding: "20px",
                            fontWeight: "bolder",
                            color: "#08184F",
                        }}
                    >
                        Introducing MilkMate, your go-to platform for sustainable dairy solutions! We specialize in collecting surplus milk from vendors and transforming it into delicious dairy products. Our user-friendly website allows customers to easily browse and order their favorite items for delivery right to their doorstep. Join us in reducing food waste and indulging in freshly made dairy delights!
                    </h3>
                    <h4
                        style={{
                            marginTop: "1px",
                            textAlign: "start",
                            padding: "20px",
                            color: "#4A4B4E",
                        }}
                    >

                    </h4>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Row>
                            <Col>
                    <Link to="/orderform"> 
                       
                           <Button variant="outline-primary" style={{width:"200px"}}>
                            Register as a Customer
                        </Button></Link>
                       
                        </Col>
                        <Col>
                       <Link to="/sellerRegistration">
                             <Button variant="outline-primary" style={{width:"200px"}}>
                             Register as a Seller
                         </Button></Link>
                         </Col>
                         </Row>
                    </div>

                    <div style={{ marginTop: "200px", marginBottom: "40px" }}></div>
                </Col>
            </Row>

            <Container style={{ marginTop: "100px", paddingBottom: "30px" }}>
                <Row className="justify-content-center" style={{ rowGap: "50px" }}>
                    {Card_IMG.map((item, index) => (
                        <Col data-aos="fade-up" key={index} xs={12} sm={6} md={4} lg={4} xl={4} style={{ display: "flex", justifyContent: "center" }}>
                            <ProductCard img={item.img} title={item.title} paragraph={item.paragraph} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer/>
        </div>
      
    );
}

export default Dashboard;
