import React, {useState} from 'react';
import '../../App.css';
import { Form, Button } from 'react-bootstrap'
import FormContainer from '../FormContainer';
import Footer from '../Footer';


export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  return( 
    <>
    
  <h1 className='sign-up'>LIKE & SUBSCRIBE</h1>

  <FormContainer>
  <h1> Sign Up with Celebso</h1>
  <br></br>
  <br></br>

  <Form style = {{textAlign: 'center'}}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address: </Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br></br>

        <Form.Group controlId='password'>
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <br></br>

        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>
      </FormContainer>
      <Footer/>




  </>
  );
}
