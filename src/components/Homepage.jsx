import React from 'react'
import './Homepage.css'
import image1 from '../images/waiter.jpg'
import Menu from './Menu'
import './Menu.css'
import { Link } from 'react-router-dom'

const Styling ={
  marginTop: 50,
}

function Homepage() {
  return (
    <div className="homep">
    <div className='first-part'>
      <div className="container">
        <div className="row" >
          <div className="col-md-6 col-sm-12" >
            <h1>Little Lemon</h1>
            <h3 style={{color: 'white', marginTop: -12, marginBottom: 18, fontSize: 24}}>Chicago</h3>
            <p style={{color: 'white'}} className='p-home'>
              We are a family owned <br />
              Mediterranean restaurant, <br />
              focused on traditional <br />
              recipes served with a modern <br />
              twist.
            </p>
            <Link to="/order" className='nav-item' ><button className='btn btn-success'>Reserve a Table</button></Link>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src={image1} alt="image1" className='waiter'/>
          </div>
          <span style={Styling}><Menu /></span>
        </div>
      </div>
      </div>
    </div>
  )
}




export default Homepage