import './App.css';

import Navigation from './components/navbar'
import Header from './components/header'
import About from './components/about'
import Services from './components/services'
import Portafolio from './components/portafolio'
import Footer from './components/footer'

function App() {
  return (
    <>
    <Navigation />
    <Header />
    <About/>
    <Services />
    <Portafolio />
    <Footer />
    </>
  ); 
}

export default App;
