import { Button, Checkbox, Form, Input } from 'antd';
import { useStore } from '@/store'

function Login() {

    const { loginStore } = useStore()

    const onFinish = (values) => {
        console.log('Success:', values);

        try {
            loginStore.getToken({
                mobile: values.username,
                code: values.password
            })
        } catch (e) {
            message.error(e.response?.data?.message || '登录失败')
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