import Contact from "@components/landing_page/contact";
import Customer from "@components/landing_page/customer";
import Hero from "@components/landing_page/hero";
import Process from "@components/landing_page/process";
import Timeline from "@components/landing_page/timeline";
import Why from "@components/landing_page/why";


export default function Home() {
  return (
    <main className="w-full h-full max-w-[68em] p-3 m-auto max-md:max-w-full">
      <Hero/>
      <Process/>
      <Why/>
      <Timeline/>
      <Customer/>
      <Contact/>
    </main>
  );
}
