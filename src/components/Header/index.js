import {Component} from 'react'
import {FaSearch} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header-logo-container">
          <div className="header-logo-container-1">
            <img
              src="https://res.cloudinary.com/dzjf06ctr/image/upload/v1668934317/Standard_Collection_8_ag667t.png"
              alt="form-logo"
              className="header-logo-image"
            />
            <h1 className="header-logo-name">Insta Share</h1>
          </div>
          <ul className="nav-items-container">
            <div className="caption-search-container">
              <input
                placeholder="Search Caption"
                className="search-caption"
                type="text"
              />
              <div className="search-icon-container">
                <FaSearch className="search-icon" />
              </div>
            </div>
            <li>Home</li>
            <li>Profile</li>
            <li>
              <button className="logout-btn" type="button">
                Logout
              </button>
            </li>
          </ul>
          <div className="humbugger-menu">
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
