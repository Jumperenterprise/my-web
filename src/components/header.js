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
              />
              </Transition>
            </Col>
            <Col className="blur-effect animate__animated animate__fadeInRight">
              <h2 className="text--property">Bonjour!</h2>
              <h1 className="text__h1--property title">Je suis Andrew Alfaro</h1>
              <h3 className="text__h3--property">DÉVELOPPEUR FRONT-END</h3>
              <a className="buttom-primary" href="#portafolio">Mes projets !</a>
            </Col>
            <Row>
            <Col className="container__icon">
             <a href="#about"><img className="down-icon" alt="" src={down}/></a>
            </Col>
          </Row>
          </Row>
        </Container>
      </Container>
    )
  }
}

const profileImg = '/img/header-img.png'
const down = '/img/icons/download.gif'

export default Header
