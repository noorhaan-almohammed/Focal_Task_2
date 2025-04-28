
import './App.css'
import Hero from './components/Hero/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import SliderSection from './components/SliderSection/SliderSection'
import BenefitsCards from './components/BenefitsCards/BenefitsCards'
import FAQSection from './components/FAQSection/FAQSection/FAQSection'
import NavigateSection from './components/NavigateSection/NavigateSection'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <BenefitsCards/>
      <SliderSection />
      <FAQSection />
      <NavigateSection />
      <Footer />
    </>
  )
}

export default App
