import {Component} from 'react'
import Header from '../Header'
import ReactSlick from '../Slider'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-contain-container">
        <div className="home-contain-container-1">
          <Header />
          <ReactSlick />
        </div>
      </div>
    )
  }
}

export default Home
