import Image from 'next/image'
import Landing from '@/components/landing'
import Products from '@/components/Products'
import Contactus from '@/components/Contactus'
import Hero from '@/components/Hero'
import Aboutus from '@/components/aboutus'

export default function Home() {
  return (
    
    <main>
      <Hero />
      <Landing />
      <Products />
      <Aboutus />
      <Contactus />


    </main>
  )
}
