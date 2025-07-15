
import { HeroSection } from "@/components/sections/hero-section";
import Tools from "@/components/sections/tools-technologies";
import {TimelineSection } from "@/components/sections/timeline-section";
import { ProjectSection } from "@/components/sections/projects-section";
import AboutMe from "@/components/sections/about-me";
import ContactForm from "@/components/sections/contact-form";
import BlogPage from "./blog/page";

export default function Home() {
  return (
    <main className=" px-2 py-2">
      <HeroSection />
      <AboutMe/>
   <TimelineSection/>
      <Tools/>
     <ProjectSection/>
     <BlogPage/>
     <ContactForm/>
     
      
    </main>
  );
}
