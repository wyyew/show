import React from 'react'
import PropTypes from 'prop-types'

function Button(props, context){
  return (
    <button style={{backgroundColor: context.color}}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children:PropTypes.string.isRequired
}

Button.contextTypes = {
  color: PropTypes.string.isRequired
}

function Message(props) {
  return (
    <li>
      {props.text} <Button>Delete</Button>
    </li>
  );
}

Message.propType= {
  text: PropTypes.string.isRequired
};

class ContextMessageList extends React.Component {
  getChildContext() {
    return {color: '#108ee9'};
  }
  render() {
  const messages = [
    {text: 'Hello React'},
    {text: 'Hello Redux'}
  ];
  const children = messages.map((message, id) =>
    <Message key={id} text={message.text} />
  );
  return (
    <div>
      <p>通过context将color逐层传递给里面的Button组件</p>
      <ul>
        {children}
      </ul>
    </div>
  );
  }
}
ContextMessageList.childContextTypes = {
  color:PropTypes.string.isRequired
}
export default ContextMessageList
