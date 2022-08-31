import React from 'react'
import './Browse.css'
import { useNavigate } from 'react-router'
import Astro from '../Assets/Jackets/Astro.png'
import Bio from '../Assets/Jackets/Bio.png'
import Blurry from '../Assets/Jackets/Blurry.png'
import Daisy from '../Assets/Jackets/Daisy.png'
import Defy from '../Assets/Jackets/Defy.png'
import Hazard from '../Assets/Jackets/Hazard.png'
import Patriot from '../Assets/Jackets/Patriot.png'
import Platoon from '../Assets/Jackets/Platoon.png'
import Sylva from '../Assets/Jackets/Sylva.png'
import Tracker from '../Assets/Jackets/Tracker.png'


const BrowseBoots = () => {

let navigate = useNavigate();

const navigateAstro = () => {
    navigate('/astro')
}
const navigateBio = () => {
    navigate('/bio')
}
const navigateBlurry = () => {
    navigate('/blurry')
}
const navigateDaisy = () => {
    navigate('/daisy')
}
const navigateDefy = () => {
    navigate('/defy')
}
const navigateHazard = () => {
    navigate('/hazard')
}
const navigatePatriot = () => {
    navigate('/patriot')
}
const navigatePlatoon = () => {
    navigate('/platoon')
}
const navigateSylva = () => {
    navigate('/sylva')
}
const navigateTracker = () => {
    navigate('/tracker')
}

  return (
    <div className='browse-boards'>
        
        <div className='boards-desc'>
            <h2 className='browse-boards-title'>Tribute Jackets</h2>
            <p className='boards-p'>Tribute jackets are made with a GORE-TEX outer shell and watertight zippers to keep you dry.
                                    Our jackets are roomy enough to layer underneath. Our materials combined with GORE-TEX help
                                    our jackets last for multiple seasons.</p>
        </div>

        <div className='row row-cols-2 row-cols-sm-4 g-4'>
        
            {/* Astro Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Astro} className='card-img-top' alt='Astro'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Astro</h3>
                    <h6 className='price'>$199</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateAstro}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Bio Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Bio} className='card-img-top' alt='Bio'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Bio</h3>
                    <h6 className='price'>$199</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateBio}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Blurry Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Blurry} className='card-img-top' alt='Blurry'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Blurry</h3>
                    <h6 className='price'>$199</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateBlurry}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Daisy Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Daisy} className='card-img-top' alt='Daisy'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Daisy</h3>
                    <h6 className='price'>$199</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateDaisy}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Defy Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Defy} className='card-img-top' alt='Defy'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Defy</h3>
                    <h6 className='price'>$199</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateDefy}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Hazard Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Hazard} className='card-img-top' alt='Hazard'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Hazard</h3>
                    <h6 className='price'>$199</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateHazard}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Patriot Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Patriot} className='card-img-top' alt='Patriot'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Patriot</h3>
                    <h6 className='price'>$199</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigatePatriot}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Platoon Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Platoon} className='card-img-top' alt='Platoon'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Platoon</h3>
                    <h6 className='price'>$199</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigatePlatoon}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Sylva Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Sylva} className='card-img-top' alt='Sylva'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Sylva</h3>
                    <h6 className='price'>$199</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateSylva}>Buy</button>
                    </div>
                </div>
            </div>
            
            {/* Tracker Card */}
            <div className='col'>
                <div className='card h-100'>
                    <img src={Tracker} className='card-img-top' alt='Tracker'/>
                    <div className='card-body'>
                    <h3 className='card-title'>Tracker</h3>
                    <h6 className='price'>$199</h6>
                    <button className='btn btn-dark' type='submit' onClick={navigateTracker}>Buy</button>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default BrowseBoots