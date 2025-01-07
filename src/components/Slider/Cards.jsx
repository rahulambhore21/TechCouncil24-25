import React from 'react'
import "./Cards.css"
import Button from '../Button'

function Cards({ description,council,img, title, onSeeMoreClick, onRegisterClick, onDownloadClick }) {
  return (
    <div className="item">
      <img src={img} alt={title} onClick={onSeeMoreClick} />
      <div className="introduce">
        <div className="title hero-heading">{council}</div>
        <div className="topic hero-heading">{title}</div>
        {/* <div className="des font-robert-regular">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.
        </div> */}
        <button className="seeMore" onClick={onSeeMoreClick}>SEE MORE</button>
      </div>
      <div className="detail">
        <div className="title hero-heading">{title}</div>
        <div className="des text-white font-bold text-lg text-left ml-4">
          {description}
        </div>
        {/* <div className="specifications">
          <div>
            <p>Used Time</p>
            <p>6 hours</p>
          </div>
          <div>
            <p>Charging port</p>
            <p>Type-C</p>
          </div>
          <div>
            <p>Compatible</p>
            <p>Android</p>
          </div>
          <div>
            <p>Bluetooth</p>
            <p>5.3</p>
          </div>
          <div>
            <p>Controlled</p>
            <p>Touch</p>
          </div>
        </div> */}
        <div className="checkout">
          <button onClick={onRegisterClick}>Registration</button>
          <button onClick={onDownloadClick}>Download PDF</button>
        </div>
      </div>
    </div>
  )
}

export default Cards