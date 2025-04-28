import styles from "./Footer.module.css";
import email from "/assets/SocialIcon/email.svg";
import facebook from "/assets/SocialIcon/facebook.svg";
import linked_in from "/assets/SocialIcon/linked_in.svg";
import location from "/assets/SocialIcon/location.svg";
import phone from "/assets/SocialIcon/phone.svg";
import twitter from "/assets/SocialIcon/twitter.svg";
import logo from "/assets/images/logo.svg";
import title from "/assets/images/title.svg";

const footerContent = {
  prif: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
  contact: [
    { type: "email", value: "hello@littlelearners.com" },
    { type: "phone", value: "+91 91813 23 2309" },
    { type: "location", value: "Somewhere in the World" },
  ],
  homeList: ["Home", "Features", "Our Testimonials", "FAQ"],
  AboutList: [
    "About Us",
    "Our Mission",
    "Awards and Recognitions",
    "History",
    "Teachers",
  ],
  AcademicsList: ["Academics", "Special Features", "Gallery"],
  ContactList: ["Contact Us", "Information", "Map & Direction"],
  Terms : ["Terms of Service","Privacy Policy","Cookie Policy"]
};
function getIcon(type) {
    switch (type) {
      case "email":
        return email;
      case "phone":
        return phone;
      case "location":
        return location;
      default:
        return ""; 
    }
  }
  
function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
        <div className={styles.col_1}>
          <div className={styles.prif}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
              <img src={title} alt="Little Learner" />
            </div>
            <span>{footerContent.prif}</span>
          </div>
          <div className={styles.contact}>
            {footerContent.contact.map((contact, index) => (
              <div key={index} className={styles.contactItem}>
                <img src={getIcon(contact.type)} alt={contact.type} />
                <span>{contact.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.col_2}>
          <ul className={styles.sub_col}>
              {footerContent.homeList.map((item, index) => (
                <li key={index}><a href="#">{item}</a></li>
              ))}
            </ul>
          

          <ul className={styles.sub_col}>
            
              {footerContent.AboutList.map((item, index) => (
                <li key={index}><a href="#">{item}</a></li>
              ))}
            </ul>
        

          
            <ul className={styles.sub_col}>
              {footerContent.AcademicsList.map((item, index) => (
                <li key={index}><a href="#">{item}</a></li>
              ))}
            </ul>
          

            <ul className={styles.sub_col}>
              {footerContent.ContactList.map((item, index) => (
                <li key={index}><a href="#">{item}</a></li>
              ))}
            </ul>
          
        </div>
      </div>
      
      <div className={styles.term}>
        <div className={styles.termLink}>
            {footerContent.Terms.map((term,index) => (
                    <a href="#" key={index}>{term}</a>
                )
            )}
        </div>
        <div className={styles.social}>
            <a href="#"> <img src={facebook} alt="facebook" /> </a>
            <a href="#"> <img src={twitter} alt="twitter" /> </a>
            <a href="#"> <img src={linked_in} alt="linked in" /> </a>
        </div>
      </div>
 
      <span className={styles.copyRight}>Copyright © [2023] Little Learners Academy. All rights reserved.</span>
 
    </div>
  );
}

export default Footer;
