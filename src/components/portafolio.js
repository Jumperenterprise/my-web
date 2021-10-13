import React from 'react'
import CardPortaflio from './Card'
import {Container, Row, Col} from 'react-bootstrap'

const cards = [
  {
    id: 1,
    name: 'Rick and Morty',
    description: `Il s'agit d'un projet créé avec ReactJS. Utilisation de l'API Rick and Morty où vous pouvez voir les informations sur le personnage.`,
    img: 'https://i.ibb.co/r2hFDxk/Captura-de-pantalla-de-2021-10-13-15-56-08.png',
    url: 'https://react-rick-and-morty-app.herokuapp.com/',
  },
  {
    id: 2,
    name: 'Crypto-Web',
    description: `Créé avec React et connecté à une API, où vous pouvez rechercher votre crypto-monnaie préférée, voir également sa valeur sur le marché.`,
    img: 'https://i.ibb.co/YL06PQd/Captura-de-pantalla-de-2021-10-13-16-12-43.png',
    url: 'https://crypto-coin-project.herokuapp.com',
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
    name: 'Catches Bunnys',
    description: `Il s'agit d'un jeu créé avec HTML, CSS et Javascript. Vous pouvez interagir pour attraper les lapins, il y a un compteur pour savoir si vous les avez attrapés.`,
    img: 'https://i.ibb.co/SvBBMkH/Captura-de-pantalla-de-2021-08-18-17-08-45.png',
    url: 'https://jumperenterprise.github.io/catches-bunnys/',
  },
  {
    id: 5,
    name: 'Simon Dit',
    description: `Un jeu dont la logique est créée en Javascript. Le jeu consiste à suivre les lumières selon leur ordre et comporte plusieurs niveaux de difficulté.`,
    img: 'https://i.ibb.co/kmhqTCC/Captura-de-pantalla-de-2021-08-18-17-11-31.png',
    url: 'https://jumperenterprise.github.io/simon-dice-game/',
  },
  {
    id: 6,
    name: 'Task-Manager',
    description: `Une application ReactJs où vous pouvez ajouter et marquer vos tâches terminées. Utiliser les crochets React et les stocker dans le LocalStorage.`,
    img: 'https://i.ibb.co/F0mvnmD/Captura-de-pantalla-de-2021-10-13-17-42-30.png',
    url: 'https://task-manger-js.herokuapp.com/',
  },
  {
    id: 7,
    name: 'Landing Lego Page',
    description: `Cette Lading page a été créée avec HTML, CSS et Javascript. Il comporte des animations CSS et une modal créée avec JS pour afficher un carousel.`,
    img: '/img/CardImg-1.png',
    url: 'https://jumperenterprise.github.io/lego-landing-page/',
  },
  {
    id: 8,
    name: 'Fédération de Parkour Costa Rica',
    description: `Une page créée avec HTML, CSS et Javascript. Utilisation de Materealize et de Firebase pour connecter les formulaires.`,
    img: 'https://i.ibb.co/MpM92Yx/Captura-de-pantalla-de-2021-08-18-17-13-14.png',
    url: 'https://jumperenterprise.github.io/fed-parkourcr/',
  },
  {
    id: 9,
    name: 'Blog',
    description: `Ce blog est un exemple de mise en page CSS, utilisant Materialize. Utiliser les meilleures pratiques pour passer de Figma à une page web.`,
    img: 'https://i.ibb.co/ByvT3Xy/Captura-de-pantalla-de-2021-06-22-19-17-11.png',
    url: 'https://jumperenterprise.github.io/blog-jumper/',
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
