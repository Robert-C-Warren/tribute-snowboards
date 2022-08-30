import React from 'react'
import './Browse.css'
import { useNavigate } from 'react-router'
import Cargo from '../Assets/Pants/Cargo.png'
import Construction from '../Assets/Pants/Construction.png'
import Foliage from '../Assets/Pants/Foliage.png'
import Hazard from '../Assets/Pants/Hazard.png'
import Surplus from '../Assets/Pants/Surplus.png'


const BrowsePants = () => {

let navigate = useNavigate();

const navigateCargo = () => {
    navigate('/cargo')
}
const navigateConstruction = () => {
    navigate('/constructionpants')
}
const navigateFoliage = () => {
    navigate('/foliagepants')
}
const navigateHazard = () => {
    navigate('/hazard')
}
const navigateSurplus = () => {
    navigate('/surplus')
}

  return (
    <div className='browse-boards'>
        
        <div className='boards-desc'>
            <h2 className='browse-boards-title'>Tribute Pants</h2>
            <p className='boards-p'>Tribute pants are made with a GORE-TEX shell and waterproof zippers to keep you dry. Our Pants
                                    are flexible enough to fit any riding style and have an inner leg lining for tucking into your
                                    boots for an extra protection against the elements.</p>
        </div>

        <div className='row row-cols-2 row-cols-sm-4 g-4'>
        
            {/* Cargo Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Cargo} className='card-img-top' alt='Cargo'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Cargo</h3>
                    <button className='btn btn-dark' type='submit' onClick={navigateCargo}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Construction Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Construction} className='card-img-top' alt='Construction'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Construction</h3>
                    <button className='btn btn-dark' type='submit' onClick={navigateConstruction}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Foliage Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Foliage} className='card-img-top' alt='Foliage'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Foliage</h3>
                    <button className='btn btn-dark' type='submit' onClick={navigateFoliage}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Hazard Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Hazard} className='card-img-top' alt='Hazard'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Hazard</h3>
                    <button className='btn btn-dark' type='submit' onClick={navigateHazard}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Surplus Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Surplus} className='card-img-top' alt='Surplus'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Surplus</h3>
                    <button className='btn btn-dark' type='submit' onClick={navigateSurplus}>Buy</button>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default BrowsePants