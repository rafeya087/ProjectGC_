import React from 'react';
import '../../scss/Signout.scss';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button
    type="button"
    onClick={firebase.doSignOut}
    className="signout"
  >
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
