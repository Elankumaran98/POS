import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import axios from "axios";
import {  useDispatch } from "react-redux";
import { Col, Row } from "antd";
import ItemList from "../components/ItemList";

const HomePage = () => {
  const [itemsData, setItemsData] = useState([]);
  const dispatch=useDispatch()
  useEffect(() => {
    const getallitems = async () => {
      try {
        dispatch({
          type:'SHOW_LOADING',
        })
        const { data } = await axios.get("/api/items/getallitems");
        setItemsData(data);
        dispatch({
          type: "HIDE_LOADING",
        });
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
