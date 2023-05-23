import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    Input,
    Upload,
    Space,
    Select
  } from 'antd'
  import { PlusOutlined } from '@ant-design/icons'
  import { Link } from 'react-router-dom'
  import './index.scss'
  
  const { Option } = Select
  
  const Publish = () => {
    return (
      <div className="publish">
        <Card
          title={
            <Breadcrumb separator=">">
              <Breadcrumb.Item>
                <Link to="/home">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Publish</Breadcrumb.Item>
            </Breadcrumb>
          }
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ type: 1 }}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: 'Please input article title' }]}
            >
              <Input placeholder="Please input article title" style={{ width: 400 }} />
            </Form.Item>
            <Form.Item
              label="Channel"
              name="channel_id"
              rules={[{ required: true, message: 'Please select channel' }]}
            >
              <Select placeholder="Please select channel" style={{ width: 400 }}>
                <Option value={0}>recommand</Option>
              </Select>
            </Form.Item>
  
            <Form.Item label="封面">
              <Form.Item name="type">
                <Radio.Group>
                  <Radio value={1}>one picture</Radio>
                  <Radio value={3}>three pictures</Radio>
                  <Radio value={0}>no picture</Radio>
                </Radio.Group>
              </Form.Item>
              <Upload
                name="image"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList
              >
                <div style={{ marginTop: 8 }}>
                  <PlusOutlined />
                </div>
              </Upload>
            </Form.Item>
            <Form.Item
              label="Content"
              name="content"
              rules={[{ required: true, message: 'Please input article content' }]}
            ></Form.Item>
  
            <Form.Item wrapperCol={{ offset: 4 }}>
              <Space>
                <Button size="large" type="primary" htmlType="submit">
                  Publish
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
  
  export default Publish
