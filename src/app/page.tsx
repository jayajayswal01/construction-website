import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/component/hero/Hero";
import About from "../component/about/About";
import Project from "@/component/project/Project";
import Services from "@/component/services/Services";
import Contact from "@/component/contact/Contact";
import Testimonial from "@/component/testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Project />
      <Testimonial />
      <Contact />

      
           </div>
  );
}
