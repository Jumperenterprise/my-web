import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

class About extends React.Component {
  render() {
    return (
      <Container id="about" className="p-1 mt-5">
        <Container className="mt-5 mb-5 shadow p-3 mb-5 bg-body rounded">
          <Row className="text-center">
            <Col>
            <p className="fs-2 fw-bold border-bottom border-primary">A propos de moi</p>
            </Col>            
          </Row>
          <Row>
            <Col className="p-5">
              <p className="fs-3">Qui suis-je ?</p>
              <p>
                {' '}
                Passionné par la programmation WEB, je suis expert en
                JavaScript. Je développe des projets avec le Framework Angular
                et Stack MERN et avec Ionic et React Native pour les
                applications mobiles. Ambitieux et créatif, je cherche
                constamment a m'améliorer en apprenant de nouveaux langages de
                programmation. J'ai comme projet professionnel de devenir
                FullStack.
              </p>
              <a href={link} className="buttom-primary hvr-grow">
                Hire Me
              </a>
            </Col>
            <Col>
              <p className="text-center">My Skills</p>
              <Container>
                <Row>
                  <Col xs={4}>
                    <div className="card bg-secondary p-1">
                      <Image className="skill-img hvr-pop" src={iconsSkills[0]} />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="card bg-secondary p-1">
                      <Image className="skill-img hvr-pop" src={iconsSkills[1]} />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="card bg-secondary p-1">
                      <Image className="skill-img hvr-pop" src={iconsSkills[2]} />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>
                    <div className="card bg-secondary p-1">
                      <Image className="skill-img hvr-pop" src={iconsSkills[3]} />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="card bg-secondary p-1">
                      <Image className="skill-img hvr-pop" src={iconsSkills[4]} />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="card bg-secondary p-1">
                      <Image className="skill-img hvr-pop" src={iconsSkills[5]} />
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

const iconsSkills = [
  'img/icons/html.png',
  'img/icons/css3.png',
  'img/icons/javascript.png',
  'img/icons/npm.png',
  'img/icons/nodejs.png',
  'img/icons/react-native.png',
  'img/icons/angularjs.png',
]

const link =
  'https://drive.google.com/uc?id=1cEHssv3S3bIiQBQm5Tz2O5TuRviVmLeo&export=download'

export default About
