import React from 'react';
import { Link } from 'react-router-dom';
// import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';

export default function Step1() {
    return (
        <div className='container'>
            <div className='row' style={{ marginTop: '1.8rem', fontFamily: 'sans-serif' }}>
                <div className='col-sm' >
                    <h1 style={{ fontFamily: 'cursive' }}><b> S<span style={{ color: '#12c3bb' }}>IN</span>FODE</b></h1>
                    <div className='flex-container' style={{ backgroundColor: 'lightgrey', width: '25.12rem', marginTop: '8.25rem', height: '.187rem' }}>
                        <div style={{ backgroundColor: '#12c3bb', width: '5.25rem', height: '.187rem' }}></div>
                    </div>
                    <p className='my-2' style={{ lineHeight: '1rem', fontSize: '0.8rem' }}><b>step 1</b> <br /> <strong style={{ color: '#12c3bb' }}>User type</strong></p>

                    <div style={{ marginTop: '8rem', fontFamily: 'sans-serif', color: 'black' }}>
                        <h1><b> Choose user type</b></h1>
                        <p style={{ fontSize: '1.2rem' }}><> Enter your detail and become part of fastest growing self made <br /> company in india</></p>
                    </div>
                </div>

                <div className='col-sm'  style={{ borderLeft: '.125rem solid lightgrey' }}  >
                    <div style={{ marginTop: '12.5rem' }}>

                        <div className=" my-5">
                            {/* <label for="text" className="form-label"><h6> Password</h6> </label> */}
                            {/* <input type="password" className="form-control" id="exampleFormControlInput1" style={{ width: '41.8rem', height: '2.8rem', borderRadius: '0.8rem' }} > */}
                            <select className='form-select' style={{ backgroundColor: '#f3f2f1', color: '#000', width: '28.8rem', height: '2.8rem', border: '0.0625rem solid transparent', borderRadius: '0.8rem' }}>
                                <option selected><b>Looking for work</b></option>
                                <option value="1"><b>Looking for Hire Candidate</b></option>
                                <option value="2"><b>Get free access</b></option>
                            </select>

                           <Link to='/login'> <button className=" btn bnt-outline-light btn-lg my-4" style={{
                                border: 'trasparent', backgroundColor: '#12c3bb',
                                color: '#fff', width: '28.8rem', height: '2.8rem'
                            }}>Next</button></Link>

                            <p className='my-2'><b> Already have an account?  <span style={{ color: '#12c3bb', cursor: 'pointer' }}>   Login</span> </b></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
