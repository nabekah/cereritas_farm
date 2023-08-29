"use client";
import Image from "next/image"
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from "react"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import  Link  from 'next/link'

const solutions = [
  {
    name: 'Sustainable Agric',
    description: 'Embrace responsible farming practices that prioritize the environment, quality, and community',
    href: '##',
    icon: IconOne,
  },
  {
    name: 'Farm Tours and Workshops',
    description: 'Immerse yourself in the world of agriculture through informative tours and hands-on workshops',
    href: '##',
    icon: IconTwo,
  },
  {
    name: 'Agro-Consultancy',
    description: 'Benefit from our expertise with tailored advice on crop cultivation, livestock management, and sustainable farming.',
    href: '##',
    icon: IconThree,
  },
]



export default function Landing() {
  return (
    <div className="relative overscroll-contain bg-white md:mb-2 md:pb-8">
      <div className="pb-10 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Farm-Fresh Delights: Explore Our Sustainable Produce
            </h1>
            <p className="mt-4 p-4 text-xl text-gray-500">
              Discover our diverse range of farm-fresh products at Celeritas Farms. From golden grains to succulent meats, our sustainable produce is cultivated with care, ensuring quality and goodness in every bite.
            </p>
            
          
          </div>
        

          <div>
            <div className="mt-4">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className=" lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="relative sm:h-[90%] transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 mt-10">
                  <div className="flex items-center space-x-6 lg:space-x-8 mt-32">
                    <div className="md:grid md:flex-shrink-0 grid-cols-1  gap-y-6 lg:gap-y-8">

                      <div className="h-64 w-44 overflow-hidden rounded-lg">

                        <Image
                          src="/p1.jpg"
                          alt="d"
                          width={352}
                          height={512}

                          className="h-full w-full object-cover object-center"
                        />


                      </div>

                      <div className="h-64 w-44 overflow-hidden rounded-lg">


                        <Image
                          src="/p2.jpg"
                          alt="e"
                          width={352}
                          height={512}
                          className="h-full w-full object-cover object-center"
                        />

                      </div>
                    </div>
                    <div className="md:grid md:flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/p3.jpg"
                          alt=""
                          width={352}
                          height={512}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/p4.jpg"
                          alt=""
                          width={352}
                          height={512}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/p5.jpg"
                          alt=""
                          width={352}
                          height={512}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="md:grid md:flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/p6.jpg"
                          alt=""
                          width={352}
                          height={512}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">

                        <Image
                          src="/p7.jpg"
                          alt=""
                          width={352}
                          height={512}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Now
              </a> */}
              <div className=" absolute top-[30%] md:top-[71%] bottom-2 w-full max-w-sm px-4">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button as="button"
                      className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md bg-orange-500 px-3 py-2 mt-3 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span>View our services</span>
                      <ChevronDownIcon
                        className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-1 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                              >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12 ">
                                  <item.icon aria-hidden="true" />
                                </div>
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="bg-gray-50 p-4">
                            <a
                              href="##"
                              className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                              <span className="flex items-center">
                                <span className="text-sm font-medium text-gray-900">
                                  Documentation
                                </span>
                              </span>
                              <span className="block text-sm text-gray-500">
                                Start integrating products and tools
                              </span>
                            </a>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}

