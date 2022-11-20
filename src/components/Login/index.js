import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrMsg: false,
    errorMsg: '',
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onLogin = event => {
    event.preventDefault()
    this.validateUserData()
  }

  validateUserData = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const jwtToken = fetchedData.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 15})
      const {history} = this.props
      history.replace('/')
    } else {
      const fetchedData = await response.json()
      this.setState({showErrMsg: true, errorMsg: fetchedData.error_msg})
    }
  }

  render() {
    const {showErrMsg, errorMsg, username, password} = this.state
    return (
      <div className="login-container">
        <div className="login-contain-container">
          <img
            src="https://res.cloudinary.com/dzjf06ctr/image/upload/v1668933772/OBJECTS_kjufbq.png"
            alt="login"
            className="login-image"
          />
          <form onSubmit={this.onLogin} className="form-container">
            <img
              src="https://res.cloudinary.com/dzjf06ctr/image/upload/v1668934317/Standard_Collection_8_ag667t.png"
              alt="form-logo"
              className="form-logo-image"
            />
            <h1 className="form-name">Insta Share</h1>
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input
              onChange={this.onChangeUserName}
              className="input"
              id="username"
              type="text"
              value={username}
            />
            <label htmlFor="username" className="label">
              PASSWORD
            </label>
            <input
              onChange={this.onChangePassword}
              className="input"
              id="password"
              type="password"
              value={password}
            />
            {showErrMsg && <p className="error-message">{errorMsg}</p>}
            <button className="submit-btn" type="submit">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
