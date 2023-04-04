import './traveltips.css'
import React from 'react'
import Tips from '../../components/tips/Tips'
import Footer from '../../components/footer/Footer'
import EmailFeedBack from '../../components/emailFeedback/EmailFeedBack'
import TipHome from '../../components/tipHome/TipHome'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function TravelTips() {
 
  const [tips, setTips] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchTips = async () => {
      const res = await axios.get("/tips" + search)
      console.log(res.data)
      setTips(res.data)

    }
    fetchTips()
  }, [search])
  return (
    <div className='travelTipsHome'>
      <TipHome />
      <div className="travelTipsContainer">
        <div className="travelTipsMain">
          <Tips tips={tips}/>
        </div>
      </div>
      <div className="homContainer">
        <EmailFeedBack />
        <Footer />
      </div>
    </div>
  )
}

export default TravelTips