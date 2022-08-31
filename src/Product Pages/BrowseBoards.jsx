import React from 'react'
import './Browse.css'
import { useNavigate } from 'react-router'
import Foliage from '../Assets/Snowboards/Foliage.png'
import Granite from '../Assets/Snowboards/Granite.png'
import Guns from '../Assets/Snowboards/Guns & Roses.png'
import Hypno from '../Assets/Snowboards/Hypno.png'
import Jazz from '../Assets/Snowboards/Jazz.png'
import Mountains from '../Assets/Snowboards/Mountains.png'
import Patriot from '../Assets/Snowboards/Patriot.png'
import RGB from '../Assets/Snowboards/RGB.png'
import Splatter from '../Assets/Snowboards/Spatter.png'
import StickerBomb from '../Assets/Snowboards/StickerBomb.png'

const BrowseBoards = () => {

let navigate = useNavigate();

const navigateFoliage = () => {
    navigate('/foliage')
}
const navigateGranite = () => {
    navigate('/granite')
}
const navigateGuns = () => {
    navigate('/obeyxtribute')
}
const navigateHypno = () => {
    navigate('/hypno')
}
const navigateJazz = () => {
    navigate('/jazz')
}
const navigateMountains = () => {
    navigate('/mountains')
}
const navigatePatriot = () => {
    navigate('/patriot')
}
const navigateRGB = () => {
    navigate('/rgb')
}
const navigateSplatter = () => {
    navigate('/splatter')
}
const navigateStickerBomb = () => {
    navigate('/stickerbomb')
}

  return (
    <div className='browse-boards'>
        
        <div className='boards-desc'>
            <h2 className='browse-boards-title'>Tribute Snowboards</h2>
            <p className='boards-p'>Tribute snowboards are designed with all mountain riding in mind. With a directional twin
                                    design, our boards easily handle anything the park has to throw at them. All of our boards
                                    are made with a flex of 6.5 out of 10 for a balanced ability to carve hard or butter around.</p>
        </div>

        <div className='row row-cols-2 row-cols-sm-4 g-4'>
        
            {/* Foliage Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Foliage} className='card-img-top' alt='Foliage'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Foliage</h3>
                    <h6 className='price'>$399</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateFoliage}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Granite Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Granite} className='card-img-top' alt='Granite'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Granite</h3>
                    <h6 className='price'>$399</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateGranite}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Guns & Roses Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Guns} className='card-img-top' alt='Guns'/>
                    <div className='card-body'>
                    <h3 className='card-title'>OBEY x Tribute</h3>
                    <h6 className='price'>$599</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateGuns}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Hypno Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Hypno} className='card-img-top' alt='Hypno'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Hypno</h3>
                    <h6 className='price'>$399</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateHypno}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Jazz Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Jazz} className='card-img-top' alt='Jazz'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Jazz</h3>
                    <h6 className='price'>$399</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateJazz}>Buy</button>
                    </div>
                </div>
            </div>
           
            {/* Mountains Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Mountains} className='card-img-top' alt='Mountains'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Mountains</h3>
                    <h6 className='price'>$399</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateMountains}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Patriot Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Patriot} className='card-img-top' alt='Patriot'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Patriot</h3>
                    <h6 className='price'>$399</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigatePatriot}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Sticker Bomb Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={StickerBomb} className='card-img-top' alt='Sticker Bomb'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Sticker Bomb</h3>
                    <h6 className='price'>$399</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateStickerBomb}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* RGB Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={RGB} className='card-img-top' alt='RGB'/>
                    <div className='card-body'>
                    <h3 className='card-title'>RGB</h3>
                    <h6 className='price'>$399</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateRGB}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Splatter Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Splatter} className='card-img-top' alt='Splatter'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Splatter</h3>
                    <h6 className='price'>$399</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateSplatter}>Buy</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default BrowseBoards