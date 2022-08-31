import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Store.css'
import Snowfall from 'react-snowfall'
import { useNavigate } from 'react-router';
import Board from '../Assets/Snowboards/HypnoThumb.png'
import Bindings from '../Assets/Bindings/HeroRed.png'
import Boots from '../Assets/Boots/Construction.png'
import Jackets from '../Assets/Jackets/Bio.png'
import Pants from '../Assets/Pants/Foliage.png'
import Goggles from '../Assets/Goggles/Toric.png'
import Gloves from '../Assets/Gloves/Denim.png'
import Beanies from '../Assets/Beanie/Mural.png'

const Store = () => {

let navigate = useNavigate();

const navigateBoards = () => {
  navigate('/boards')
}
const navigateBindings = () => {
  navigate('/bindings')
}
const navigateBoots = () => {
  navigate('/boots')
}
const navigateJackets = () => {
  navigate('/jackets')
}
const navigatePants = () => {
  navigate('/pants')
}
const navigateGoggles = () => {
  navigate('/goggles')
}
const navigateGloves = () => {
  navigate('/gloves')
}
const navigateBeanies = () => {
  navigate('/beanies')
}

  return (
   <div className='row row-cols-2 row-cols-sm-4 g-4 store-div'>

   <Snowfall />
    
    {/* Snowboards Card */}
    <div className='col'>
      <div className='card h-100'>
        <img src={Board} className='card-img-top' alt='Board'/>
        <div className='card-body'>
          <h3 className='card-title'>Boards</h3>
          <p className='card-text'>Browse Snowboards</p>
          <button className='btn btn-dark' type='submit' onClick={navigateBoards}>Browse Boards</button>
        </div>
      </div>
    </div>
    
    {/* Bindings Card */}
    <div className='col'>
      <div className='card h-100'>
        <img src={Bindings} className='card-img-top' alt='Bindings' />
        <div className='card-body'>
          <h3 className='card-title-bindings'>Bindings</h3>
          <p className='card-text'>Browse Bindings</p>
          <button className='btn btn-dark' type='submit' onClick={navigateBindings}>Browse Bindings</button>
        </div>
      </div>
    </div>
    
    {/* Boots Card */}
    <div className='col'>
      <div className='card h-100'>
        <img src={Boots} className='card-img-top' alt='Boots' />
        <div className='card-body'>
          <h3 className='card-title-bindings'>Boots</h3>
          <p className='card-text'>Browse Boots</p>
          <button className='btn btn-dark' type='submit' onClick={navigateBoots}>Browse Boots</button>
        </div>
      </div>
    </div>
    
    {/* Jackets Card */}
    <div className='col'>
      <div className='card h-100'>
        <img src={Jackets} className='card-img-top' alt='Boots' />
        <div className='card-body'>
          <h3 className='card-title-bindings'>Jackets</h3>
          <p className='card-text'>Browse Jackets</p>
          <button className='btn btn-dark' type='submit' onClick={navigateJackets}>Browse Jackets</button>
        </div>
      </div>
    </div>
    
    {/* Pants Card */}
    <div className='col'>
      <div className='card h-100'>
        <img src={Pants} className='card-img-top' alt='Boots' />
        <div className='card-body'>
          <h3 className='card-title-bindings'>Pants</h3>
          <p className='card-text'>Browse Pants</p>
          <button className='btn btn-dark' type='submit' onClick={navigatePants}>Browse Pants</button>
        </div>
      </div>
    </div>
    
    {/* Goggles Card */}
    <div className='col'>
      <div className='card h-100'>
        <img src={Goggles} className='card-img-top' alt='Boots' />
        <div className='card-body'>
          <h3 className='card-title-bindings'>Goggles</h3>
          <p className='card-text'>Browse Goggles</p>
          <button className='btn btn-dark' type='submit' onClick={navigateGoggles}>Browse Goggles</button>
        </div>
      </div>
    </div>
    
    {/* Gloves Card */}
    <div className='col'>
      <div className='card h-100'>
        <img src={Gloves} className='card-img-top' alt='Boots' />
        <div className='card-body'>
          <h3 className='card-title-bindings'>Gloves</h3>
          <p className='card-text'>Browse Gloves</p>
          <button className='btn btn-dark' type='submit' onClick={navigateGloves}>Browse Gloves</button>
        </div>
      </div>
    </div>
   
    {/* Beanies Card */}
    <div className='col'>
      <div className='card h-100'>
        <img src={Beanies} className='card-img-top' alt='Boots' />
        <div className='card-body'>
          <h3 className='card-title-bindings'>Beanies</h3>
          <p className='card-text'>Browse Beanies</p>
          <button className='btn btn-dark' type='submit' onClick={navigateBeanies}>Browse Beanies</button>
        </div>
      </div>
    </div>

   </div> 
  )
}

export default Store