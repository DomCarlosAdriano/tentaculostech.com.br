import Hero from '../Hero'
import Header from '../Header'
import Card from '../Card'
import ContratoProcesso from '../ContratoProcesso'
import CardsPlanos from '../CardsPlanos'
import Formulario from '../Formulario'
import FAQSection from '../Faq'
import VSLSection from '../VslSection'
import NewsSection from '../NewSection'
import TestimonialsSection from '../TestimonialsSection'
import ContactSection from '../ContactSection'
import ProjectsSection from '../ProjectsSection'
import Footer from '../Footer'


function PaginaIndex() {
  return (
    <div className="mx-auto">
     <Header />
    <Hero /> 
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

export default PaginaIndex
