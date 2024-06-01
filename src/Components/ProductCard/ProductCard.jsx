import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import yoghurt from "../../assets/Img/yogurt.jpg";

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
        style={{
          width: "auto",
          height: "auto",
          maxHeight: "13rem",
          borderRadius: "10px",
        }}
      />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "14px" }}
      >
        <h3>{title}</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
    <Button variant="outline-primary">Add to Cart</Button>
      </div>
    </Card>
  );
}

export default ProductCard;
