import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
    const handleSubmit = (value) => {
      console.log(value)
  };
  return (
    <>
      <div className="register">
        <h2>POS</h2>
        <Form layout="vertical" onFinish={handleSubmit}>
          <h3>Pegister Page</h3>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="userId" label="User ID">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input type="password" />
          </Form.Item>

          <div className="d-flex justify-content-end">
            <p>
              Alredy Register Please
              <Link to="/login" className="link">
                Login Here
              </Link>
            </p>
            <Button type="primary" danger htmlType="submit">
              Register
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;
