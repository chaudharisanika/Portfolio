import React from 'react';
import './ConatctMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
      <section className='contact-container'>
        <h5>Contact Me</h5>
        <div className='contact-content'>
            <div style={{flex:1}}>
                <ContactInfoCard
                iconUrl="https://t3.ftcdn.net/jpg/05/30/94/40/360_F_530944081_r10lXWYlmGPcWk2mKe8oAoTEVZCAMAkd.jpg"
                text="sanika@gmail.com"/>
                 <ContactInfoCard
                iconUrl="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                text="https://github.com/chaudharisanika"/>
            </div>
            <div style={{flex:1}}>
                <ContactForm/>
            </div>
        </div>
      </section>
    )
}

export default ContactMe