import { Link, useNavigate } from 'react-router-dom'
import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select } from 'antd'
import './index.scss'
import { Table, Tag, Space } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { http } from '@/utils'

const { Option } = Select
const { RangePicker } = DatePicker

const Article = () => {

    // channel列表：状态管理
    const [channelList, setChannelList] = useState([])

    // 文章列表：参数管理
    const [params, setParams] = useState({
        page: 1,
        per_page: 10
    })
    // 文章列表：状态管理
    const [articleList, setArticleList] = useState({
        list: [],
        count: 0
    })

    useEffect(() => {
        // fetch channel data from '/channels'
        const loadChannelList = async () => {
            const channelRes = await http.get('/channels')
            setChannelList(channelRes.data.channels)
        }
        loadChannelList()
    }, [])

    useEffect(() => {
        // fetch article data from '/mp/articles'
        const loadArticleList = async () => {
            const articleRes = await http.get('/mp/articles', { params })
            const { results, total_count } = articleRes.data
            setArticleList({
                list: results,
                count: total_count
            })
        }
        loadArticleList()
    }, [params])

    const pageChange = (page) => {
        console.log(params);
        setParams({
            ...params,
            page: page
        });
    }

    // delete article
    const delArticle = async (data) => {
        await http.delete(`/mp/articles/${data.id}`)
        // refresh article list
        setParams({
            ...params,
            page: 1
        })
    }

    // edit article
    const navigate = useNavigate()
    const redirectArticle = (data) => {
        navigate(`/publish?${data.id}`)
    }


    const onFinish = (values) => {
        console.log(values)
        // 用新的搜索条件更新params，重新发送get请求
        const _params = {}
        const { channel_id, date, status } = values
        if (status !== -1) {
            _params.status = status
        }
        if (date) {
            // format date
            _params.begin_pubdate = date[0].format('YY-MM-DD')
            _params.end_pubdate = date[1].format('YY-MM-DD')
        }
        if (channel_id) {
            _params.channel_id = channel_id
        }
        setParams({
            ...params,
            ..._params
        })
    }

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            width: 220
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: data => <Tag color="green">Approved</Tag>
        },
        {
            title: 'Public date',
            dataIndex: 'pubdate'
        },
        {
            title: 'Readers',
            dataIndex: 'read_count'
        },
        {
            title: 'Comments',
            dataIndex: 'comment_count'
        },
        {
            title: 'Likes',
            dataIndex: 'like_count'
        }, {
            title: 'Actions',
            render: data => {
                return (
                    <Space size="middle">
                        <Button
                            type="primary"
                            shape="circle"
                            icon={<EditOutlined />}
                            onClick={() => redirectArticle(data)}
                        />
                        <Button
                            type="primary"
                            danger
                            shape="circle"
                            icon={<DeleteOutlined />}
                            onClick={() => { delArticle(data) }}
                        />
                    </Space>
                )
            }
        }
    ]


    return (
        <div>
            <Card
                title={
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>
                            <Link to="/">Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Content</Breadcrumb.Item>
                    </Breadcrumb>
                }
                style={{ marginBottom: 20 }}
            >
                <Form
                    onFinish={onFinish}
                    initialValues={{ status: -1 }}
                >
                    <Form.Item label="状态" name="status">
                        <Radio.Group>
                            <Radio value={-1}>All</Radio>
                            <Radio value={0}>Draft</Radio>
                            <Radio value={1}>Waiting approval</Radio>
                            <Radio value={2}>Approved</Radio>
                            <Radio value={3}>Failed</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="channel" name="channel_id">
                        <Select
                            placeholder="Please select channel"
                            style={{ width: 120 }}
                        >
                            {channelList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}

                        </Select>
                    </Form.Item>

                    <Form.Item label="date" name="date">
                        <RangePicker></RangePicker>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ marginLeft: 80 }}>
                            Filter
                        </Button>
                    </Form.Item>
                </Form>

                <div>
                    <Card title={`Filter results: ${articleList.count} `}>
                        <Table
                            rowKey="id"
                            columns={columns}
                            dataSource={articleList.list}
                            pagination={
                                {
                                    pageSize: params.per_page,
                                    total: articleList.count,
                                    onChange: pageChange
                                }
                            }
                        />
                    </Card>
                </div>
            </Card>
        </div>
    )
}

export default Article