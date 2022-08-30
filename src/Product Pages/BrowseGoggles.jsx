import React from 'react'
import './Browse.css'
import { useNavigate } from 'react-router'
import Gold from '../Assets/Goggles/24k.png'
import Fluffy from '../Assets/Goggles/Fluffy.png'
import Revent from '../Assets/Goggles/Revent.png'
import Sunrise from '../Assets/Goggles/Sunrise.png'
import Toric from '../Assets/Goggles/Toric.png'


const BrowseGoggles = () => {

let navigate = useNavigate();

const navigate24k = () => {
    navigate('/24k')
}
const navigateFluffy = () => {
    navigate('/fluffy')
}
const navigateRevent = () => {
    navigate('/revent')
}
const navigateSunrise = () => {
    navigate('/sunrise')
}
const navigateToric = () => {
    navigate('/toric')
}

  return (
    <div className='browse-boards'>
        
        <div className='boards-desc'>
            <h2 className='browse-boards-title'>Tribute Goggles</h2>
            <p className='boards-p'>Tribute goggles are all made with polarized lenses to reduce glare and give you a better
                                    view of the approaching terrain. Ventilated lenses help keep fogging lenses at a minimum
                                    and wide frames help increase peripheral view.</p>
        </div>

        <div className='row row-cols-2 row-cols-sm-4 g-4'>
        
            {/* 24k Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Gold} className='card-img-top' alt='24k'/>
                    <div className='card-body'>
                    <h3 className='card-title'>24k</h3>
                    <button className='btn btn-dark' type='submit' onClick={navigate24k}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Fluffy Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Fluffy} className='card-img-top' alt='Fluffy'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Fluffy</h3>
                    <button className='btn btn-dark' type='submit' onClick={navigateFluffy}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Revent Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Revent} className='card-img-top' alt='Revent'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Revent</h3>
                    <button className='btn btn-dark' type='submit' onClick={navigateRevent}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Sunrise Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Sunrise} className='card-img-top' alt='Sunrise'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Sunrise</h3>
                    <button className='btn btn-dark' type='submit' onClick={navigateSunrise}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Toric Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Toric} className='card-img-top' alt='Toric'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Toric</h3>
                    <button className='btn btn-dark' type='submit' onClick={navigateToric}>Buy</button>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default BrowseGoggles