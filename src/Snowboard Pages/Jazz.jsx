import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import JazzPNG from '../Assets/Snowboards/Jazz.png'
import './IndividualProduct.css'
import Snowfall from 'react-snowfall';

const Jazz = () => {

    const price = 399;

  return (
    <div className='container mt-5'>

        <Snowfall />

        <div className='card'>
            <div className='row g-0'>
                <div className='col-md-6 border-end'>
                    <div className='d-flex flex-column justify-content-center'>
                        <div className='main_image'>
                            <img src={JazzPNG} id='main_product_image' width='350' />
                        </div>
                    </div>
                </div>
                    <div className='col-md-6'>
                        <div className='p-3 right-side'>
                            <div>
                                <h3 className='product-title'>Jazz</h3>
                            </div>

                            <div className='mt-2 pr-3 content'>
                                <p>Trip out with the Jazz board.</p>
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

export default Jazz