import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

import image from '../../images/admindashboard.png'
function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar/>
        <img src={image} alt="" className='imageHome'/>
        
      </div>
    </div>
  )
}

export default Home