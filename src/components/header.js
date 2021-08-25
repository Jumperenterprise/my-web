import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

class Header extends React.Component {
  render() {
    return (
      <Container className="bg-image" fluid>
        <Container>
          <Row className="d-flex justify-content-center align-items-center vh-100">
            <Col className="text-center">
              <Image
                className="profile-img"
                src={profileImg}
                roundedCircle
              />
            </Col>
            <Col className="blur-effect">
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
