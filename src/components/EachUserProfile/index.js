import {BsGrid3X3} from 'react-icons/bs'
import {BiCamera} from 'react-icons/bi'
import './index.css'

const EachUserProfile = props => {
  const {myProfileData} = props
  const {stories, posts} = myProfileData

  const renderMyProfileNoPostView = () => (
    <div>
      <BiCamera />
      <h1>No Posts</h1>
    </div>
  )

  return (
    <>
      <div className="profile-contain-container-1">
        <p className="username-sm-view">{myProfileData.user_name}</p>
        <div className="profile-stats-container">
          <img
            src={myProfileData.profile_pic}
            alt="user profile"
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
                alt="user story"
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
      {posts.length === 0 ? (
        renderMyProfileNoPostView()
      ) : (
        <ul className="user-profile-post-container">
          {posts.map(eachPost => (
            <li className="each-post-item" key={eachPost.id}>
              <img
                src={eachPost.image}
                alt="user post"
                className="user-profile-post-image"
              />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default EachUserProfile
