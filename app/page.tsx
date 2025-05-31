import { Hero } from '@/components/hero';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Services } from '@/components/services';
import { Gallery } from '@/components/gallery';
import { Calculator } from '@/components/calculator';
import { Reviews } from '@/components/reviews';
import { Stats } from '@/components/stats';
import { Faq } from '@/components/faq';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <Gallery />
      <Calculator />
      <Reviews />
      <Stats />
      <Faq />
      <Contact />
    </>
  );
}