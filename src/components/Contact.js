import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formDataToSubmit = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSubmit
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="contact__text">Want to send me an offer letter?! 😄 or work on projects?</p>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src="./assets/images/contactimg.png" alt="Contact" />
        </div>
        <div>
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST" 
            className="contact__form"
            onSubmit={handleSubmit}
          >
            <input 
              type="hidden" 
              name="access_key" 
              value="ebd9f9d8-561f-464e-a638-ec5eee0ad8cc" 
            />
            <input 
              type="text" 
              placeholder="Name" 
              name="name" 
              className="contact__input" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
            <input 
              type="email" 
              placeholder="Email" 
              name="email" 
              className="contact__input" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              name="phone" 
              className="contact__input" 
              required 
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea 
              name="message" 
              className="contact__input" 
              placeholder="Write down your thoughts..." 
              minLength="1000"
              value={formData.message}
              onChange={handleChange}
            />
            <input 
              type="hidden" 
              name="redirect" 
              value="https://web3forms.com/success" 
            />
            <button type="submit" className="contact__button">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;