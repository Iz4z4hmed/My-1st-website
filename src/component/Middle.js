import React, { useState } from 'react';
import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';




export default function Middle() {
  const textchange = () => {
    if (text === '$49/month') {

      setText('70% off on all')
      setPara('If you wanna join us hurry up and mention your name on given link after thatt you will get 70% cashback on your first order abow 1500/-')
    }
    else {
      setText('$49/month')
      setPara(' A simple flat fee for unrestricted access to the entire platform with zero transaction costs Built for larger businesses or frequent users')
    }
  }
  const [text, setText] = useState('$49/month');
  const [para, setPara] = useState(' A simple flat fee for unrestricted access to the entire platform with zero transaction costs Built for larger businesses or frequent users ');

  // const toggleclick = () => {


  //   if (toggleclick === mode) {
  //     setmode = "nonono"

  // }
  //   else {
  //     setmode = 'hello'
  //   }
  // }
  return (
    <>
      <div className='container my-5'>
        <div style={{ marginTop: '130px' }}>

          <h1 className='my-5' style={{
            textAlign: 'center', fontWeight: 'bold', lineHeight: "50px", fontSize: '60px', fontFamily: 'sans-serif', color: 'black',
          }} >Three easy steps</h1>
        </div>
        <div className="container my-5">
          <div className="row row-cols-3 row-cols-lg-5 g-1 g-lg-5" style={{ marginLeft: '50px', marginTop: '50px' }}>

            <div className="col" style={{ width: '120px', height: '70px', textAlign: 'center', color: 'black', fontSize: '25px' }}>
              <div className="p-3  bg-light" style={{ border: '2px solid #12c3bb', borderRadius: '100%' }}> <b>1</b></div>
              <p className='my-2' style={{ fontSize: '18px', color: 'grey' }}>
                Instant search
              </p>
            </div>
            <div className="col" style={{ width: '300px' }}>
              <div className="p-3  "><hr style={{ border: '1px solid' }} /></div>
            </div>
            <div className="col" style={{ width: '120px', height: '70px', textAlign: 'center', color: 'black', fontSize: '25px' }}>
              <div className="p-3  bg-light" style={{ border: '2px solid #12c3bb', borderRadius: '100%' }}> <b>2</b> </div>
              <p className='my-2' style={{ fontSize: '18px', color: 'grey' }}>
                View details
              </p>
            </div>
            <div className="col" style={{ width: '300px' }}>
              <div className="p-3  "><hr style={{ border: '1px solid' }} /></div>
            </div>
            <div className="col" style={{ width: '120px', height: '70px', textAlign: 'center', color: 'black', fontSize: '25px' }}>
              <div className="p-3  bg-light" style={{ border: '2px solid #12c3bb', borderRadius: '100%' }}> <b>3</b> </div>
              <p className='my-2' style={{ fontSize: '18px', color: 'grey' }}>
                Direct message
              </p>
            </div>
          </div>
        </div>
        <div className=' container row ' style={{ marginTop: '150px' }}>
          <div className='col-sm p-3 my-5'>
            <h1 style={{ fontSize: '60px', fontWeight: 'bold' }}>Instant search</h1>
            <p className='my-4 ' style={{ fontSize: '22px', color: 'grey' }}>
              Filter by profession, skills, ratings, availability, <br /> location and more.
            </p>
          </div>
          <div className='col-sm p-3'>
            <img src="image3.png" style={{  height:'auto', width:'100%' }} alt="" />
          </div>
        </div>
        <div className=' container row ' style={{ marginTop: '150px' }}>
          <div className='col-sm p-3'>
            <img src="image4.png" style={{  height:'auto', width:'100%' }} alt="" />
          </div>
          <div className='col-sm p-3  my-4'>
            <h1 style={{ fontSize: '60px', fontWeight: 'bold' }}>Ready to work prfssnls</h1>
            <p className='my-4 ' style={{ fontSize: '22px', color: 'grey' }}>
              The most in-demand contractors, Freelancer and jobseeker
              at your feengerTips. Pre-sceened and ready to work
            </p>
          </div>
        </div>
        <div className=' container row ' style={{ marginTop: '9.3rem' }}>
          <div className='col-sm p-3 my-5'>
            <h1 style={{ fontSize: '3.7rem', fontWeight: 'bold' }}>Detaile reference</h1>
            <p className='my-4 ' style={{ fontSize: '1.3rem', color: 'grey' }}>
              With detailed reference check being uploaded every single day,access
              the most important part of hiring, <a style={{ textDecoration: 'none', color: '#12c3bb' }} href="/">credibility </a>
            </p>
          </div>
          <div className='col-sm p-3'>
            <img src="image5.png" style={{ height:'auto', width:'100%'}} alt="" />
          </div>
        </div>
        <div className=' container row ' style={{ marginTop: '9.3rem' }}>
          <div className='col-sm p-3'>
            <img src="image6.png" style={{  height:'auto', width:'100%' }} alt="" />
          </div>
          <div className='col-sm p-3 my-4'>
            <h1 style={{ fontSize: '3.7rem', fontWeight: 'bold' }}>Direct message</h1>
            <p className='my-4 ' style={{ fontSize: '1.3rem', color: 'grey' }}>
              Cut the waiting time and messaage talent Directly to get started sooner
            </p>
          </div>
        </div>
      </div>
      <div className='flex-container' style={{ color: 'white', backgroundColor: '#13191c',height:'auto', width: '100%', borderTopRightRadius: '3rem', borderBottomLeftRadius: '3rem' }}>
        {/* <div className='arrow' style={{ width: '0', height: '0', borderTop: '0 solid transparent', borderBottom: '3.1rem solid transparent', borderLeft: '81.25rem solid #000' }}> </div> */}
        <div className='container'>
          <div className=' row ' style={{ marginTop: '6.8rem' }}>
            <div className='col-sm p-3  my-5'>
              <h1 style={{ fontSize: '3.75rem', fontWeight: 'bold' }}>Accessible pricing</h1>
              <p className='my-4 ' style={{ fontSize: '1.375rem', color: 'grey' }}>
                While being one of most powerful tools in your arsenal,
                we also want to be one of the cheapest. That's why Kredible
                is much cheaper than any other hiring platform you've seen
              </p>
            </div>
            <div className='col-sm p-3' style={{ marginBottom: '3.3rem', marginTop: '30px' }}>
              <div className='divsize' style={{ height: '400px', width: '100%', backgroundColor: '#fff', borderRadius: '.625rem', textAlign: 'center' }} alt="" >
                <div style={{ height: '2.5rem' }}></div>
                <div style={{ backgroundColor: '#ffebea', color: '#f94449', borderRadius: '.625rem', width: "100%", marginLeft: '', textAlign: 'center' }}>
                  <h6 style={{ paddingTop: '.25rem', paddingBottom: '.25rem' }} >
                    CHOOSE HOW YOU PAY
                  </h6>
                </div>
                <h2 className='my-4' style={{ color: 'black', fontSize: '2.8rem' }} >{text}</h2>
                <h4 style={{ color: 'black', display: 'inline-flex' }}>Commision <div className="form-check form-switch mx-3">
                  <input className="form-check-input" onClick={textchange} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                </div>monthly </h4>
                <p className='my-4' style={{ fontSize: '1.25rem', color: 'grey' }}>
                  {para}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='arrow' style={{ width: '0', height: '0', borderTop: '3.75rem solid transparent', borderBottom: '0px solid transparent', borderRight: '84.25rem solid #000' }}> </div> */}
      </div>
      <div className='container' >
        <div className=' container row md-6 ' style={{ marginTop: '120px' }}>
          <div className='col my-5'>
            <h1 style={{ fontSize: '60px', fontWeight: 'bold' }}>
              Australians prfessionals from every industry
            </h1>

          </div>
          <div className='col'>
            <p style={{ fontSize: '23px', color: 'Black' }}>Top professional from every industry, pre-sceened <br /> and waiting</p>
            <div className="accordion my-5" id="accordionExample">
              <div className="accordion-item" style={{ border: '0', borderBottom: '1px solid black', borderTop: '1px solid black', borderRadius: '0' }}>
                <h2 className="accordion-header" id="headingOne" >
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <b style={{ fontSize: '20px' }}> Marketing Professionals</b>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={{ fontSize: '20px', color: 'grey' }}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>

              <div className="accordion-item" style={{ border: '0', borderBottom: '1px solid black' }}>
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <b style={{ fontSize: '20px' }}>Engineering professionals</b>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={{ fontSize: '20px', color: 'grey' }}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ border: '0', borderBottom: '1px solid black' }}>
                <h2 class="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <b style={{ fontSize: '20px' }}>IT Developers</b>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={{ fontSize: '20px', color: 'grey' }}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ border: '0', borderBottom: '1px solid black' }}>
                <h2 class="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <b style={{ fontSize: '20px' }}>Finance Professionals</b>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={{ fontSize: '20px', color: 'grey' }}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ border: '0', borderBottom: '1px solid black' }}>
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <b style={{ fontSize: '20px' }}>Office professionals</b>
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={{ fontSize: '20px', color: 'grey' }}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
            <p className='my-3' style={{ color: 'grey', fontSize: '18px' }}> <span style={{ color: '#12c3bb' }}> <b>20+</b> </span>  other companies are ready to work Professionals </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div>
          <h1 style={{ fontSize: '3.7rem', fontWeight: 'bold', marginTop: '8.1rem', textAlign: 'center', color: 'black' }}>Reliable payment systems</h1>
        </div>
        <div className=' container row my-5' style={{  height:'auto', width:'100%'}}>
          <div className='col-sm p-3'>
            <img src="shield.svg" alt="" style={{ height: '5rem', width: '5rem' }} className='my-5' />
            <h2> <b> Secure</b></h2>
            <p style={{ color: 'grey', fontSize: '1.3rem' }}>We utilise payment systems with world class financial  security and compliance to meet the highest certification standards.</p>

          </div>
          <div className='col-sm p-3 ' style={{borderLeft:'1px solid lightgrey'}}>
            <img src="fast.svg" alt="" style={{ height: '5rem', width: '5rem' }} className='my-5' />
            <h2> <b> Fast</b></h2>
            <p style={{ color: 'grey', fontSize: '1.3rem' }}>Take advantage of same day direct payouts to <br /> professionals you hire on Kredible.</p>

          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#f3f2f1', borderTopRightRadius: '5rem', borderBottomLeftRadius: '5rem', textAlign:'center' }}>
        {/* <div className='arrow' style={{ width: '0', height: '0', borderTop: '0 solid transparent', borderBottom: '4.3rem solid transparent', borderLeft: '81.2rem solid #fff' }}> </div> */}
        <h1 style={{ fontSize: '3.4rem', fontWeight: 'bold', marginTop: '8.1rem', textAlign: 'center', color: 'black', paddingTop: '5rem' }}>People love using THIS THIS..</h1>
        <p className='my-3' style={{ color: 'grey', fontSize: '1.1rem', textAlign: 'center' }}>Review that are too good to be true.</p>
        <div>
          <div className='container'>
            <div className="row " style={{ height:'auto', width:'100%'}}>
              <div className="col-sm container p-3">
                <div className='mmm' ><img src="image7.png" style={{ height: '20rem', width: '20rem' }} alt="" /></div>
              </div>
              <div className="col-sm container p-3">
                <div className='mmm' ><img src="image8.png" style={{ height: '20rem', width: '20rem' }} alt="" /></div>
              </div>
              <div className="col-sm container p-3">
                <div className='mmm' ><img src="image5.png" style={{ height: '20rem', width: '20rem' }} alt="" /></div>
              </div>
              <div className="container col-sm p-3">
                <div className='nnn' ><img src="image6.png" style={{ height: '20rem', width: '20rem' }} alt="" /></div>
              </div>
              <div className="container col-sm p-3">
                <div className='nnn' ><img src="image7.png" style={{ height: '20rem', width: '20rem' }} alt="" /></div>
              </div>
              <div className="container col-sm p-3">
                <div className='nnn'><img src="image8.png" style={{ height: '20rem', width: '20rem' }} alt="" /></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='arrow' style={{ width: '0', height: '0', borderTop: '60px solid transparent', borderBottom: '0', borderRight: '1348px solid #fff' }}> </div> */}
      </div>
      <div style={{ textAlign: 'center', marginTop: '110px', color: 'black' }}>
        <h1 style={{ fontSize: '60px', fontWeight: 'bold' }}>Ready to get started?</h1>
        <p className='my-4' style={{ fontSize: '23px', letterSpacing: '1px' }}>Create an account Today and start searching and posting for Free</p>
        <button className=" btn bnt-outline-light btn-lg my-3" style={{
          border: 'trasparent', backgroundColor: '#12c3bb',
          color: '#fff'
        }}>Get Started</button>
      </div>
      <div className='my-2' style={{ width: '100%', backgroundColor: '#13191c', color: '#fff', fontFamily: 'sans-serif', borderTopRightRadius: '3rem', borderBottomLeftRadius: '3rem' }}>
        {/* <div className='container arrow' style={{ width: '0', height: '0', borderTop: '0rem solid transparent', borderBottom: '4.3rem solid transparent', borderLeft: '81.25rem solid blue' }}></div> */}
        <div className='container'>
          <div className=' my-4 mx-5 row '>
            <div className='col-sm p-5 '>

              <h3 style={{ fontFamily: 'cursive' }} >S<span style={{ color: '#12c3bb' }}>IN</span>FODE</h3>
              <h5 className='my-3'>The right people. <span style={{ color: '#12c3bb' }} > Right now.</span></h5>
              <h6 className='my-4'>5 Martin Pl, Sikar NSW 2000 <br />
                1800 497 159</h6>
              <div className='my-5' style={{ color: 'grey', fontFamily: 'sans-serif' }}>

                <FaInstagramSquare size={'2em'} /> <FaFacebookSquare className='mx-4' size={'2em'} /> <span > Contact us</span>
              </div>
            </div>


            <div className='col-sm p-5 '>
              <ol style={{ textAlign: 'start', listStyleType: 'none', color: 'grey', fontFamily: 'sans-serif', lineHeight: '30px' }}>
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

    </>
  )
}
