import React from "react";
import CoolButton from './CoolButton'
import Container from './Container';
import Formfield from './Formfield';

const Signup = () => {
  return (
      <Container>
        <form>
          <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
          <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <Formfield label="Password" type="password" placeholder="Enter your password" />
          <CoolButton className= "is-success"> Submit </CoolButton>
        </form>
    </Container>
  );
}
export default Signup;