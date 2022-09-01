import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import HypnoPNG from '../Assets/Snowboards/Hypno.png'
import './IndividualProduct.css'
import Snowfall from 'react-snowfall';

const Hypno = () => {

    const price = 399;

  return (
    <div className='container mt-5'>

        <Snowfall />

        <div className='card'>
            <div className='row g-0'>
                <div className='col-md-6 border-end'>
                    <div className='d-flex flex-column justify-content-center'>
                        <div className='main_image'>
                            <img src={HypnoPNG} id='main_product_image' width='350' />
                        </div>
                    </div>
                </div>
                    <div className='col-md-6'>
                        <div className='p-3 right-side'>
                            <div>
                                <h3 className='product-title'>Hypno</h3>
                            </div>

                            <div className='mt-2 pr-3 content'>
                                <p>You're getting very sleepy...</p>
                            </div>
                            
                            <h3>${price}</h3>

                            <div>
                                <button className='btn btn-light'>Buy Now</button>
                                <button className='btn btn-light'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default Hypno