/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Image from "next/image"
import Link from "next/link"
const products = [
    
  {
    id: 1,
    name: 'Goundnut',
    href: '#',
    imageSrc: '/pp1.jpg',
    imageAlt: "image of crop goundnut",
    price: 'call',
    color: 'per kilo',
  },
  {
    id: 2,
    name: 'Yam',
    href: '#',
    imageSrc: '/pp1.jpg',
    imageAlt: "image of yam.",
    price: 'call',
    color: 'per tuber',
  },
  {
    id: 3,
    name: 'Tiger Nut',
    href: '#',
    imageSrc: '/pp1.jpg',
    imageAlt: "tiger Nut",
    price: 'call',
    color: 'per kilo',
  },
  {
    id: 4,
    name: 'Garden Eggs',
    href: '#',
    imageSrc: '/pp1.jpg',
    imageAlt: "Garden eggs",
    price: 'call',
    color: 'per kilo',
  },

  {
    id: 5,
    name: 'Snail',
    href: '#',
    imageSrc: '/pp1.jpg',
    imageAlt: "Snail",
    price: 'call',
    color: 'per kilo',
  },
  {
    id: 6,
    name: 'Mushroom',
    href: '#',
    imageSrc: '/pp1.jpg',
    imageAlt: "Mushroom",
    price: 'call',
    color: 'per kilo',
  },
  {
    id: 7,
    name: 'Tomatoes',
    href: '#',
    imageSrc: '/pp1.jpg',
    imageAlt: "Tomatoes",
    price: '$35',
    color: 'per kilo',
  },
  {
    id: 8,
    name: 'Green Pepper',
    href: '#',
    imageSrc: '/pp1.jpg',
    imageAlt: "green Pepper",
    price: '$35',
    color: 'Black',
  },
    // More products...
  ]
  
  export default function Products() {
    return (
      <div className="bg-white md:pt-14 mt-8">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Taste Nature Bounty</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    height={912}
                    width={660}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  