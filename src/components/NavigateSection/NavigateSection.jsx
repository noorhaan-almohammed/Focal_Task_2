import styles from './Navigate.module.css'
import Container from '../Container/Container/Container'
import Card from './Card/Card'

const Text = {
    btnText: "Explore More",
    h2Text: "Navigate through our Pages",
    pContent:
      "Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school.",
  };
const Items = [
    {title: "About Us" , content: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education."},
    {title: "Academics" , content: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development."},
    {title: "Student Life" , content: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable."},
    {title: "Admissions" , content: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces."},
]


function NavigateSection() {
  return (
      <Container content={Text}>
        <section className={styles.Section}>
          {
            Items.map((Item,index)=>(
                <Card key={index} Item={Item} />
            ))
          }  
        </section>
      </Container>
  )
}

export default NavigateSection
