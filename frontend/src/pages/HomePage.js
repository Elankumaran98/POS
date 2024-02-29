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
      name: "drinks",
      imageUrl:
        "https://images.vexels.com/media/users/3/246333/isolated/preview/9626dce3278f72220ea2736de64e6233-pink-cocktail-color-stroke.png",
    },
    {
      name: "pizzas",
      imageUrl:
        "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/27954/pizza-pepperoni-clipart-xl.png",
    },
    {
      name: "rice",
      imageUrl:
        "https://media.istockphoto.com/id/547231286/vector/rice-bowl.jpg?s=612x612&w=0&k=20&c=BEGxL9RpCgszeuwC2_Y4UVZfYAcqnX7Nol6u4OjW44M=",
    },
    {
      name: "noodles",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvyHhR7ODSKenL8PWYX9pKzW_p9eC2RE9DSMfdOby00A&s",
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
