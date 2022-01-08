import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import bracket from './../images/brackets.svg'
import reactlogo from './../images/react-logo.svg'
import digital from './../images/digital-marketing.svg'


const MyServices = () => {
    useEffect(() => {
          
      AOS.init({})
  }, []);
  return (
    <div className='w-full bg-about-bg h-auto pb-10 overflow-hidden' id='services'>
      <div className="lg:max-w-7xl  mx-auto pt-7 ">
        <div className="text-center">
          <h1 className=" text-xl text-purple tracking-wide font-semibold py-5">What I enjoy doing<p className='h-1 w-14 mb-0.5 bg-purple inline-block' ></p></h1>
          <h1 className=" text-2xl text-gray-100 tracking-wide font-semibold pb-5 capitalize">my services</h1>
        </div>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8 flex justify-around sm:px-28 px-8 md:px-10 lg:px-10 w-full ">
          {/* card 1 */}
          <div className="item h-full  pt-4 text-gray-100 rounded-md shadow-md bg-gray-800 hover:bg-white cursor-pointer hover:text-black" data-aos='flip-left' data-aos-delay='250' data-aos-duration='1000'>
            {/* <div className="contents mx-8 w-full bg-gray-800 h-auto"> */}
              <div className="image w-20 h-20  mx-4">
                <img src={reactlogo} className='h-full w-full'/>
              </div>
              <div className="lg:text-base md:text-base text-lg mx-4 font-normal">
                <p className=" py-4 tracking-wider  font-semibold ">Website Development</p>
                <p className=' pb-10'>I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts.</p>
              </div>
            {/* </div> */}
            
            <div className='w-full h-4 bg-purple rounded-b-md'></div>

            
          </div>
          
          {/* // card-2 */}
          <div className="item h-full  pt-4 text-gray-100 rounded-md shadow-md bg-gray-800 hover:bg-white cursor-pointer hover:text-black" data-aos='flip-left' data-aos-delay='250' data-aos-duration='1000'>
            {/* <div className="contents mx-8 w-full bg-gray-800 h-auto"> */}
              <div className="image w-20 h-20  mx-4">
              <img src={bracket} className='h-full w-full'/>

              </div>
              <div className="lg:text-base md:text-base text-lg mx-4 font-normal">
                <p className=" py-4 tracking-wider  font-semibold ">Search Engine Optimization</p>
                <p className=' pb-10'>I find the most popular and relevant keywords used in search engine queries and insert them into websites, helping search engines find those sites and display them to web users. </p>
              </div>
            {/* </div> */}
            
            <div className='w-full h-4 bg-purple rounded-b-md'></div>

            
          </div>

          {/* card-3 */}
          <div className="item h-full  pt-4 text-gray-100 rounded-md shadow-md bg-gray-800 hover:bg-white cursor-pointer hover:text-black" data-aos='flip-left' data-aos-delay='250' data-aos-duration='1000'>
            {/* <div className="contents mx-8 w-full bg-gray-800 h-auto"> */}
              <div className="image w-20 h-20  mx-4">
              <img src={digital} className='h-full w-full'/>

              </div>
              <div className="lg:text-base md:text-base text-lg mx-4 font-normal">
                <p className=" py-4 tracking-wider  font-semibold ">Project Management</p>
                <p className=' pb-10'>I use tools such as Agile and SCRUM to manage tasks, delegate task and monitor progress to deliver projects on time with the desired results with a specific budget.</p>
              </div>
            {/* </div> */}
            
            <div className='w-full h-4 bg-purple rounded-b-md'></div>

            
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default MyServices


// import React, { useState } from 'react'
// import { Tab } from '@headlessui/react'

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   let [categories] = useState({
//     Recent: [
//       {
//         id: 1,
//         title: 'Does drinking coffee make you smarter?',
//         date: '5h ago',
//         commentCount: 5,
//         shareCount: 2,
//       },
//       {
//         id: 2,
//         title: "So you've bought coffee... now what?",
//         date: '2h ago',
//         commentCount: 3,
//         shareCount: 2,
//       },
//     ],
//     Popular: [
//       {
//         id: 1,
//         title: 'Is tech making coffee better or worse?',
//         date: 'Jan 7',
//         commentCount: 29,
//         shareCount: 16,
//       },
//       {
//         id: 2,
//         title: 'The most innovative things happening in coffee',
//         date: 'Mar 19',
//         commentCount: 24,
//         shareCount: 12,
//       },
//     ],
//     Trending: [
//       {
//         id: 1,
//         title: 'Ask Me Anything: 10 answers to your questions about coffee',
//         date: '2d ago',
//         commentCount: 9,
//         shareCount: 5,
//       },
//       {
//         id: 2,
//         title: "The worst advice we've ever heard about coffee",
//         date: '4d ago',
//         commentCount: 1,
//         shareCount: 2,
//       },
//     ],
//   })

//   return (
//     <div className="w-screen px-2 py-16 sm:px-0 bg-red-100">
//       <Tab.Group>
//         <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
//           {Object.keys(categories).map((category) => (
//             <Tab
//               key={category}
//               className={({ selected }) =>
//                 classNames(
//                   'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
//                   'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
//                   selected
//                     ? 'bg-white shadow'
//                     : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
//                 )
//               }
//             >
//               {category}
//             </Tab>
//           ))}
//         </Tab.List>
//         <Tab.Panels className="mt-2">
//           {Object.values(categories).map((posts, idx) => (
//             <Tab.Panel
//               key={idx}
//               className={classNames(
//                 'bg-white rounded-xl p-3',
//                 'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 '
//               )}
//             >
//               <ul>
//                 {posts.map((post) => (
//                   <li
//                     key={post.id}
//                     className="relative p-3 rounded-md hover:bg-coolGray-100"
//                   >
//                     <h3 className="text-sm font-medium leading-5">
//                       {post.title}
//                     </h3>

//                     <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
//                       <li>{post.date}</li>
//                       <li>&middot;</li>
//                       <li>{post.commentCount} comments</li>
//                       <li>&middot;</li>
//                       <li>{post.shareCount} shares</li>
//                     </ul>

//                     <a
//                       href="#"
//                       className={classNames(
//                         'absolute inset-0 rounded-md',
//                         'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400'
//                       )}
//                     />
//                   </li>
//                 ))}
//               </ul>
//             </Tab.Panel>
//           ))}
//         </Tab.Panels>
//       </Tab.Group>
//     </div>
//   )
// }

