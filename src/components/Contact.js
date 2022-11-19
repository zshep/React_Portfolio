import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';



export default function Contact () {

// TO DO: WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required

//TO DO: WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address


return(

    <Form>

         <Form.Group className="mb-3" controlId="contactForm.name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter name" />
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>
                {/* Input for user email */}
         <Form.Group className="mb-3" controlId="contactForm.email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      
        
    </Form>
)



}