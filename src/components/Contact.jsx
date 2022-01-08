import React from 'react'
import location from '../images/contactaddress.svg'
import email from '../images/email.svg'
import phone from '../images/phone.svg'
import linkedin from '../images/linkedin.svg'

const Contact = () => {
    return (
        <div className='w-full bg-nav-bg  h-auto pb-2 overflow-hidden -mt-28 pt-7' id='contact '>
            <div className="md:w-9/12 lg:max-w-7xl  mx-auto px-4 lg:px-6 pb-12">
                <div className="text-center">
                    <h1 className="text-center text-xl text-purple tracking-wide font-semibold py-5 fade-up" data-aos='fade-up' data-aos-delay='100' data-aos-duration='500'>contact me &nbsp; <p className='h-1 w-14 mb-0.5 bg-purple inline-block' ></p></h1>
                    <h1 className=" text-center text-2xl text-gray-100 tracking-wide font-semibold pb-5 capitalize" data-aos='fade-up' data-aos-delay='250' data-aos-duration='500'>get in touch</h1>
                   {/* <p className='text-gray-100  tracking-wide font-semibold fade-up'data-aos-delay ='250' data-aos='fade-up' data-aos-duration='1000'> get in touch</p> */}
                   {/* <p className='text-gray-200 text-lg fade-up' data-aos="fade-up" data-aos-delay='100' data-aos-duration='500'>I am always available to bring your ideas to reality. Get in touch with just a click. Let's work together. </p> */}

                   <p className='text-gray-200 text-lg fade-up' data-aos="fade-up" data-aos-delay='250' data-aos-duration='500'>I am always available to bring your ideas to reality. Get in touch with just a click. Let's work together. </p>

                    <div className='center  text-center w-full lg:w-8/12 mx-auto mt-8 items-center ' data-aos='fade' >
                        <div className="address flex lg:gap-8 gap-4 py-4">
                            <div className="img w-16 h-16 rounded-full bg-purple ">
                                <img src={location} alt='address' className='mx-auto py-5 w-1/3'/>

                            </div>
                            <div className="img">
                                <p className='text-gray-100 py-5 text-lg tracking-wide'>IBB, Lokoja, Nigeria</p>
                                
                            </div>
                        </div>
                        <div className="mobile flex lg:gap-8 gap-4 py-4">
                            <div className="img w-16 h-16 rounded-full bg-purple">
                                <a href='tel:+2349063843098'><img src={phone} alt='address' className='mx-auto py-5 w-1/3'/></a>

                            </div>
                            <div className="img">
                                <p className='text-gray-100 py-5 text-lg tracking-wide'>
                                    <a href="tel:+2349063843098">+2349063843098</a>
                                    
                                </p>
                                
                            </div>
                        </div>
                        <div className="email flex lg:gap-8 gap-4 py-4 ">
                            <div className="img w-16 h-16 rounded-full bg-purple">
                                <a href='mailto:felicityabel2016@gmail.com'><img src={email} alt='address' className='mx-auto py-5 w-1/3'/></a>
                            </div>
                            <div className="img">
                                <p className='text-gray-100 py-5 text-lg tracking-wide'>
                                    <a href="mailto:felicityabel2016@gmail.com">felicityabel2016@gmail.com</a>
                                    </p>
                                
                            </div>
                        </div>
                        <div className="email flex lg:gap-8 gap-4 py-4">
                            <div className="img w-16 h-16 rounded-full bg-purple">
                               <a href='https://www.linkedin.com/in/felicity-abel/-7127361ab'> <img src={linkedin} alt='address' className='mx-auto py-5 w-1/3'/></a>

                            </div>
                            <div className="img">
                                <p className='text-gray-100 py-5 text-lg tracking-wide'>
                                    <a href="https://www.linkedin.com/in/felicity-abel/-7127361ab">Felicity Abel</a>
                                    </p>
                                
                            </div>
                        </div>
                    </div> 
                </div>
                
            </div>
        </div>
    )
}

export default Contact
