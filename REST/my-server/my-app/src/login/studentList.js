import { Table } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {

    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        const getStudentList = async () => {
            try{
                const token = localStorage.getItem("token")
                const res = await axios.get('http://localhost:9000/students', { headers: { "Authorization": `Bearer ${token}` } })
                if (res.status === 200) {
                    // console.log(res.data.data)
                    setDataSource(res.data.data)
                } else {
                    console.error("error message")
                }
            } catch{
                throw new Error("token invalid")
            }

        }
        getStudentList()
    
    }, [])
      



    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} rowKey={(record)=> record.id}/>;
        </div>
    )

}


export default StudentList