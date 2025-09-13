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
import TestimonialsSection from './Components/TestimonialsSection'
import ContactSection from './Components/ContactSection'
import ProjectsSection from './Components/ProjectsSection'
import Footer from './Components/Footer'


function App() {
  return (
    <div className="mx-auto">
    {/* <Header />
    <Hero /> */}
    <NewsSection/>
    <VSLSection/>
    <Card/>
    <TestimonialsSection/>
    <ProjectsSection/>
    <ContratoProcesso/>
    <CardsPlanos/>
    <Formulario/>
    <FAQSection/>
    <ContactSection/>
    <Footer/>

     
   </div>
  )
}

export default App
