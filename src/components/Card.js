import React from 'react'
import PropsTypes from 'prop-types'
import { Card } from 'react-bootstrap'

function CardPortaflio({title, imgUrl, description, url}) {
  return (
    <div className="card text-center animate__animated animate__fadeInUp">
        <div className="over-flow">
        <img src={imgUrl} alt="Project" className="card-img-top"/>
        </div>
      <div className="card-body">
        <h4 className="card-title h5">{title}</h4>
        <p className="card-text">{description}</p>
        <a
          className="buttom-primary "
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          Go to this website
        </a>
      </div>
    </div>
  )
}

Card.propsTypes = {
    title: PropsTypes.string.isRequired,
    url: PropsTypes.string,
    imgUrl: PropsTypes.string
}

export default CardPortaflio
