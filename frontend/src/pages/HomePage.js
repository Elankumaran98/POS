import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Col, Row } from "antd";
import ItemList from "../components/ItemList";

const HomePage = () => {
  const [itemsData, setItemsData] = useState([]);
  const [selectCategory, setSelectCategory] = useState("drinks");
  const categories = [
    {
      name: "drink",
      imageUrl:
        "https://www.beanilla.com/wp/wp-content/uploads/2022/06/RefreshingDrinks.jpg",
    },
    {
      name: "rice",
      imageUrl:
        "https://www.recipetineats.com/wp-content/uploads/2023/08/Garlic-rice_5.jpg",
    },
    {
      name: "noodles",
      imageUrl:
        "https://tiffycooks.com/wp-content/uploads/2021/09/Screen-Shot-2021-09-21-at-5.21.37-PM.png",
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    const getallitems = async () => {
      try {
        dispatch({
          type: "SHOW_LOADING",
        });
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
  const myData=itemsData.filter((i)=>i.category===selectCategory)
  return (
    <DefaultLayout>
      <div className="d-flex">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`d-flex category ${
              selectCategory === category.name && "category-active"
            }`} onClick={()=>setSelectCategory(category.name)}>
            <h4>{category.name}</h4>
            <img
              src={category.imageUrl}
              alt={category.name}
              height="40"
              width="60"
            />
          </div>
        ))}
      </div>
      <Row>
        {myData.map((item) => (
          <Col xs={24} lg={6} md={12} sm={6}>
            <ItemList item={item} />
          </Col>
        ))}
      </Row>
    </DefaultLayout>
  );
};

export default HomePage;
