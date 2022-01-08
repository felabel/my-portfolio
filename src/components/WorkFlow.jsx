import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import idea from './../images/workidea.svg';
import workplan from './../images/workplan.svg';
import typer from './../images/typer.svg';
// import typer from './..images/typer.svg'
import bracket from './../images/brackets.svg'
const WorkFlow = () => {
    useEffect(() => {
          
      AOS.init({})
  }, []);
  return (
    <div className='w-full bg-nav-bg h-auto pb-2 overflow-hidden' id='workflow'>
      <div className="w-full lg:max-w-7xl  mx-auto lg:px-6 pb-12 pt-7">
        <div className="text-center">
          <h1 className=" text-xl text-purple tracking-wide font-semibold py-5" data-aos='fade-up' data-aos-delay='100' data-aos-duration='500'>How I work<p className='h-1 w-14 mb-0.5 bg-purple inline-block' ></p></h1>
          <h1 className=" text-2xl text-gray-100 tracking-wide font-semibold pb-5 capitalize" data-aos='fade-up' data-aos-delay='250' data-aos-duration='500'>my workflow</h1>
        </div>
        <div className="  grid w-9/12 lg:max-w-5xl mx-auto md:grid-cols-3 lg:grid-cols- xl:grid-cols-4 2xl:grid-cols-4 gap-8 lg:gap-10  justify-around sm:px-28 px- md:px-10 lg:px-10  px-4 md:w-full lg:w-full z-1">
            <div className="z-10 item h-auto  pt-6  rounded-md shadow-md text-gray-100 bg-gray-800 hover:bg-white hover:text-black cursor-pointer" data-aos='zoom-in' data-aos-delay='600'>
               
                <div className="image w-14 h-14  mx-4 " >
                    <img src={idea} className='w-8/12'/>
                </div>
                <div className="lg:text-base md:text-base text-base mx-4 font-normal ">
                    <p className="  py-2 tracking-wider text-xl font-semibold ">Study Designs</p> 
                    <p className='  pb-4'>I study the design to be implemented so i fully understand the layout.</p>
                </div>
                {/* </div> */}
            

            </div>
            <div className="z-10 item h-auto  pt-6  rounded-md shadow-md text-gray-100 bg-gray-800 hover:bg-white hover:text-black cursor-pointer" data-aos='zoom-in' data-aos-delay='600'>
               
                <div className="image w-14 h-14  mx-4 " >
                    <img src={workplan} className='w-1/2' />
                </div>
                <div className="lg:text-base md:text-base text-base mx-4 font-normal ">
                    <p className="  py-2 tracking-wider text-xl font-semibold ">Make a layout</p>
                    <p className='  pb-4'>I make layouts to have a clear picture of what my client needs.</p>
                </div>
                {/* </div> */}
            

            </div>
            <div className="z-10 item h-auto  pt-6  rounded-md shadow-md text-gray-100 bg-gray-800 hover:bg-white hover:text-black cursor-pointer" data-aos='zoom-in' data-aos-delay='600'>
               
                <div className="image w-14 h-14  mx-4 " >
                    <img src={bracket}/>
                </div>
                <div className="lg:text-base md:text-base text-base mx-4 font-normal ">
                    <p className="  py-2 tracking-wider text-xl font-semibold ">
                    &#60;code /&#62;
                    </p>
                    <p className='  pb-4'>
                        I write codes to interprete the Designs into a dynamic website.
                    </p>
                </div>
                {/* </div> */}
            

            </div>
            <div className="z-10 item h-auto  pt-6  rounded-md shadow-md text-gray-100 bg-gray-800 hover:bg-white hover:text-black cursor-pointer" data-aos='zoom-in' data-aos-delay='600'>
               
                <div className="image w-14 h-14  mx-4 " >
                    <img src={typer} className='w-8/12'/>
                </div>
                <div className="lg:text-base md:text-base text-base mx-4 font-normal ">
                    <p className="  py-2 tracking-wider text-xl font-semibold ">Feedback</p>
                    <p className='  pb-4'>I request for my client's feedback to make sure i delivered as expected</p>
                </div>
                {/* </div> */}
            

            </div>
           
            
         

        </div>
      </div>
      
    </div>
  )
}

export default WorkFlow;