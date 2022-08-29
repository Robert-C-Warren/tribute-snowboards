import React from 'react'
import Intro from '../Assets/Intro.mp4'
import './Landing.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    let navigate = useNavigate();

    const navigateToStore = () => {
        navigate('/store')
    }

  return (
    <div className='landing'>
        <video className='intro-video' muted loop autoPlay>
            <source src={Intro} type='video/mp4' />
        </video>

        <div className='button-div'>
            <button className='bi bi-arrow-right shop' onClick={navigateToStore}> Shop Tribute</button>
        </div>
    </div>
  )
}

export default Landing