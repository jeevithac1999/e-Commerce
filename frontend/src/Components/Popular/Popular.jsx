import React, {useState} from 'react'
import './Popular.css'
import { Item } from '../Item/Item'
import { useEffect } from 'react'

export const Popular = () => {

  const [popularProducts,setPopularProducts] = useState([])

  useEffect(()=>{
    fetch("https://e-commerce-backend-nneb.onrender.com/popularinsarees")
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data))
  },[])

  return (
    <div className="popular">
      <h1>POPULAR IN SAREES</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item,i)=>{
          return <Item key={i} id={item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
        })}
      </div>
    </div>
  )
}
