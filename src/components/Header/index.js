import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaSearch} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdCancel} from 'react-icons/md'
import './index.css'

class Header extends Component {
  state = {showHumbugger: false, searchInput: ''}

  onClickHumbugger = () => {
    this.setState(prevState => ({showHumbugger: !prevState.showHumbugger}))
  }

  onClickCancelIcon = () => {
    this.setState({showHumbugger: false})
  }

  performSearchAction = () => {
    const {searchInput} = this.state
    const {onClickSearchIcon} = this.props
    if (onClickSearchIcon !== undefined) {
      onClickSearchIcon(searchInput)
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  onClickSearch = () => {
    const {onClickSearchIcon} = this.props
    const {searchInput} = this.state
    if (onClickSearchIcon !== undefined) {
      onClickSearchIcon(searchInput)
    }
  }

  showMobileNavItems = () => {
    const {searchInput} = this.state

    return (
      <ul className="nav-items-container-item-mobile">
        <Link to="/" className="nav-link-mobile">
          <li>Home</li>
        </Link>
        <Link to="/my-profile" className="nav-link-mobile">
          <li>Profile</li>
        </Link>
        <li>
          <button
            onClick={this.onClickLogout}
            className="logout-btn"
            type="button"
          >
            Logout
          </button>
        </li>
        <input
          placeholder="Search Caption"
          className="search-caption"
          type="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <button
          onClick={this.onClickCancelIcon}
          type="button"
          className="cancel-btn"
        >
          <MdCancel className="cancel-icon" />
        </button>
      </ul>
    )
  }

  render() {
    const {showHumbugger} = this.state
    const {searchInput} = this.state

    return (
      <div>
        <div className="header-logo-container">
          <div className="header-logo-container-1">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dzjf06ctr/image/upload/v1668934317/Standard_Collection_8_ag667t.png"
                alt="website logo"
                className="header-logo-image"
              />
            </Link>
            <h1 className="header-logo-name">Insta Share</h1>
          </div>
          <ul className="nav-items-container">
            <div className="caption-search-container">
              <input
                placeholder="Search Caption"
                className="search-caption"
                type="search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
              <div className="search-icon-container">
                <button type="button" testid="searchIcon">
                  <FaSearch
                    onClick={this.onClickSearch}
                    className="search-icon"
                  />
                </button>
              </div>
            </div>
            <Link to="/" className="nav-link">
              <li>Home</li>
            </Link>
            <Link to="/my-profile" className="nav-link">
              <li>Profile</li>
            </Link>
            <li>
              <button
                onClick={this.onClickLogout}
                className="logout-btn"
                type="button"
              >
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

export default withRouter(Header)
