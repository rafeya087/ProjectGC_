import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import '../../scss/Nav.scss';

const Navigation = ({ authUser }) =>
  authUser ? (
    <NavigationAuth authUser={authUser} />
  ) : (
    <NavigationNonAuth />
  );

const NavigationAuth = ({ authUser }) => {
  console.log('naagin', authUser);
  return (
    <ul className="navAuth">
      <li
        style={{
          fontSize: '20px',
          fontWeight: '700',
          transform: 'translateY(-10px)',
          marginRight: '25%',
        }}
      >
        Cleaning App
      </li>
      {/* <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li> */}
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      {!!authUser.roles[ROLES.ADMIN] && (
        <li>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
      )}
      <li>
        <SignOutButton />
      </li>
    </ul>
  );
};

const NavigationNonAuth = () => (
  <ul className="nav">
    <li
      style={{
        fontSize: '20px',
        fontWeight: '700',
        transform: 'translateY(-10px)',
        marginRight: '25%',
      }}
    >
      Cleaning App
    </li>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);
