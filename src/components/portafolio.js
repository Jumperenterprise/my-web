import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'

class Portafolio extends React.Component {
  render() {
    return (
      <Container className="mt-5 mb-5" id="portafolio">
        <Row>
          <Col className="text-center">
            <p className="fs-2 fw-bold">Portafolio</p>
            <p>Here you can see some of my projects</p>
          </Col>
        </Row>
        <Row className="">
          <Col xs={12} lg={4}>
            <Card className="shadow mb-5 bg-body rounded">
              <Card.Img variant="top" src={card[0].img} />
              <Card.Body>
                <Card.Title>{card[0].name}</Card.Title>
                <Card.Text>{card[0].description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={4}>
            <Card className="shadow mb-5 bg-body rounded">
              <Card.Img variant="top" src={card[1].img} />
              <Card.Body>
                <Card.Title>{card[1].name}</Card.Title>
                <Card.Text>
                  {card[1].description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={4}>
            <Card className="shadow mb-5 bg-body rounded">
              <Card.Img variant="top" src={card[2].img} />
              <Card.Body>
                <Card.Title>{card[2].name}</Card.Title>
                <Card.Text>
                    {card[2].description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} lg={4}>
            <Card className="shadow mb-5 bg-body rounded">
              <Card.Img variant="top" src={card[3].img} />
              <Card.Body>
                <Card.Title>{card[3].name}</Card.Title>
                <Card.Text>
                  {card[3].description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={4}>
            <Card className="shadow mb-5 bg-body rounded">
              <Card.Img variant="top" src={card[4].img} />
              <Card.Body>
                <Card.Title>{card[4].name}</Card.Title>
                <Card.Text>
                {card[4].description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={4}>
            <Card className="shadow mb-5 bg-body rounded">
              <Card.Img variant="top" src={card[5].img} />
              <Card.Body>
                <Card.Title>{card[5].name}</Card.Title>
                <Card.Text>
                {card[5].description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

const cardImages = [
  '/img/CardImg-1.png',
  'https://i.ibb.co/MpM92Yx/Captura-de-pantalla-de-2021-08-18-17-13-14.png',
  'https://i.ibb.co/BVBwwSs/E-market.png',
  'https://i.ibb.co/ByvT3Xy/Captura-de-pantalla-de-2021-06-22-19-17-11.png',
  'https://i.ibb.co/SvBBMkH/Captura-de-pantalla-de-2021-08-18-17-08-45.png',
  'https://i.ibb.co/kmhqTCC/Captura-de-pantalla-de-2021-08-18-17-11-31.png',
]

const card = [
  {
    name: 'Landing Lego Page',
    description: `Cette Lading page a été créée avec HTML, CSS et Javascript. Il comporte des animations CSS et une modal créée avec JS pour afficher un carousel.`,
    img: '/img/CardImg-1.png',
  },
  {
    name: 'Fédération de Parkour Costa Rica',
    description: `Une page créée avec HTML, CSS et Javascript. Utilisation de Materealize comme Framework de conception et de Firebase pour connecter les formulaires.`,
    img: 'https://i.ibb.co/MpM92Yx/Captura-de-pantalla-de-2021-08-18-17-13-14.png'
  },
  {
    name: 'E-Commerce',
    description: `E-commerce créé avec Angular et Angular Material, en utilisant des composants réactifs, connectés à une API en utilisant les meilleures pratiques.`,
    img: 'https://i.ibb.co/BVBwwSs/E-market.png'
  },
  {
    name: 'Blog',
    description: `Ce blog est un exemple de mise en page CSS, utilisant Materialize. Utiliser les meilleures pratiques pour passer de Figma à une page web.`,
    img: 'https://i.ibb.co/ByvT3Xy/Captura-de-pantalla-de-2021-06-22-19-17-11.png'
  },
  {
    name: 'Catches Bunnys',
    description: `Il s'agit d'un jeu créé avec HTML, CSS et Javascript. Vous pouvez interagir pour attraper les lapins, il y a un compteur pour savoir si vous les avez attrapés.`,
    img: 'https://i.ibb.co/SvBBMkH/Captura-de-pantalla-de-2021-08-18-17-08-45.png'
  },
  {
    name: 'Simon Dit',
    description: `Un jeu dont la logique est créée en Javascript. Le jeu consiste à suivre les lumières selon leur ordre et comporte plusieurs niveaux de difficulté.`,
    img: 'https://i.ibb.co/kmhqTCC/Captura-de-pantalla-de-2021-08-18-17-11-31.png'
  },
]

export default Portafolio
