import React from "react";
import "./home.css";
import { CgMail } from 'react-icons/cg';
import { FiPhoneCall } from 'react-icons/fi';
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="container2">
        <div className="middel-container">
          <h1>WE MAKE YOUR LIFE EASIER!</h1>
          <div><img src="http://elaundry.com/wp-content/themes/twentyfourteen/images/person2.png" alt="" /><h2>Next day free delivery and pickup </h2></div>
           Schedule your pickup today and
          receive clean Clothes tomorrow.
          <div><img src="http://elaundry.com/wp-content/themes/twentyfourteen/images/calendar.png" alt="" /><h2>Laundry Professionals</h2></div>
          We will treat your clothes with love from wash, dry, fold and packing. We care about
          your clothes as much as you do. Get your clothes back as good as new.
          <div><img src="http://elaundry.com/wp-content/themes/twentyfourteen/images/guarantee.png" alt="" /><h2>Premium Products </h2></div>
          We only use the best on your clothes. Tide, Downy,
          Clorox, and Color safe bleach are used on your clothes every single
          time you wash with us. We take care of your clothes as if
          they were our own.
        </div>
      </div>
      <button className="btn3"><NavLink to='clothes'> Select Clothes </NavLink></button>
      <footer className="footer">
        <div>
          <p><CgMail className="icon"/> help-hp@elaundry.com</p>
          <p><FiPhoneCall className="icon"/> +91 111-222-3333</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
