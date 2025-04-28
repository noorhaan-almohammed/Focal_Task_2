import hat from '/assets/images/icons/hat.svg'
import flag from '/assets/images/icons/flag.svg'
import crown from '/assets/images/icons/crown.svg'
import earth from '/assets/images/icons/earth.svg'
import friends from '/assets/images/icons/frinds.svg'
import faceMask from '/assets/images/icons/faceMask.svg'

import Card from './Card/Card'
import styles from './benefitsCards.module.css'
import Container from '../Container/Container/Container'

const cards = [
  { title: "Holistic Learning Approach", content: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.", icon: hat },
  { title: "Experienced Educators", content: "Our passionate and qualified teachers create a supportive and stimulating learning environment.", icon: crown },
  { title: "Nurturing Environment", content: "We prioritize safety and provide a warm and caring atmosphere for every child.", icon: faceMask },
  { title: "Play-Based Learning", content: "We believe in the power of play to foster creativity, problem-solving skills, and imagination." , icon: flag },
  { title: "Individualized Attention", content: "Our small class sizes enable personalized attention, catering to each child's unique needs.", icon: earth },
  { title: "Parent Involvement", content: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.", icon: friends },
];

const Text = {
  btnText : "Children Deserve Bright Future",
  h2Text : "Our Benefits",
  pContent : "With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
};

function BenefitsCards() {
  return (
    <Container content={Text}>
      <section className={styles.cardsContainer}>
        {
            cards.map((card,index) => (
              <Card key={index} title={card.title} content={card.content} icon={card.icon} />
            ))
        }
      </section>
    </Container>
  )
}

export default BenefitsCards
