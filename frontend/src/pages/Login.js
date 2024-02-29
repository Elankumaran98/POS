import { Button, Form, Input, message } from "antd";
import FormItem from "antd/lib/form/FormItem";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const BACKEND_URL = "http://localhost:8080/api/users/login"; // Replace with your actual backend URL

  const handlerSubmit = async (value) => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      const res = await axios.post(BACKEND_URL, value); // Use the correct URL
      dispatch({
        type: "HIDE_LOADING",
      });
      message.success("User Login Successfully!");
      localStorage.setItem("auth", JSON.stringify(res.data));
      navigate("/");
    } catch (error) {
      dispatch({
        type: "HIDE_LOADING",
      });
      message.error("Error!");
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      localStorage.getItem("auth");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="register">
      <h2>POS SYSTEM</h2>
      <div className="form-group">
        <Form layout="vertical" onFinish={handlerSubmit}>
          <h3>Login</h3>
          <FormItem name="Email" label="Email Address">
            <Input placeholder="Enter Email Address" />
          </FormItem>
          <FormItem name="password" label="Password">
            <Input type="password" placeholder="Enter Password" />
          </FormItem>
          <div className="d-flex justify-content-end">
            <p>
              Not A User Please
              <Link to="/register" className="link">
                Register Here
              </Link>
            </p>
            <Button type="primary" danger htmlType="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
