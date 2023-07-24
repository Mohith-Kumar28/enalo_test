import React, { useEffect, useState } from 'react';
import { Pagination, Space, Table, Tag } from 'antd';
import axios from 'axios';
const columns = [
  {
    title: 'business_name',
    dataIndex: 'business_name',
    key: 'business_name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  // {
  //   title: 'Address',
  //   dataIndex: 'address',
  //   key: 'address',
  // },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const HomeComp = () =>{ 
  const [dataTable,setDataTable]=useState();
  const [currentPage,setCurrentPage]=useState(0);
  const [size,setSize]=useState(0);
  const [limit,setLimit]=useState(10);
  const [offset,setOffset]=useState(0);




  useEffect(() => {
    let url = `https://stagingapi.enalo.in/inventory/get-items/?limit=${limit}&offset=${offset}`
    console.log(url)
    const asyncFun=async()=>{

     const {data}=await axios.get(url)
    //  console.log(data)
    //  console.log(currentPage)
     setDataTable(data.results)
     setSize(data.count)
   
     
    }
    asyncFun()
  }, [currentPage,limit,offset])

  const handleChange=(page)=>{
 
    console.log('passedpage',page)
    setCurrentPage(page)
    setOffset((page*limit)-limit)
    console.log('currpag',page)
    console.log('limit',limit)
    console.log((page*limit))
  }

return(<>
<Table columns={columns} dataSource={dataTable} />
<Pagination onChange={(page)=>{handleChange(page)}} defaultCurrent={1} total={size} />
</>
)}
export default HomeComp;
