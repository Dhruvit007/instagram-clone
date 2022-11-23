import {BsGrid3X3} from 'react-icons/bs'
import './index.css'

const Profile = props => {
  const {myProfileData} = props
  const {stories, posts} = myProfileData
  return (
    <>
      <div className="profile-contain-container-1">
        <h1 className="username-sm-view">Rahul</h1>
        <div className="profile-stats-container">
          <img
            src={myProfileData.profile_pic}
            alt="my profile"
            className="profile-pic-1"
          />
          <div>
            <h1 className="profile-details-user-name">
              {myProfileData.user_name}
            </h1>
            <ul className="user-stats">
              <li className="each-stats">
                {myProfileData.posts_count}
                <span className="stats-label"> posts</span>
              </li>
              <li className="each-stats">
                {myProfileData.followers_count}
                <span className="stats-label"> followers</span>
              </li>
              <li className="each-stats">
                {myProfileData.following_count}
                <span className="stats-label"> following</span>
              </li>
            </ul>
            <p className="small-name">{myProfileData.user_id}</p>
            <p className="about">{myProfileData.user_bio}</p>
          </div>
        </div>
        <div className="profile-about-sm-view-1">
          <p className="small-name-1">{myProfileData.user_id}</p>
          <p className="about-1">{myProfileData.user_bio}</p>
        </div>
        <ul className="my-profile-story-item-container">
          {stories.map(eachStory => (
            <li className="profile-story-item" key={eachStory.id}>
              <img
                src={eachStory.image}
                alt="my story"
                className="profile-story-image"
              />
            </li>
          ))}
        </ul>
      </div>
      <hr className="hr-line-1" />
      <div className="user-post-heading-container">
        <BsGrid3X3 className="grid-icon" />
        <h1 className="post-grid-title">POSTS</h1>
      </div>
      <ul className="user-profile-post-container">
        {posts.map(eachPost => (
          <li className="each-post-item" key={eachPost.id}>
            <img
              src={eachPost.image}
              alt="my post"
              className="user-profile-post-image"
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Profile
