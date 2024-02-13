import React from "react";
import { Card, Button } from "antd";
import { useDispatch } from "react-redux";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
    console.log(item)
  };
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{
        width: 240,
        marginBottom: 20,
      }}
      cover={
        <img alt={item.name} src={item.image} style={{ height: "200px" }} />
      }>
      <Meta title={item.name} />
      <div>
        <Button className="item-button" onClick={() => handleAddToCart()}>
          Add To Cart
        </Button>
      </div>
    </Card>
  );
};

export default ItemList;
