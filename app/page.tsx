import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { FeaturedDishes } from '@/components/featured-dishes'
import { Menu } from '@/components/menu'
import { SpecialOffers } from '@/components/special-offers'
import { Testimonials } from '@/components/testimonials'
import { About } from '@/components/about'
import { ChefShowcase } from '@/components/chef-showcase'
import { Gallery } from '@/components/gallery'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <Menu />
      <SpecialOffers />
      <Testimonials />
      <About />
      <ChefShowcase />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
