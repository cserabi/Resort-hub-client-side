import React from 'react';
import { Card, Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';


const Login = () => {


  const { signInUsingGoogle } = useAuth();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">

          <Card className="text-center">

            <Card.Body className="shadow">
              <Card.Title>Create Account with Google</Card.Title>
              <Card.Text>
                Please , Signup with google if you want take service something from here.
              </Card.Text>
              <Button onClick={signInUsingGoogle} variant="primary">Sign With Google</Button>
            </Card.Body>

          </Card>
        </div>
        <div className="col-md-4"></div>
      </div>

    </div>
  );
};

export default Login;