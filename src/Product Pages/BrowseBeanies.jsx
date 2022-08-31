import React from 'react'
import './Browse.css'
import { useNavigate } from 'react-router'
import Classic from '../Assets/Beanie/Classic.png'
import Headband from '../Assets/Beanie/Headband.png'
import Lime from '../Assets/Beanie/Lime.png'
import Mural from '../Assets/Beanie/Mural.png'
import PomPom from '../Assets/Beanie/PomPom.png'


const BrowseBeanies = () => {

let navigate = useNavigate();

const navigateClassic = () => {
    navigate('/classic')
}
const navigateHeadband = () => {
    navigate('/headband')
}
const navigateLime = () => {
    navigate('/lime')
}
const navigateMural = () => {
    navigate('/mural')
}
const navigatePomPom = () => {
    navigate('/pompom')
}

  return (
    <div className='browse-boards'>
        
        <div className='boards-desc'>
            <h2 className='browse-boards-title'>Tribute Beanies</h2>
            <p className='boards-p'>Tribute beanies are made with responsible materials to keep you warm and our footprint smaller.</p>
        </div>

        <div className='row row-cols-2 row-cols-sm-4 g-4'>
        
            {/* Classic Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Classic} className='card-img-top' alt='Classic'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Classic</h3>
                    <h6 className='price'>$29</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateClassic}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Headband Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Headband} className='card-img-top' alt='Headband'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Headband</h3>
                    <h6 className='price'>$19</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateHeadband}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Lime Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Lime} className='card-img-top' alt='Lime'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Lime</h3>
                    <h6 className='price'>$29</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateLime}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Mural Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Mural} className='card-img-top' alt='Mural'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Mural</h3>
                    <h6 className='price'>$29</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateMural}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* PomPom Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={PomPom} className='card-img-top' alt='PomPom'/>
                    <div className='card-body'>
                    <h3 className='card-title'>PomPom</h3>
                    <h6 className='price'>$29</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigatePomPom}>Buy</button>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default BrowseBeanies