import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';

import '../../scss/Home.scss';

const HomePage = () => (
  <div className="home">
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
    <h3>Enter an activity here</h3>
    <Messages />
  </div>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
