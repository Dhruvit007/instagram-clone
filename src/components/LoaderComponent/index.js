import Loader from 'react-loader-spinner'
import './index.css'

const LoaderComponent = () => (
  <div className="loader-container">
    <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
  </div>
)

export default LoaderComponent
