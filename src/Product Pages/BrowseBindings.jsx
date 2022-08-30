import React from 'react'
import './Browse.css'
import { useNavigate } from 'react-router'
import Boss from '../Assets/Bindings/Boss.png'
import HeroRed from '../Assets/Bindings/HeroRed.png'
import Katana from '../Assets/Bindings/Katana.png'
import Mustard from '../Assets/Bindings/Mustard.png'
import Shroom from '../Assets/Bindings/Shroom.png'


const BrowseBindings = () => {

let navigate = useNavigate();

const navigateBoss = () => {
    navigate('/boss')
}
const navigateHeroRed = () => {
    navigate('/herored')
}
const navigateKatana = () => {
    navigate('/katana')
}
const navigateMustard = () => {
    navigate('/mustard')
}
const navigateShroom = () => {
    navigate('/shroom')
}

  return (
    <div className='browse-boards'>
        
        <div className='boards-desc'>
            <h2 className='browse-boards-title'>Tribute Bindings</h2>
            <p className='boards-p'>Tribute bindings are made durable with a do-everything capability mindset. All bindings
                                    are made medium stiff and work for almost all terrain types. Slightly canted towards
                                    the inside of the board and made with EVA foam, our bindings let you feel your board, not
                                    your bindings.</p>
        </div>

        <div className='row row-cols-2 row-cols-sm-4 g-4'>
        
            {/* Boss Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Boss} className='card-img-top' alt='Boss'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Boss</h3>
                    <button className='btn btn-dark' type='submit' onClick={navigateBoss}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Hero Red Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={HeroRed} className='card-img-top' alt='HeroRed'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Hero Red</h3>
                    <button className='btn btn-dark' type='submit' onClick={navigateHeroRed}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Katana Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Katana} className='card-img-top' alt='Katana'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Katana</h3>
                    <button className='btn btn-dark' type='submit' onClick={navigateKatana}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Mustard Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Mustard} className='card-img-top' alt='Mustard'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Mustard</h3>
                    <button className='btn btn-dark' type='submit' onClick={navigateMustard}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Shroom Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Shroom} className='card-img-top' alt='Shroom'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Shroom</h3>
                    <button className='btn btn-dark' type='submit' onClick={navigateShroom}>Buy</button>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default BrowseBindings