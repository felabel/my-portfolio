import React from 'react'
import twitter from '../images/twitter.svg'
import linkedin from '../images/linkedin.svg'
import whatsapp from '../images/whatsapp.svg'


const Footer = () => {
    return (
        <div className=' w-full pt-5 md:py-5 lg:py-5 bg-about-bg '>
            <div className="block sm:block md:flex lg:flex xl:flex lg:max-w-7xl text-center  justify-between mx-auto">
                <div className="logo ">
                    <a href='/'>
                        <h1 className='text-bold text-teal text-4xl'>F</h1>
                    </a>
                </div>
                <div className="hidden sm:hidden md:block lg:block xl:block copy text-gray-100 text-lg ">&copy; Felicity 2021. All rights reserved</div>
                <div className="socials flex justify-around  mx-auto md:mx-0  md:gap-4 lg:gap-4 xl:gap-4 py-2 md:py-0">
                    <img src={twitter}/>
                    <div className='my-auto w-10 h-10 px-2 py-2'>
                     <a href='https://wa.me/+2349063843098?text=chat%me%up%on%whatsApp'>
                       <img src={whatsapp}/> 
                    </a>
                    </div>
                   
                    
                    <div className='my-auto w-10 h-10 px-2 py-3 '>
                     <a href='https://www.linkedin.com/in/felicity-abel/-7127361ab'>
                       <img src={linkedin}/> 
                    </a>
                    </div>

                </div>
                <div className="copy text-gray-100 text-lg bg-nav-bg py-2 md:hidden">&copy; Felicity 2021. All rights reserved</div>


            </div>
        </div>
    )
}

export default Footer
