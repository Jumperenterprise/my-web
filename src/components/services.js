import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faMobile,
  faPencilRuler,
  faCode,
  faThumbsUp,
  faTachometerAlt,
  faCrosshairs,
} from '@fortawesome/free-solid-svg-icons'

class Services extends React.Component {
  render() {
    return (
      <Container id="services" className="mt-5 mb-5">
        <Row className="text-center">
          <p className="fs-2 fw-bold">Services</p>
        </Row>
        <Row>
          <p className="text-center">Services i offer to my clients</p>
        </Row>

        <Row className="mx-auto">
          <Col sm={4} className="d-flex justify-content-center">
            <div className="sevices-card shadow-lg p-3 mb-5 bg-body rounded">
              <FontAwesomeIcon icon={faMobile} />
              <p>Fully Responsive</p>
              <p>
                Votre site affichera la propriété sur n'importe quel divice, y
                compris les ordinateurs de bureau, les tablettes et les
                téléphones mobiles.
              </p>
            </div>
          </Col>

          <Col sm={4} className="d-flex justify-content-center">
            <div className="sevices-card shadow-lg p-3 mb-5 bg-body rounded">
              <FontAwesomeIcon icon={faPencilRuler} />
              <p>Creativity Design</p>
              <p>
                Une conception web attrayante et de qualité vous permet de
                garder vos clients potentiels sur votre site, qui est le visage
                numérique de votre entreprise.
              </p>
            </div>
          </Col>

          <Col sm={4} className="d-flex justify-content-center">
            <div className="sevices-card shadow-lg p-3 mb-5 bg-body rounded">
              <FontAwesomeIcon icon={faCode} />
              <p>Development</p>
              <p>
                Je connais l'importance de la conception de sites web et je peux
                vous aider à créer un site web que vous aimerez.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mx-auto">
          <Col sm={4} className="d-flex justify-content-center">
            <div className="sevices-card shadow-lg p-3 mb-5 bg-body rounded">
              <FontAwesomeIcon icon={faThumbsUp} />
              <p>Social Media Integration</p>
              <p>
                Il existe de nombreuses plateformes sociales et vous devez
                promouvoir votre présence sur ces dernières sur votre site web.
              </p>
            </div>
          </Col>

          <Col sm={4} className="d-flex justify-content-center">
            <div className="sevices-card shadow-lg p-3 mb-5 bg-body rounded">
              <FontAwesomeIcon icon={faTachometerAlt} />
              <p>Performance</p>
              <p>
                La fidélisation des utilisateurs est essentielle pour améliorer
                les conversions. Les sites les plus performants engagent et
                retiennent les utilisateurs.
              </p>
            </div>
          </Col>

          <Col sm={4} className="d-flex justify-content-center">
            <div className="sevices-card shadow-lg p-3 mb-5 bg-body rounded">
              <FontAwesomeIcon icon={faCrosshairs} />
              <p>SEO</p>
              <p>
                J'optimiserai votre site grâce à une stratégie intelligente
                d'optimisation des moteurs de recherche afin de générer des
                prospects.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Services
