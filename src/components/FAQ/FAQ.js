import React, { useContext } from 'react';
import { AccordionButton, Card, useAccordionButton } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import { render } from 'react-dom';

const FAQ = () => {
  return (
    <div className="container">
      <h3 className="text-center">Frequently Asked Question</h3>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">

          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Which service provide ? </Accordion.Header>
              <Accordion.Body>
                We are provide lot's of service like bus transport , resort booking , meals delivery in resort place etc
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Can i get service you from outside Dhaka ?</Accordion.Header>
              <Accordion.Body>
                Yes , you can place order any where in the world .
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>You agency also provide meal service ?</Accordion.Header>
              <Accordion.Body>
                yes , we are also prove meals service when you and your company staying with our resort .We will give you all support.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Rent only resort or transport too .</Accordion.Header>
              <Accordion.Body>
                We are provide rent of resort as well as transport .like bus , truck , private car .We will helps any location arround the Bangladesh.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-md-2"></div>
      </div>

    </div>
  );
};

export default FAQ;