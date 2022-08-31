import React from 'react'
import './Browse.css'
import { useNavigate } from 'react-router'
import Burlap from '../Assets/Gloves/Burlap.png'
import Clutch from '../Assets/Gloves/Clutch.png'
import Denim from '../Assets/Gloves/Denim.png'
import Spring from '../Assets/Gloves/Spring.png'
import Tanned from '../Assets/Gloves/Tanned.png'


const BrowseGloves = () => {

let navigate = useNavigate();

const navigateBurlap = () => {
    navigate('/burlap')
}
const navigateClutch = () => {
    navigate('/clutch')
}
const navigateDenim = () => {
    navigate('/denim')
}
const navigateSpring = () => {
    navigate('/spring')
}
const navigateTanned = () => {
    navigate('/tanned')
}

  return (
    <div className='browse-boards'>
        
        <div className='boards-desc'>
            <h2 className='browse-boards-title'>Tribute Gloves</h2>
            <p className='boards-p'>Tribute gloves are made with GORE-TEX to keep your hands dry and protect against wind chill.
                                    Our gloves are insulated with recyled poly to help keep your hands warm. Pre curved stitching
                                    increasing flexibility allowing you to strap your board with ease.</p>
        </div>

        <div className='row row-cols-2 row-cols-sm-4 g-4'>
        
            {/* Burlap Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Burlap} className='card-img-top' alt='Burlap'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Burlap</h3>
                    <h6 className='price'>$79</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateBurlap}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Clutch Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Clutch} className='card-img-top' alt='Clutch'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Clutch</h3>
                    <h6 className='price'>$79</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateClutch}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Denim Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Denim} className='card-img-top' alt='Denim'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Denim</h3>
                    <h6 className='price'>$79</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateDenim}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Spring Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Spring} className='card-img-top' alt='Spring'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Spring</h3>
                    <h6 className='price'>$49</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateSpring}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Tanned Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Tanned} className='card-img-top' alt='Tanned'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Tanned</h3>
                    <h6 className='price'>$79</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateTanned}>Buy</button>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default BrowseGloves