import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagramSquare,FaFacebookSquare } from 'react-icons/fa';

export default function Professional() {
  return (
    <>
    <div className='bgimg'>
        <div className='container'>
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
                <li>
                  I'm a Professional
                </li>

                <Link to='/step1'><button className="btn bnt-outline-light btn-lg" style={{
                  border: 'trasparent', backgroundColor: '#12c3bb',
                  color: '#fff', float: 'right', padding: " .125rem .9rem", marginLeft: '1.8rem'
                }}>Get Started</button></Link>
              </ul>
            </div>

          </nav>
      <div style={{position:'relative',marginTop:'3.125rem',textAlign:'center', alignItems:'center',justifyContent:'center',fontFamily:'sans-serif',color:'black'}}>
        <h6 className='my-4' style={{backgroundColor:'#ffebea',textAlign:'center',color:'#f94449', borderRadius:'.625rem',letterSpacing:'.0625rem'}}  >
            LAUNCHED MARCH 2019</h6>
        <h1  className='my-5' style={{fontSize:'5.8rem',fontWeight:'bolder',lineHeight:'5.525rem'}} >Stand out from <br /> the crowed</h1>
        <p style={{fontSize:'1.4rem',lineHeight:'2.1rem',letterSpacing:'.09rem'}}>Kredible for professional contractors, <br /> freelancers and jobseekers.</p>
       <Link to='/step1'> <button className=" btn bnt-outline-light btn-lg my-5" style={{border:'trasparent',backgroundColor:'#12c3bb',
          color:'#fff'}}>Get Started for Free</button></Link>
      </div>
        </div>
    </div>
    <div className='my-5'>
    <div className='container'>
    <div className=' container row ' style={{ marginTop: '13.75rem', height:'auto', width:'100%' }}>
          <div className='col-sm p-3 my-5'>
            <h1 style={{ fontSize: '3.75rem', fontWeight: 'bold' }}>Be seen</h1>
            <p className='my-4 ' style={{ fontSize: '1.3rem', color: 'grey' }}>
              Filter by profession, skills, ratings, availability, <br /> location and more.
            </p>
          </div>
          <div className='col-sm p-3'>
            <img src="image7.png" style={{  height:'auto', width:'100%' }} alt="" />
          </div>
        </div>
        <div className=' container row ' style={{ marginTop: '9.75rem', height:'auto', width:'100%' }}>
          <div className='col-sm p-3'>
            <img src="image8.png" style={{  height:'auto', width:'100%' }} alt="" />
          </div>
          <div className='col-sm p-3  my-4'>
            <h1 style={{ fontSize: '3.75rem', fontWeight: 'bold' }}>Find right Opportunity</h1>
            <p className='my-4 ' style={{ fontSize: '1.3rem', color: 'grey' }}>
              The most in-demand contractors, Freelancer and jobseeker
              at your feengerTips. Pre-sceened and ready to work
            </p>
          </div>
        </div>
        <div className=' container row' style={{ marginTop: '9.3rem', height:'auto', width:'100%' }}>
          <div className='col-sm p-3 my-5'>
            <h1 style={{ fontSize: '3.7rem', fontWeight: 'bold' }}>Work on your own terms</h1>
            <p className='my-4 ' style={{ fontSize: '1.3rem', color: 'grey' }}>
              With detailed reference check being uploaded every single day,access
              the most important part of hiring, <a style={{ textDecoration: 'none', color: '#12c3bb' }} href="/">credibility </a>
            </p>
          </div>
          <div className='col-sm p-3'>
            <img src="image9.png" style={{  height:'auto', width:'100%'}} alt="" />
          </div>
        </div>
        <div className=' container row ' style={{ marginTop: '9.3rem', height:'auto', width:'100%' }}>
          <div className='col-sm p-3'>
            <img src="image6.png" style={{ height:'auto', width:'100%' }} alt="" />
          </div>
          <div className='col-sm p-3  my-4'>
            <h1 style={{ fontSize: '3.7rem', fontWeight: 'bold' }}>Direct message</h1>
            <p className='my-4 ' style={{ fontSize: '1.3rem', color: 'grey' }}>
              Cut the waiting time and messaage talent Directly to get started sooner
            </p>
          </div>
        </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '6.8rem', color: 'black' }}>
        <h1 style={{ fontSize: '3.75rem', fontWeight: 'bold' }}>Ready to get started?</h1>
        <p className='my-4' style={{ fontSize: '1.4rem', letterSpacing: '.0625rem' }}>Create an account Today and start searching and posting for Free</p>
        <button className=" btn bnt-outline-light btn-lg my-3" style={{
          border: 'trasparent', backgroundColor: '#12c3bb',
          color: '#fff'
        }}><a href='https://google.com'> Get Started </a></button>
      </div>
      <div className='my-2' style={{ width: '100%',backgroundColor: '#13191c', color: '#fff', fontFamily: 'sans-serif', borderTopRightRadius:'5rem', borderBottomLeftRadius:'5rem'}}>
        {/* <div className='container arrow' style={{ width: '0', height: '0', borderTop: '0rem solid transparent', borderBottom: '4.3rem solid transparent', borderLeft: '81.25rem solid blue' }}></div> */}
        <div className='container'>
          <div className=' my-4 mx-5 row gx-6'>
            <div className='col p-5 '>

              <h3 style={{ fontFamily: 'cursive' }} >S<span style={{ color: '#12c3bb' }}>IN</span>FODE</h3>
              <h5 className='my-3'>The right people. <span style={{ color: '#12c3bb' }} > Right now.</span></h5>
              <h6 className='my-4'>5 Martin Pl, Sikar NSW 2000 <br />
                1800 497 159</h6>
              <div className='my-5' style={{ color: 'grey', fontFamily: 'sans-serif' }}>

                <FaInstagramSquare size={'2em'} /> <FaFacebookSquare className='mx-4' size={'2em'} /> <span > Contact us</span>
              </div>
            </div>


            <div className='col p-5 ' style={{ alignItem: '' }}>
              <ol style={{ textAlign: 'start', listStyleType: 'none', color: 'grey', fontFamily: 'sans-serif', lineHeight: '1.8rem' }}>
                <h5 style={{ color: '#fff' }}> More about SINFODE</h5>
                <li>FAQ</li>
                <li>Standerd time ()out-opt</li>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
              </ol>
              <h6 className='my-5'>

                @CopyRight 2022 SINFODE
              </h6>
    </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
