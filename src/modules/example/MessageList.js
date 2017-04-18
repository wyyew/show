import React from 'react'
import PropTypes from 'prop-types'

import ContextMessageList from './ContextMessageList'

function Button(props){
  return (
    <button style={{backgroundColor: props.color}}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  color:PropTypes.string.isRequired,
  children:PropTypes.string.isRequired
}

function Message(props) {
  return (
    <li>
      {props.text} <Button color={props.color}>Delete</Button>
    </li>
  );
}

Message.propType= {
  text: PropTypes.string.isRequired,
  color:PropTypes.string.isRequired
};

function MessageList() {
  const color = '#EC5051';
  const messages = [
    {text: 'Hello React'},
    {text: 'Hello Redux'}
  ];
  const children = messages.map((message, id) =>
    <Message key={id} text={message.text} color={color}/>
  );
  return (
    <div>
    <div>
      <p>通过props将color逐层传递给里面的Button组件</p>
      <ul>
        {children}
      </ul>
    </div>
    <br />
    <ContextMessageList />
    </div>
  );
}
export default MessageList
