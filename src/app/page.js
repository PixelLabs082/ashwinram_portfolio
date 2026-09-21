import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Case from '@/components/sections/Case';
import Work from '@/components/sections/Work';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Contact from '@/components/sections/Contact';

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Case />
      <Work />
      <Services />
      <Process />
      <Contact />
    </main>
  );
}
