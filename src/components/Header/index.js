import {Component} from 'react'
import {FaSearch} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdCancel} from 'react-icons/md'
import './index.css'

class Header extends Component {
  state = {showHumbugger: false}

  onClickHumbugger = () => {
    this.setState(prevState => ({showHumbugger: !prevState.showHumbugger}))
  }

  onClickCancelIcon = () => {
    this.setState({showHumbugger: false})
  }

  showMobileNavItems = () => (
    <ul className="nav-items-container-item-mobile">
      <li>Home</li>
      <li>Profile</li>
      <li>
        <button className="logout-btn" type="button">
          Logout
        </button>
      </li>
      <button
        onClick={this.onClickCancelIcon}
        type="button"
        className="cancel-btn"
      >
        <MdCancel className="cancel-icon" />
      </button>
    </ul>
  )

  render() {
    const {showHumbugger} = this.state
    return (
      <div>
        <div className="header-logo-container">
          <div className="header-logo-container-1">
            <img
              src="https://res.cloudinary.com/dzjf06ctr/image/upload/v1668934317/Standard_Collection_8_ag667t.png"
              alt="website logo"
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
          <button
            type="button"
            onClick={this.onClickHumbugger}
            className="humbugger-menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>
        {showHumbugger && this.showMobileNavItems()}
      </div>
    )
  }
}

export default Header
