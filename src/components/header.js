import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import { Transition } from 'react-transition-group'

class Header extends React.Component {
  render() {
    return (
      <Container className="bg-image" fluid id="header">
        <Container>
          <Row className="d-flex justify-content-center align-items-center vh-100">
            <Col className="text-center">
              <Transition>
              <Image
                className="profile-img animate__animated animate__fadeInLeft"
                src={profileImg}
                roundedCircle
              />
              </Transition>
            </Col>
            <Col className="blur-effect animate__animated animate__fadeInRight">
              <h3 className="text-white">Bonjour!</h3>
              <h1 className="title">Je suis Andrew Alfaro</h1>
              <h4 className="text-white">DÉVELOPPEUR FRONT-END</h4>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

const profileImg = '/img/descargar.png'

export default Header
