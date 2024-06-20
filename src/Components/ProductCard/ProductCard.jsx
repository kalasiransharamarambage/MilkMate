//import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
//import yoghurt from "../../assets/Img/yogurt.jpg";
import { Link } from 'react-router-dom';

function ProductCard({ img, title, paragraph }) {
  return (
    <Card
      style={{
        width: "20rem",
        minHeight: "18rem",
        height: "23rem",
        padding: "0px",
        border: "none",
        backgroundColor: "#E1E1EF",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Image
        src={img}
        style={{ width: "auto", height: "auto", maxHeight: "13rem", borderRadius: "10px" }}
      />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "14px" }}>
        <h3>{title}</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2px", textAlign: "center" }}>
        <p>{paragraph}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", textAlign: "center" }}>
        <Link to="/Yogurt">
          <Button variant="outline-primary">View</Button>
        </Link>
      </div>
    </Card>
  );
}

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default ProductCard;
