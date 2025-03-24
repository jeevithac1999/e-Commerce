import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          E-commerce is the activity of electronically buying or selling
          products on online services or over the Internet. E-commerce draws on
          technologies such as mobile commerce, electronic funds transfer,
          supply chain management, Internet marketing, online transaction
          processing, electronic data interchange , inventory management
          systems, and automated data collection systems. E-commerce is the
          largest sector of the electronics industry and is in turn driven by
          the technological advances of the semiconductor industry.
        </p>
        <p>
          E-commerce typically uses the web for at least a part of a
          transaction's life cycle although it may also use other technologies
          such as e-mail</p>
      </div>
    </div>
  );
}
