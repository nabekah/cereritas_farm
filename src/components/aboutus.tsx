import Link from "next/link"
import Image from "next/image"
import Temp from "./temp"
const links = [
    { name: 'Our Story', href: '#' , Description:'Founded in 2022, Celeritas Farms started as a humble family-owned farm with a vision to create a difference in the agricultural landscape. Over the years, we have grown into a dynamic and forward-thinking organization, embracing modern technology and responsible farming methods'},
    { name: 'Our Philosophy', href: '#', Description:'At the heart of our operations lies a deep-rooted respect for nature and its resources. We believe that by harnessing the power of nature and adopting sustainable practices, we can achieve a harmonious balance between productivity and ecological preservation.'  },
    { name: 'Our Commitment', href: '#' },
    { name: 'Why Choose Celeritas Farms?', href: '#' },
  ]
  const stats = [
    { name: 'Rabbit', value: '12' },
    { name: 'Poultry', value: '300+' },
    { name: 'Fish', value: '40' },
    { name: 'Tomatoes', value: 'Unlimited' },
  ]

  
  
  export default function Aboutus() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="/aboutwp.avif"
          width={2830} 
          height={1500} 
          alt="about bg image"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            At Celeritas Farms, we are a leading agricultural enterprise dedicated to sustainable farming practices and the production of high-quality farm products. With a strong commitment to excellence, innovation, and community empowerment, we aim to make a positive impact on food security, environmental conservation, and rural development.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            {/* <div className=" mx-1"> */}
              {/* {links.map((link) => (
                <Link key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))} */}
            <Temp />
            {/* </div> */}
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  