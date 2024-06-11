import React from "react";
import styled from "styled-components";
import yoghurt from "../../assets/Img/yogurt.jpg";
import curd from "../../assets/Img/curd.png";
import Butter from "../../assets/Img/Butter.png";
import drink from "../../assets/Img/yogurt.jpg";


const CartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 10px;
  width: calc(100% - 20px);
  max-width: 800px;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`;

const ItemName = styled.h3`
  font-size: 16px;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-size: 14px;
  margin: 0;
`;

const ItemQuantity = styled.p`
  font-size: 14px;
  margin: 0;
`;

const ItemTotal = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

const Button = styled.button`
  background-color: ${(props) => (props.danger ? "red" : "green")};
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
`;

const SAMPLE_DATA = [
  { name: "Yogurt", price: 100, qty: 3, total: 300, image: yoghurt },
  { name: "Curd", price: 60, qty: 1, total: 60, image: curd },
  { name: "Butter", price: 200, qty: 4, total: 800, image: Butter },
  { name: "Yogurt Drink", price: 150, qty: 2, total: 300, image: drink },
];

function MyCart() {
  const handleDelete = (index) => {
    // Implement delete logic here
    console.log(`Deleting item at index ${index}`);
  };

  const handleUpdate = (index) => {
    // Implement update logic here
    console.log(`Updating item at index ${index}`);
  };

  return (
    <CartContainer>
      {SAMPLE_DATA.map((item, index) => (
        <CartItem key={index}>
          <ItemImage src={item.image} alt={item.name} />
          <ItemDetails>
            <div>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>Price: Rs.{item.price}</ItemPrice>
              <ItemQuantity>Quantity: {item.qty}</ItemQuantity>
            </div>
            <div>
              <ItemTotal>Total: Rs.{item.total}</ItemTotal>
              <Button onClick={() => handleUpdate(index)}>Update</Button>
              <Button danger onClick={() => handleDelete(index)}>
                Delete
              </Button>
            </div>
          </ItemDetails>
        </CartItem>
      ))}
    </CartContainer>
  );
}

export default MyCart;