import React from "react";
import { Card } from "antd";


const ItemList = ({ item }) => {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{
        width: 240,marginBottom:20
      }}
      cover={
        <img
          alt={item.name}
          src={item.image}
          style={{height:"200px"}}
        />
      }>
      <Meta title={item.name}/>
    </Card>
  );
};

export default ItemList;
