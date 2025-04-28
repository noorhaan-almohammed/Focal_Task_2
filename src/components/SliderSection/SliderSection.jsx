import Slider from './Slider/Slider'
import Container from '../Container/Container/Container'
import styles from './SliderSection.module.css'
import profile_1 from '/assets/images/profiles/Profile_1.png'
import profile_2 from '/assets/images/profiles/Profile_2.png'
import profile_3 from '/assets/images/profiles/Profile_3.png'


const Text = {
  btnText : "Their Happy Words 🤗",
  h2Text : "Our Testimonials",
  pContent : "Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
};
const cards = [
  { id: 1, name: "Jennifer B", stars:5, description: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!", image: profile_3 },
  { id: 2, name: "David K", stars:1, description: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.", image: profile_2 },
  { id: 3, name: "Emily L", stars:4, description: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.", image: profile_1 },
  { id: 4, name: "Sarah M", stars:5, description: "Sarah is social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.", image: profile_2 },
  { id: 5, name: "John D", stars:3, description: "John Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.", image:profile_1  },
];


function SliderSection() {
  return (
    <Container content={Text}>
      <section className={styles.sliderSection}>
        <Slider cards={cards}/>
      </section>
    </Container>
  )
}

export default SliderSection
