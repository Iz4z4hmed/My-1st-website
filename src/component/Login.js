import React from 'react';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
            <div className='container' style={{height:'auto', width:'100%'}}>
                <div className='row ' style={{ marginTop: '1.875rem', fontFamily: 'sans-serif', height:'auto', width:'100%' }}>
                    <div className='col-lg p-3 '>
                        <h1 style={{ fontFamily: 'cursive' }}><b> S<span style={{ color: '#12c3bb' }}>IN</span>FODE</b></h1>
                        <div style={{ marginTop: '15.625rem', fontFamily: 'sans-serif', color: 'black' }}>
                            <h1><b> Login</b></h1>
                            <h5>Welcome back to SINFODE</h5>
                        </div>
                    </div>

                    <div className='col-lg p-3 my-3 ' style={{ borderLeft: '0.125rem solid lightgrey' }}  >
                        <div style={{ marginLeft: '.625rem' }}>
                            <div className="mb-3">
                                <label for="text" className="form-label"><h6> UserName & Email</h6> </label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" style={{ width: '26.8rem', height: '2.8rem', borderRadius: '.8rem', backgroundColor: '#f3f2f1', border: 'transparent' }} placeholder="UserName & Email" />
                            </div>
                            <div className="my-5">
                                <label for="text" className="form-label"><h6> Password</h6> </label>
                                <input type="password" className="form-control" id="exampleFormControlInput1" style={{ width: '26.8rem', height: '2.8rem', borderRadius: '.8rem', backgroundColor: '#f3f2f1', border: 'transparent' }} placeholder="Password" />
                                <strong style={{ lineHeight: '2.1875rem', color: '#12c3bb', cursor: 'pointer' }} >Forgot password?</strong> <br />
                                <button className=" btn bnt-outline-light btn-lg my-2" style={{
                                     backgroundColor: '#12c3bb',
                                    color: '#fff', width: '26.8rem', height: '2.8rem'
                                }}>Next</button>
                                <hr style={{ width: '26.8rem' }} />
                                <b style={{ marginLeft: '12.5rem', color: 'grey' }}>or</b>
                                <button className=" btn bnt-outline-light btn-lg my-2" style={{
                                     backgroundColor: '#34a853',
                                    color: '#fff', width: '26.8rem', height: '2.8rem', fontSize: '1.0625rem'
                                }}><FaGoogle />  continue with google</button>
                                <button className=" btn bnt-outline-light btn-lg my-2" style={{
                                     backgroundColor: '#3b5998',
                                    color: '#fff', width: '26.8rem', height: '2.8rem', fontSize: '1.0625rem'
                                }}><FaFacebook />  continue with facebook</button>
                                <button className=" chota btn bnt-outline-light btn-lg my-2" style={{
                                     backgroundColor: '#000',
                                    color: '#fff', width: '26.8rem', height: '2.8rem', fontSize: '1.0625rem'
                                }}><FaApple />  continue with apple </button>
                                <p className='my-2'><b> Don't have an account?<span style={{ color: '#12c3bb', cursor: 'pointer' }}>Create a new account</span> </b></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
