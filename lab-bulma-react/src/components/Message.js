import React from "react";
import Container from './Container';

const Message = () => {
  return (
    <Container>
      <article className="message is-info">
        <div className="message-header">
          <p>Hello World</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </div>
      </article>
  </Container>
  );
}
export default Message;
