import React from 'react';
import '../../scss/Landing.scss';

const Landing = () => (
  <div className="landing">
    <h1 className="landing__heading-main">Cleaning App</h1>
    <p>Please signin to access the activities</p>
    <h3>Here you can perform following activities</h3>
    <ul>
      <li>Create an activity</li>
      <li>Update an activity</li>
      <li>Delete an activity</li>
    </ul>
  </div>
);

export default Landing;
