import React from "react";
import Container from "../../Container/Container/Container";
import AccordionGroup from "../AccordionGroup/AccordionGroup";
import styles from "./FAQSection.module.css";

const Text = {
  btnText: "Solutions For The Doubts",
  h2Text: "Frequently Asked Questions",
  pContent:
    "Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.",
};
const faqItems = [
  {
    question: "What are the school hours at Little Learners Academy?",
    answer:
      "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    question: "Is there a uniform policy for students?",
    answer:
      "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    question: "What extracurricular activities are available for students?",
    answer:
      "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    question: "What extracurricular activities are available for students?",
    answer:
      "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    question: "How do you handle food allergies and dietary restrictions?",
    answer:
      -"Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    question:
      "What is the teacher-to-student ratio at Little Learners Academy?",
    answer:
      "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    question: "How do you handle discipline and behavior management?",
    answer:
      "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
];

function FAQSection() {
  return (
    <div className={styles.FaqSectionMobile}>
      <Container content={Text}>
        <section className={styles.FAQSection}>
          <AccordionGroup items={faqItems} />
        </section>
      </Container>
    </div>
  );
}

export default FAQSection;
