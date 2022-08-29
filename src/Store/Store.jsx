import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Store.css'
import Board from '../Assets/Snowboards/Hypno.png'
import Bindings from '../Assets/Bindings/HeroRed.png'

const Store = () => {
  return (
   <div className='row row-cols-1 row-cols-md-2 g-4'>
    
    <div className='col'>
      <div className='card'>
        <img src={Board} className='card-img-top' alt='Board'/>
        <div className='card-body'>
          <h5 className='card-title'>Boards</h5>
          <p className='card-text'>Browse Snowboards</p>
          <button className='boards-link' type='submit'>Browse Boards</button>
        </div>
      </div>
    </div>
    
    <div className='col'>
      <div className='card'>
        <img src={Bindings} className='card-img-top' alt='Bindings' />
        <div className='card-body'>
          <h5 className='card-title'>Bindings</h5>
          <p className='card-text'>Browse Bindings</p>
          <button className='boards-link' type='submit'>Browse Bindings</button>
        </div>
      </div>
    </div>

   </div> 
  )
}

export default Store