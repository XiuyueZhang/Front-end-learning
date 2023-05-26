import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import './index.scss'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef, useState } from 'react'
import { http } from '@/utils'

const { Option } = Select

const Publish = () => {

  const { channelStore } = useStore()
  const navigate = useNavigate()

  // store images list
  const [fileList, setFileList] = useState([]);

  // useRef - create a temporary storage to store images
  const cacheImageList = useRef()

  const onUploadChange = ({fileList}) => {
    const formatList = fileList.map(item => {
      if(item.response){
        return {
          url: item.response.data.url
        }
      }
      return item 
    })
    setFileList(formatList);
    // store the image list into temporary storage - useRef
    cacheImageList.current = formatList;
  };



  // change radio
  const [imageCount, setImageCount] = useState(1)
  const radioChange = (e) => {
    setImageCount(e.target.value)

    if (!articleId) {
      // get images from storage, save it to fileList for page render
      if (e.target.value === 1) {
        if (cacheImageList.current) {
          const image = cacheImageList.current[0]
          setFileList([image])
        }
      } else if (e.target.value === 3) {
        setFileList(cacheImageList.current)
      }
    }
  }

  // submit form
  const onFinish = async (value) => {
    const { channel_id, title, type, content } = value
    const data = {
      channel_id,
      title,
      type,
      content,
      cover: {
        type: type,
        images: fileList.map(item => item.url)
      }
    }
    if (articleId) {
      await http.put(`/mp/articles/${articleId}?draft=false`, data)
    } else {
      await http.post('/mp/articles?draft=false', data)
    }

    // redirect and message
    navigate('/article')
    message.success(`${articleId ? 'Update success' : 'Publish success'}`)

  }

  // edit content
  // get id from router
  const [params] = useSearchParams()
  const articleId = params.get('id')

  // 获取form的实例对象，调用实例方法setFieldValue回填表单
  const form = useRef(null)
  useEffect(() => {
    const getArticleContent = async () => {
      const res = await http.get(`/mp/articles/${articleId}`)
      const data = res.data

      // 处理数据格式：
      if (data.cover.images !== []) {
        const formatImageData = data.cover.images.map(item => {
          return {
            url: item
          }
        })
        setFileList(formatImageData)

        // 暂存图片列表里面也存一份images
        cacheImageList.current = formatImageData
      }
      // 回填form
      form.current.setFieldsValue({
        ...data,
        type: data.cover.type
      })

    }
    if (articleId) {
      getArticleContent()


    }
  }, [articleId])



  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="/home">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{articleId ? 'Edit' : 'Publish'}</Breadcrumb.Item>
          </Breadcrumb>
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 1, content: 'please input article content here' }}
          onFinish={onFinish}
          ref={form}
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
            {imageCount > 0 && (
              <Upload
                name="image"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList
                action={"http://geek.itheima.net/v1_0/upload"}
                fileList={fileList}
                onChange={onUploadChange}
                multiple={imageCount > 1}
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
                {articleId ? 'Update' : 'Publish'}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default observer(Publish)
