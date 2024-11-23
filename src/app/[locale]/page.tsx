import { Destinations } from '@/components/Home/destinations';
import { Hero } from '@/components/Home/Hero';
import Services from '@/components/Home/services';
import { Travel } from '@/components/Home/travel';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* <CarouselDApiDemo /> */}
      <Destinations />
      <Services />
      <Travel />
    </main>
  )
}
