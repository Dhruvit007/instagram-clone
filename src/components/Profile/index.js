import {BsGrid3X3} from 'react-icons/bs'
import Header from '../Header'
import './index.css'

const Profile = () => (
  <div className="home-contain-container">
    <div className="profile-contain-container-1">
      <Header />
      <div className="profile-stats-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-4-img.png"
          alt="uuu"
          className="profile-pic"
        />
        <div>
          <h1 className="profile-details-user-name">Rahul</h1>
          <ul className="user-stats">
            <li className="each-stats">
              79 <span className="stats-label">posts</span>
            </li>
            <li className="each-stats">
              379 <span className="stats-label">followers</span>
            </li>
            <li className="each-stats">
              179 <span className="stats-label">following</span>
            </li>
          </ul>
          <p className="small-name">Rahul</p>
          <p className="about">
            It is not strongest species that survive, nor the most intteligent,
            but one of most <br /> responsible change
          </p>
        </div>
      </div>
      <div className="profile-about-sm-view-1">
        <p className="small-name-1">Rahul</p>
        <p className="about-1">
          It is not strongest species that survive, nor the most intteligent,
          but one of most responsible change
        </p>
      </div>
      <ul className="my-profile-story-item-container">
        <li className="profile-story-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/instagram-mini-project/previous-stories/instagram-mini-project-previous-story-10-img.png"
            alt="xxx"
            className="profile-story-image"
          />
        </li>
        <li className="profile-story-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/instagram-mini-project/previous-stories/instagram-mini-project-previous-story-10-img.png"
            alt="xxx"
            className="profile-story-image"
          />
        </li>
        <li className="profile-story-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/instagram-mini-project/previous-stories/instagram-mini-project-previous-story-10-img.png"
            alt="xxx"
            className="profile-story-image"
          />
        </li>
      </ul>
    </div>
    <hr className="hr-line-1" />
    <div className="user-post-heading-container">
      <BsGrid3X3 className="grid-icon" />
      <p className="post-grid-title">POSTS</p>
    </div>
    <ul className="user-profile-post-container">
      <li className="each-post-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-31-img.png"
          alt="lll"
          className="user-profile-post-image"
        />
      </li>
      <li className="each-post-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-31-img.png"
          alt="lll"
          className="user-profile-post-image"
        />
      </li>
      <li className="each-post-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-31-img.png"
          alt="lll"
          className="user-profile-post-image"
        />
      </li>
      <li className="each-post-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-31-img.png"
          alt="lll"
          className="user-profile-post-image"
        />
      </li>
    </ul>
  </div>
)

export default Profile
