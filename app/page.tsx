import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Experience } from "@/components/Experience";
import { Capabilities } from "@/components/Capabilities";
import { Future } from "@/components/Future";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Journey />
        <Experience />
        <Capabilities />
        <Future />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
