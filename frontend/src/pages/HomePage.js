import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import axios from "axios";
import { Col, Row } from "antd";
import ItemList from "../components/ItemList";

const HomePage = () => {
  const [itemsData, setItemsData] = useState([]);
  useEffect(() => {
    const getallitems = async () => {
      try {
        const { data } = await axios.get("/api/items/getallitems");
        setItemsData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getallitems();
  }, []);
  return (
    <DefaultLayout>
      <Row>
        {itemsData.map((item) => (
          <Col xs={24} lg={6} md={12} sm={6}>
            <ItemList item={item} />
          </Col>
        ))}
      </Row>
    </DefaultLayout>
  );
};

export default HomePage;
