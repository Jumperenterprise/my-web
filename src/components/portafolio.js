import React from 'react'
import CardPortaflio from './Card'
import {Container, Row, Col} from 'react-bootstrap'

const cards = [
  {
    id: 1,
    name: 'Landing Lego Page',
    description: `Cette Lading page a été créée avec HTML, CSS et Javascript. Il comporte des animations CSS et une modal créée avec JS pour afficher un carousel.`,
    img: '/img/CardImg-1.png',
    url: 'https://jumperenterprise.github.io/lego-landing-page/',
  },
  {
    id: 2,
    name: 'Fédération de Parkour Costa Rica',
    description: `Une page créée avec HTML, CSS et Javascript. Utilisation de Materealize comme Framework de conception et de Firebase pour connecter les formulaires.`,
    img: 'https://i.ibb.co/MpM92Yx/Captura-de-pantalla-de-2021-08-18-17-13-14.png',
    url: 'https://jumperenterprise.github.io/fed-parkourcr/',
  },
  {
    id: 3,
    name: 'E-Commerce',
    description: `E-commerce créé avec Angular et Angular Material, en utilisant des composants réactifs, connectés à une API en utilisant les meilleures pratiques.`,
    img: 'https://i.ibb.co/XX9mLBH/Captura-de-pantalla-de-2021-09-29-18-28-00.png',
    url: 'https://base-store-cr.web.app',
  },
  {
    id: 4,
    name: 'Blog',
    description: `Ce blog est un exemple de mise en page CSS, utilisant Materialize. Utiliser les meilleures pratiques pour passer de Figma à une page web.`,
    img: 'https://i.ibb.co/ByvT3Xy/Captura-de-pantalla-de-2021-06-22-19-17-11.png',
    url: 'https://jumperenterprise.github.io/blog-jumper/',
  },
  {
    id: 5,
    name: 'Catches Bunnys',
    description: `Il s'agit d'un jeu créé avec HTML, CSS et Javascript. Vous pouvez interagir pour attraper les lapins, il y a un compteur pour savoir si vous les avez attrapés.`,
    img: 'https://i.ibb.co/SvBBMkH/Captura-de-pantalla-de-2021-08-18-17-08-45.png',
    url: 'https://jumperenterprise.github.io/catches-bunnys/',
  },
  {
    id: 6,
    name: 'Simon Dit',
    description: `Un jeu dont la logique est créée en Javascript. Le jeu consiste à suivre les lumières selon leur ordre et comporte plusieurs niveaux de difficulté.`,
    img: 'https://i.ibb.co/kmhqTCC/Captura-de-pantalla-de-2021-08-18-17-11-31.png',
    url: 'https://jumperenterprise.github.io/simon-dice-game/',
  },
]

class Portafolio extends React.Component {
  render() {
    return (
      <Container className="mt-5 mb-5" id="portafolio">
        <Row>
          <Col className="text-center mt-4">
            <p className="fs-2 fw-bold mt-5">Portafolio</p>
            <p>Vous trouverez ici mes projets</p>
          </Col>
        </Row>
        <Row>
          {cards.map((card) => (
            <div className="col-lg-4 col-12" key={card.id}>
              <CardPortaflio
                title={card.name}
                imgUrl={card.img}
                description={card.description}
                url={card.url}
              />
            </div>
          ))}
        </Row>
      </Container>
    )
  }
}

export default Portafolio
