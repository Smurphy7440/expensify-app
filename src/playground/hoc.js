// Higher Order Components (HOC) -  components that render other Components

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please dont share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthantication = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated ?
        <div>
          <p>Authantication successful!</p>
          <WrappedComponent {...props} />
        </div>
        :
        <p>Pleae Login!</p>}

    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthantication(Info);

//ReactDOM.render(<AdminInfo isAdmin = {true} info = 'These are the details.'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated = {true} info = 'These are the details.'/>, document.getElementById('app'));
