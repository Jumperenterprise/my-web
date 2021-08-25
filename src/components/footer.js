import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

class Footer extends React.Component {
  render() {
    return (
      <Container className="bg-dark" fluid id="contact">
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center p-2">
            <Image className="social-img" src={logo} fluid />
            <p className="text-white">Prenez contact avec moi !</p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center p-2">
            <a
              href="https://www.linkedin.com/in/andrew-jumper/"
              target="_blank"
            >
              <Image className="img-fluid social-img" src={social[0]} />
            </a>
            <a href="https://github.com/Jumperenterprise" target="_blank">
              <Image className="img-fluid social-img" src={social[1]} />
            </a>
            <a href="mailto:andrew.jumper.ent@gmail.com" target="_blank">
              <Image className="img-fluid social-img" src={social[2]} />
            </a>
            <a
              href="https://www.instagram.com/jumper_enterprise/"
              target="_blank"
            >
              <Image className="img-fluid social-img" src={social[3]} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCApJwduAZ76eqhDKDcwsNNg"
              target="_blank"
            >
              <Image className="img-fluid social-img" src={social[4]} />
            </a>
          </Col>
        </Row>
        <Row>
          <p className="text-center text-white">
            Copyright © 2021, All Right Reserved Jumper Enterprise
          </p>
        </Row>
      </Container>
    )
  }
}

const logo = 'img/logo.png'

const social = [
  'img/linkedin.png',
  'img/github.png',
  'img/gmail.png',
  'img/instagram.png',
  'img/youtube.png',
]

export default Footer
