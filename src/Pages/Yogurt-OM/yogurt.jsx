
import yoghurt from "../../assets/Img/yogurt.jpg"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Card_IMG = [
    {
        img:yoghurt,
        title:"Yogurt",
        paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum libero dicta aspernatur adipisci rem.",
    } ]

    return (
        <div>
          <Row>
            <Col data-aos="fade-right" style={{ display: "flex", justifyContent: "end" }}>
              <Image src={DashboardImg} style={{ width: "auto", height: "80vh" }} />
            </Col>
            <Col data-aos="fade-left" style={{ marginTop: "50px" }}>
              <h1
                style={{
                  marginTop: "100px",
                  textAlign: "start",
                  padding: "20px",
                  fontWeight: "bolder",
                  color: "#08184F",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad.
              </h1>
              </Col>
              </Row>
              </div>
              
              
            
            
            )
