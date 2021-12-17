import React from 'react'
import twitter from '../images/twitter.svg'
import linkedin from '../images/linkedin.svg'
import whatsapp from '../images/whatsapp.svg'


const Footer = () => {
    return (
        <div className='bg-about-bg w-full py-5'>
            <div className="flex lg:max-w-7xl mx-auto  justify-between">
                <div className="logo">
                    <a href='/'>
                        <h1 className='text-bold text-teal text-4xl'>F</h1>
                    </a>
                </div>
                <div className="copy text-gray-100">&copy; Felicity 2021. All rights reserved</div>
                <div className="socials flex gap-4">
                    <img src={twitter}/>
                    <div className='my-auto w-10 h-10 px-2 py-2'>
                     <a href='https://wa.me/+2439063843098?text=chat%me%up%on%whatsApp'>
                       <img src={whatsapp}/> 
                    </a>
                    </div>
                   
                    
                    <div className='my-auto w-10 h-10 px-2 py-3'>
                     <a href='https://www.linkedin.com/in/felicity-abel/-7127361ab'>
                       <img src={linkedin}/> 
                    </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer
