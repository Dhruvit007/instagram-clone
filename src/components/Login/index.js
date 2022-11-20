import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-contain-container">
          <img
            src="https://res.cloudinary.com/dzjf06ctr/image/upload/v1668933772/OBJECTS_kjufbq.png"
            alt="login"
            className="login-image"
          />
          <form className="form-container">
            <img
              src="https://res.cloudinary.com/dzjf06ctr/image/upload/v1668934317/Standard_Collection_8_ag667t.png"
              alt="form-logo"
              className="form-logo-image"
            />
            <h1 className="form-name">Insta Share</h1>
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input className="input" id="username" type="text" />
            <label htmlFor="username" className="label">
              PASSWORD
            </label>
            <input className="input" id="password" type="password" />
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
