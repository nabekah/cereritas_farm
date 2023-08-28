'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import coverimge from 'public/heroCover5.jpg'


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative isolate overflow-hidden bg-white p-0 ">
      
      <Image className=' absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center'
       src={coverimge}
       alt="cover image"
       
       
      /> 
      
      <div className="relative px-6 lg:pt-1 lg:px-8 items-center ">
      

     
        
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            
            
          </div>
          <div className=" sticky top-20 w-[100%] p-1 justify-center text-center items-center border-1 backdrop-blur-md rounded-md">
            <h1 className="m-6 text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
            Welcome to Celeritas Farms
            </h1>
            <p className="m-6 mt-10 p-3 text-lg leading-8 text-gray-200 items-center">
            where nature thrives, and abundance flourishes. Our sustainable agriculture nurtures communities, respects the environment, and grows a brighter future. 
            </p>
            <div className="m-8 mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join us today!
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-200">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
      </div>
      
    </div>
  )
}
