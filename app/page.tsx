import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Services } from "@/sections/Services";
import { Skills } from "@/sections/Skills";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}
