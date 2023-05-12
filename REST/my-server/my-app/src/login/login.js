import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Login = () => {

    const navigate = useNavigate()

    const [form] = Form.useForm();

    const onFinish = async (values) => {
        // console.log(values)
        if (values.username === "admin" && values.password === "123") {
            if (values.remember) {
                //执行login，获取token
                const result = await logIn(values)
                localStorage.setItem("token", result.token)
                localStorage.setItem("nickname", result.nickname)

            } else {
                logIn(values)
            }

            goStudentList()

        } else {
            throw new Error("username or password incorrect")
        }

    };

    const goStudentList = () => {
        navigate("/studentList", { replace: true })
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const logIn = async (values) => {
        const result = await axios.post('http://localhost:9000/login', {
            username: values.username,
            password: values.password
        })
        if (result.status === 200) {
            const { nickname, token } = result.data.data;
            return {
                "token": token,
                "nickname": nickname
            }
        } else {
            return { token: "", nickname: "" }
        }
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form 
            name="basic"
            wrapperCol={{
                span: 16,
            }}
            style={{
                width:600,
                maxWidth: 600
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </div>
    );
};

export default Login;

