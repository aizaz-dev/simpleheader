import React from 'react';
import './Header.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiYoutube } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="Header">
      <div className="items">
        <div className="item1">
          <div className="hamburger">
            <GiHamburgerMenu />
          </div>
          <div className="logo">Logo Here</div>
        </div>
        <div className="item2">
          <div className="input">
            <AiOutlineSearch className="input-icon" />
            <input type="text" className="input-text" />
          </div>
          <div className="icon">Ic</div>
        </div>
      </div>
      {/* <div className="sidebar">
        <div className="side-header">
          <div className="side-text">SideHead</div>
          <div className="side-icon">
            <ImCross />
          </div>
        </div>
        <div className="side-items">
          <div className="side-item">Home</div>
          <div className="side-item">Portfolio</div>
          <div className="side-item">Contact</div>
        </div>
        <div className="side-button">Click Me</div>
        <div className="socials">
          <div className="social">
            <AiFillFacebook />
          </div>
          <div className="social">
            <AiOutlineInstagram />
          </div>
          <div className="social">
            <FiYoutube />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
