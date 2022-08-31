import React from 'react'
import './Browse.css'
import { useNavigate } from 'react-router'
import Snowfall from 'react-snowfall'
import Construction from '../Assets/Boots/Construction.png'
import Control from '../Assets/Boots/Control.png'
import Frost from '../Assets/Boots/Frost.png'
import Mint from '../Assets/Boots/Mint.png'
import Mirage from '../Assets/Boots/Mirage.png'


const BrowseBoots = () => {

let navigate = useNavigate();

const navigateConstruction = () => {
    navigate('/construction')
}
const navigateControl = () => {
    navigate('/control')
}
const navigateFrost = () => {
    navigate('/frost')
}
const navigateMint = () => {
    navigate('/mint')
}
const navigateMirage = () => {
    navigate('/mirage')
}

const price = 149;

  return (
    <div className='browse-boards'>

        <Snowfall />
        
        <div className='boards-desc'>
            <h2 className='browse-boards-title'>Tribute Boots</h2>
            <p className='boards-p'>Tribute boots are made with the knowledge that fit trumps tech when it comes to what is
                                    between you and your board. All of our boots use BOA dials to help you dial in the perfect
                                    fit everytime. Inside our boots are lined with merino wool to keep your feet dry and high
                                    quality Control Foam to offer long lasting comfort.</p>
        </div>

        <div className='row row-cols-2 row-cols-sm-4 g-4'>
        
            {/* Construction Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Construction} className='card-img-top' alt='Construction'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Construction</h3>
                    <h6 className='price'>${price}</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateConstruction}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Control Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Control} className='card-img-top' alt='Control'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Control</h3>
                    <h6 className='price'>${price}</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateControl}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Frost Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Frost} className='card-img-top' alt='Frost'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Frost</h3>
                    <h6 className='price'>${price}</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateFrost}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Mint Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Mint} className='card-img-top' alt='Mint'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Mint</h3>
                    <h6 className='price'>${price}</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateMint}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Mirage Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Mirage} className='card-img-top' alt='Mirage'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Mirage</h3>
                    <h6 className='price'>${price}</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateMirage}>Buy</button>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default BrowseBoots