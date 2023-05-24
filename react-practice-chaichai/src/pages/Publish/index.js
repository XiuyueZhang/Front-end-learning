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
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

const { Option } = Select

const Publish = () => {

  const { channelStore } = useStore()

  // 存放上传图片的列表
  const [fileList, setFileList] = useState([]);

  const onUploadChange = (result) => {
    console.log(result.fileList);
    setFileList(result.fileList);
  };

  const [imageCount, setImageCount] = useState(1)

  const radioChange = (e) => {
    console.log(e.target.value)
    setImageCount(e.target.value)
  }

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
          initialValues={{ type: 1, content: 'please input article content here' }}
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
              {channelStore.channelList.map(item => (
                <Option value={item.id}>{item.name}</Option>
              ))}

            </Select>
          </Form.Item>

          <Form.Item label="Cover">
            <Form.Item name="type">
              <Radio.Group onChange={radioChange}>
                <Radio value={1}>one picture</Radio>
                <Radio value={3}>three pictures</Radio>
                <Radio value={0}>no picture</Radio>
              </Radio.Group>
            </Form.Item>
            { imageCount > 0 && (
              <Upload
                name="image"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList
                action={"http://geek.itheima.net/v1_0/upload"}
                fileList={fileList}
                onChange={onUploadChange}
                multiple={imageCount>1}
                maxCount={imageCount}
              >
                <div style={{ marginTop: 8 }}>
                  <PlusOutlined />
                </div>
              </Upload>)}

          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: 'Please input article content' }]}
          >
            <ReactQuill
              theme='snow'
            />
          </Form.Item>

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

export default observer(Publish)
