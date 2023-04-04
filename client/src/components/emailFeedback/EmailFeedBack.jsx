import './emailFeedBack.css'

function EmailFeedBack() {
  return (
    <div className="emFeedBack">
      <div className="emailContact">
        <h1 className="emailTitle">Save time, save money!</h1>
        <span className="mailDesc">Sign up an we'll send the send the best deals to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your Email'/>
            <button>Send</button>
        </div>
      </div>
      <div className="emailPanner">
        <img src="https://images.unsplash.com/photo-1527142879-95b61a0b8226?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="imgEmailPn" />
      </div>
    </div>
    
  )
}

export default EmailFeedBack