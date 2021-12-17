import React from 'react'
import profile from './../images/profile-pic.jpeg'
import github from '../images/github.svg'


const AboutMe = () => {
    return (
        <div className='bg-nav-bg py-20 md:py-28 lg:py-28 xl:py-28 2xl:py-28 overflow-hidden' id='about' >
            <div className='md:hidden lg:hidden xl:hidden text-center'>
                <h1 className=" text-xl text-purple tracking-wide font-semibold py-5">Who I am <p className='h-1 w-14 mb-0.5 bg-purple inline-block' ></p></h1>
                <h1 className=" text-2xl text-gray-100 tracking-wide font-semibold pb-5 capitalize">about me </h1>
            </div>
            <div className="max-w-5xl mx-auto  h-full grid lg:grid-cols-2 md:grid-cols-2  gap-4" >
                    <div className="pic h-full px-8 rounded-md border-8 border-teal  w-9/12 lg:w-full mx-auto" data-aos='fade-right'>
                        {/* <img src={profile} alt='' /> */}
                        <img src={profile} className=' lg:h-full lg:w-full'/>
                    </div>
                   
                    <div className="text-white  h-auto px-8 text-center md:text-left lg:text-left ">
                        <h1 className=" text-lg text-purple tracking-wide font-semibold py-5 hidden md:block lg:block xl:block 2xl:block">Who I am <p className='h-1 w-14 mb-0.5 bg-purple inline-block' ></p></h1>
                        <p className="text-2xl font-semibold text-grey-100 capitalize hidden md:block lg:block xl:block 2xl:block">about me</p>
                        
                        <p className='text-lg md:text-base lg:text-lg xl:text-base 2xl:text-base py-4 justify'>I'm Felicity Essien, a passionate software developer, with <span className='text-purple'>front end development skills</span>. I am very passionate about levaraging my skills and experiences to solve problems, by creating pixel perfect websites with amazing user experiences and interface. </p>
                        <p className="text-lg md:text-base lg:text-base xl:text-base 2xl:text-base">I develop websites with <span className='text-purple font-semibold'>HTML, CSS, JavaScript, React.Js, Tailwind CSS and WordPress</span></p>

                        <p className='text-lg md:text-base lg:text-base xl:text-base 2xl:text-base py-4'>I love implementing beautiful designs by coding them with modern technologies and making it available in a very interactive and fumctional form for consumers. </p>

                        {/* <p className='text-lg md:text-base lg:text-base xl:text-base 2xl:text-base py-4'>I'm very passionate with what i do and always ready to start the next project with you or your company. </p> */}
                        <div className='py-6 md:flex block'>
                            <a  href='./cv.txt' target='_blank' download='./cv.txt' className="bg-gradient-purple px-20 py-4 rounded-full my-6 font-semibold tracking-wide">
                                DownLoad CV
                            </a>  
                            <a href="https://www.github.com/felabel" className="block bg-github px-8  py-4 mr-2 rounded-full my-6 font-semibold tracking-wide">
                                Github  <span><img src={github} className='inline-block '/></span>
                            </a> 
                          
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}

export default AboutMe
