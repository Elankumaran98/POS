import React from 'react'
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
   const handleSubmit = (value) => {
     console.log(value);
   };
  return (
    <>
      <div className="register">
        <h2>POS</h2>
        <Form layout="vertical" onFinish={handleSubmit}>
          <h3>Login Page</h3>
          <Form.Item name="userId" label="User ID">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input type="password" />
          </Form.Item>

          <div className="d-flex justify-content-end">
            <p>
             Not A User Please
              <Link to="/register" className="link">
                Register Here
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
}

export default Login