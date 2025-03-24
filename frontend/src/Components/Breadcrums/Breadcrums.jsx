import React from 'react'
import './Breadcrums.css'
import arrorw_icon from '../Assets/breadcrum_arrow.png'

export const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrorw_icon} alt="" /> SHOP{" "}
      <img src={arrorw_icon} alt="" /> {product.category}{" "}
      <img src={arrorw_icon} alt="" /> {product.name}
    </div>
  );
}
