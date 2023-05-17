import { Button, Checkbox, Form, Input, message } from 'antd';
import { useStore } from '@/store'
import { useNavigate } from 'react-router-dom'; 

function Login() {

    const { loginStore } = useStore()
    const navigate = useNavigate()

    const onFinish = async (values) => {
        console.log('Success:', values);

        try{
            await loginStore.getToken({
                mobile: values.username,
                code: values.password
            })
            // 跳转首页
            navigate('/')
            // 提示：登录成功
            message.success('Login successful')
        } catch(e){
            message.erro(e.response?.data?.message || "Login failed")
        }

        
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '100px' }}>
            <div className='login-container'>
                <h2 style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>Please log in</h2>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
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
                            }, {
                                len: 6,
                                message: 'password must at least 6 characters'
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
        </div>

    )
}

export default Login