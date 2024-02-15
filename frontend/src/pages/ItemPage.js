import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch } from "react-redux";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table, Button, Modal, Form, Input, Select, message } from "antd";

const ItemPage = () => {
  const dispatch = useDispatch();
  const [itemsData, setItemsData] = useState([]);
  const [popModal, setPopModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

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
  useEffect(() => {
    getallitems();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (image, record) => (
        <img src={image} alt={record.name} height="60" width="60" />
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
    },

    {
      title: "Actions",
      dataIndex: "_id",
      render: (id, record) => (
        <div>
          <DeleteOutlined
            style={{
              cursor: "pointer",
              marginLeft: "10px",
            }}
          />
          <EditOutlined
            style={{
              cursor: "pointer",
              marginLeft: "10px",
            }}
            onClick={() => {
              setEditItem(record);
              setPopModal(true);
            }}
          />
        </div>
      ),
    },
  ];

  const handleSubmit = async (value) => {
    if (editItem ===null) {
      try {
        dispatch({
          type: "SHOW_LOADING",
        });
        const res = await axios.post("/api/items/additem", value);
        console.log(res);
        message.success("Item Added Successfully");
        getallitems();
        setPopModal(false);
        dispatch({
          type: "HIDE_LOADING",
        });
      } catch (error) {
        console.error(error);
        message.error("Something Went Wrong");
      }
    } else {
      try {
        dispatch({
          type: "SHOW_LOADING",
        });
        const res = await axios.put("/api/items/edititem", {...value,itemId:editItem._id});
        console.log(res);
        message.success("Item Updated Successfully");
        getallitems();
        setPopModal(false);
        dispatch({
          type: "HIDE_LOADING",
        });
      } catch (error) {
        console.error(error);
        message.error("Something Went Wrong");
      }
    }
  };

  return (
    <DefaultLayout>
      <div className="d-flex justify-content-between">
        <h3>Items List</h3>
        <Button onClick={() => setPopModal(true)}>ADD ITEM</Button>
      </div>
      <Table columns={columns} dataSource={itemsData} bordered />
      {popModal && (
        <Modal
          title={`${editItem !== null ? "Edit Item" : "Add New Item"}`}
          open={popModal}
          onCancel={() => {
            setPopModal(false);
            setEditItem(null);
          }}
          footer={false}>
          <Form
            layout="vertical"
            initialValues={editItem}
            onFinish={handleSubmit}>
            <Form.Item name="name" label="Name">
              <Input />
            </Form.Item>
            <Form.Item name="price" label="Price">
              <Input />
            </Form.Item>
            <Form.Item name="image" label="Image URL">
              <Input />
            </Form.Item>
            <Form.Item name="category" label="Category">
              <Select>
                <Select.Option value="drinks">Drinks</Select.Option>
                <Select.Option value="rice">Rice</Select.Option>
                <Select.Option value="noodles">Noodles</Select.Option>
              </Select>
            </Form.Item>

            <div className="d-flex justify-content-end">
              <Button type="primary" danger htmlType="submit">
                Save
              </Button>
            </div>
          </Form>
        </Modal>
      )}
    </DefaultLayout>
  );
};

export default ItemPage;
