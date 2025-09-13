import './App.css'

import Hero from './Components/Hero'
import Header from './Components/Header'
import Card from './Components/Card'
import ContratoProcesso from './Components/ContratoProcesso'
import CardsPlanos from './Components/CardsPlanos'
import Formulario from './Components/Formulario'
import FAQSection from './Components/Faq'
import VSLSection from './Components/VslSection'
import NewsSection from './Components/NewSection'


function App() {
  return (
    <div className="mx-auto">
    {/* <Header />
    <Hero /> */}
    <NewsSection/>
    <VSLSection/>
    <Card/>
    <ContratoProcesso/>
    <CardsPlanos/>
    <Formulario/>
    <FAQSection/>

     
   </div>
  )
}

export default App
