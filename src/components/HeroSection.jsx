import React from 'react'
import github from '../images/github.svg'

const HeroSection = () => {
    return (
        <div className='bg-about-bg w-screen h-auto pt-20 md:pt-44 lg:pt-44 xl:pt-44 pb-20  overflow-hidden '>
            <div className="w-screen   h-full mx-auto overflow-hidden">
                <div className="grid max-w-7xl mx-auto  h-full  lg:grid-cols-2 md:grid-cols-2  gap-4 overflow-hidden flex justify-between" >
                    {/* about-#262626  navbar-#222222 hero-*/}
                    <div className="text-white  h-auto px-8 text-center md:text-left lg:text-left overflow-hidden">
                        <h1 className="uppercase text-xl py-5">hi there, I'm</h1>
                        <p className='hidden md:block lg:block text-5xl md:text-8xl lg:text-8xl xl:text-7xl font-semibold text-gray-100  '>Felicity Essien</p>
                        <p className='md:hidden lg:hidden text-4xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-6xl font-semibold text-gray-100  py-5'>Felicity  Essien</p>
                        <p className='text-purple py-5 text-xl sm:text-2xl md:text-2xl xl:text-2xl lg:text-2xl uppercase font-semibold tracking-wide'  >front end web developer</p>
                        <p className='text-xl pb-5'>I am a professional frontend web developer with <br /><span className='text-purple font-semibold'>Skill sets: HTML, CSS, React.Js, JavaScript and  Tailwind CSS</span></p>

                        {/* <div className=' py-6'>
                          <a href="#!" className="bg-gradient-purple px-20 py-4 rounded-full my-6 font-semibold tracking-wide">
                            Github profile
                        </a>  
                        </div> */}
                        <div className=' py-6'>
                            <a href="https://www.github.com/felabel" target="_blank" className="bg-github px-8  py-4 mr-2 rounded-full my-6 font-semibold tracking-wide block md:inline-block md:inline-block ">
                                Github  <span><img src={github} className='inline '/></span>
                            </a> 
                          <a href="#!" className="bg-gradient-purple px-20 py-4 rounded-full my-6 font-semibold tracking-wide">
                            Hire Me
                        </a> 
                         
                        </div>
                        
                    </div>
                    <div className="pic  h-full  md:block xl:block lg:block pb-10 mx-auto">
                        <div className=" center text-xl md:text-2xl my-auto mx-auto ">
                        <h2 className="text-purple
                         text-3xl font-bold uppercase pt-2">My Services</h2>
                            <ul className="text-gray-100 font-bold capitalize">
                                <li className='my-2 list-disc'> <i>e-Commerce websites</i></li>
                                <li className='my-2 list-disc center'><i className="fa fa-check "> Educational websites</i></li>
                                <li className='my-2 list-disc'><i className="fa fa-check "> pixel perfect designs</i></li>
                                <li className='my-2 list-disc'><i className="fa fa-check "> Portfolios & blogs</i></li>
                                <li className='my-2 list-disc'><i className="fa fa-check "> SEO optimization</i></li>
                                <li className='my-2 list-disc'><i className="fa fa-check "> project management</i></li>
                                <li className='mt-2 list-disc mb-6'><i className="fa fa-check "> Delivery on Time</i></li>
                                <a href="tel:+2349063843098" className="bg-purple px-10 py-2  mt-4 rounded-full text-gray-100">
                                    +2349063843098
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default HeroSection
