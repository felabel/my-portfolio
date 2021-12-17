import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className='w-full bg-about-bg' id='projects'>
            
        <section className=" portfolio-section mx-auto mb-4 md:mb-4 lg:mb-4 container" id='portfolio'> 
            <div className="header portfolio-header mb-2"> 
                <div className='inner'> 
                <div data-aos='fade-up'> 
                <h1 className="text-center text-xl text-purple tracking-wide font-semibold py-5 fade-up" data-aos='fade-up' data-aos-delay='100' data-aos-duration='500'>My Projects <p className='h-1 w-14 mb-0.5 bg-purple inline-block' ></p></h1>

                </div> 
                    <h1 className="capitalize text-center text-2xl text-gray-100 tracking-wide font-semibold pb-5 capitalize" data-aos='fade-up' data-aos-delay='250' data-aos-duration='500'>my projects</h1>

                    <div className='flex-container flex  grid grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3  w-full ' data-aos='fade'> 
                             {/* card 1    */}
                        <div className="profile-container port-container-1"> 
                            <div className='profile-wrapper'> 
                                <div className='profile-card'> 
                                    <h4>Breaking Bad Casts</h4> 
                                    <p>A website that consumes data from an API to display information about the casts of the breaking bad TV series. Built with <span className="text-purple">REACT</span>  </p> 
                                    <a href='https://breaking-bad-cast.vercel.app/'>View Website</a> 
                                </div> 
                            </div> 
                        </div> 
                        {/* card 2 */}
                        <div className="profile-container port-container-2"> 
                            <div className='profile-wrapper'> 
                                <div className='profile-card'> 
                                    <h4>Olive Food Court</h4> 
                                    <p>An online store for a fast food restaurant than enables customers to order and for food online. Built with <span className="text-purple">TailwindCSS and React.Js</span> </p> 
                                    <a href='https://booklist-omega.vercel.app/'>View Website</a> 
                                </div> 
                            </div> 
                        </div>
                        {/* card 3 */}
                        <div className="profile-container port-container-3"> 
                            <div className='profile-wrapper'> 
                                <div className='profile-card'> 
                                    <h4>Bookmark APP</h4> 
                                    <p>An installable progressive web app that helps you keep track of books you've read. It can be installed on your android and PC</p> 
                                    <a href='https://olive-food-court.vercel.app/'>View Design</a> 
                                </div> 
                            </div> 
                        </div>
                    </div>
                </div>
                </div>
        </section>
        </div>
    )
}

export default Projects
