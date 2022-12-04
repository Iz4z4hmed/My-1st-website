import React from 'react'
import Middle from './Middle'
import { Link } from 'react-router-dom'

export default function Navbody() {
  return (
    <>
    <div>
      
      <div className='flex-container bgimg'>
      <div className=" container App">
        <header>
          <nav className='navbar navbar-expand-lg' >
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a href='/' className='navbar-brand' style={{ fontFamily: 'cursive', fontSize: '1.8rem' }}><b> S<span style={{ color: '#12c3bb' }}>IN</span>FODE</b></a>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='ul1 navbar-nav ms-auto mb-2 mb-lg-0' >
                <Link className='lnk' to='/login' ><li>
                  Log In
                </li></Link>
               <Link className='lnk' to='/professional'> <li>
                  I'm a Professional
                </li> </Link>

              <Link to='/step1'> <button className="btn bnt-outline-light btn-lg" style={{
                  border: 'trasparent', backgroundColor: '#12c3bb',
                  color: '#fff', float: 'right', padding: " .125rem .9rem", marginLeft: '1.8rem'
                }}>Get Started</button></Link>
              </ul>
            </div>

          </nav>
        </header>

      </div>
      <div className='container '  >
        <div  style={{ position: 'relative', marginTop: '3.125rem', textAlign: 'center', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', color: 'black' }}>
          <div style={{ backgroundColor: '#ffebea', color: '#f94449', borderRadius: '.625rem', letterSpacing: '.0625rem' }}>
            <h6 style={{ paddingTop: '.25rem', paddingBottom: '.25rem', fontWeight: 'bold', fontSize: '.8rem' }} >
              LAUNCHED MARCH 2019
            </h6>
          </div>
          <div className='' style={{position:'relative'}}>
          <h1 className='my-4 ' style={{ fontSize: '5.8rem',fontWeight: 'bolder', lineHeight: '5.625rem'}} >
            Hire the right <br />
            people. 
            Instantly
          </h1>
          <p className='my-5' style={{ fontSize: '1.4rem', lineHeight: '2.1rem', letterSpacing: '.09rem' }}>
            Become part of the India's fastest growing <br />
            professional self build company.
          </p>
         <Link to='/step1'> <button className=" btn bnt-outline-light btn-lg my-3" style={{
           border: 'trasparent', backgroundColor: '#12c3bb',
           color: '#fff'
          }}>Get Started for Free</button></Link>
          </div>
        </div>
      </div>
      </div>
      <div className='container '>
        <div style={{ position: 'absolute', marginTop: '1.2rem', left: '70%' }}>
          <div className='container' style={{ height: 'auto', width: '100%' }}>
            <img src="./image2.png" alt="" style={{ height: 'auto', width: '100%' }} /></div>
        </div>
        <img src="./image1.png" style={{
          height: 'auto', width: '100%', border: '.0625rem solid transparent',
          borderRadius: '.625rem', boxShadow: ' rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
        }} alt="" />
      </div>
      <Middle />
</div>
    </>
  )
}
