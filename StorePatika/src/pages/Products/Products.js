import { SafeAreaView, Text,FlatList } from 'react-native'
import React, { useState, useEffect } from "react";
import config from '../../../config';
import axios from "axios";

const Products = () => {
  const [data,setData]=useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData =async ()=>{
       const {data:productData}=await axios.get(config.API_URL)
       setData(productData)
    }

  const renderProduct=({item})=><Text>{item.title}</Text>
  return (
    <SafeAreaView>
        <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  )
}

export default Products