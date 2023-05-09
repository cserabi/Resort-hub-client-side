import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contactus.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9bo958e', 'service_9bo958e', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (


    <div className='container'>
      <div className="row">

        <div className="col-md-4"></div>
        <div className="col-md-4 bg-contact">
          <form ref={form} onSubmit={sendEmail}>

            <h3>Contact Us </h3>
            <label>Name</label>
            <br></br>
            <input type="text" name="user_name" className='box' />
            <br></br>
            <label>Email</label>
            <br></br>
            <input type="email" name="user_email" className='box' />
            <br></br>
            <label>Message</label>
            <br></br>
            <textarea name="message" className='box' />
            <br></br>
            <input type="submit" value="Send" className='submit-box' />
          </form>
        </div >

        <div className="col-md-4"></div>
      </div >

      <div className='row'>
        <div className='col-md-4'></div>


        <div className='col-md-4'>

        </div>

        <div className='col-md-4'></div>
      </div>

    </div >
  );
};

export default Contactus;