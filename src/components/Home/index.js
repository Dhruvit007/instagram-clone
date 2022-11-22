import {Component} from 'react'
import Header from '../Header'
import ReactSlick from '../Slider'
import Post from '../Post'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-contain-container">
        <div className="home-contain-container-1">
          <Header />
          <ReactSlick />
        </div>
        <hr className="hr-line" />
        <Post />
        <Post />
      </div>
    )
  }
}

export default Home
