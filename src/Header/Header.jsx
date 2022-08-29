import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

const Header = () => {
  return (
    <nav className='navbar navbar-inverse navbar-static-top'>
        <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' 
                data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
                    <span className='sr-only'>Toggle Navigation</span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
            </button>

            <a className='navbar-brand' href='/'>Tribute</a>
        </div>

        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav'>
                <li className='active'> <a href='/'>Link <span className='sr-only'>(current)</span> </a> </li>

                <li> <a href='/'>Link2</a> </li>

                <li className='dropdown'>
                    <a href='#' className='dropdown-togggle' data-toggle='dropdown' role='button' aria-haspopup='true'
                        aria-expanded='false'>Dropdown <span className='caret'> </span> </a>
                    
                    <ul className='dropdown-menu'>
                        <li><a href='/boards'>BOARDS</a> </li>
                        <li><a href='/bindings'>BINDINGS</a> </li>
                        <li><a href='/boots'>BOOTS</a> </li>
                        <li><a href='/jackets'>JACKETS</a> </li>
                        <li><a href='/pants'>PANTS</a> </li>
                        <li><a href='/gloves'>GLOVES</a> </li>
                        <li><a href='/goggles'>GOGGLES</a> </li>
                        <li><a href='/beanies'>BEANIES</a> </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header