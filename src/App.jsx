import Contacts from "./Componenets/Contacts";
import Experience from "./Componenets/Experience";
import Hero from "./Componenets/Hero";
import Ishanbar from "./Componenets/Ishanbar";
import Projects from "./Componenets/Projects";
import Testimonial from "./Componenets/Testimonial";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-30 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div>
      </div>
      <div className="container mx-auto px-8 ">
        <Ishanbar />
        <Hero />
        <Testimonial />
        <Projects />
        <Experience />
        <Contacts />
      </div>
    </div>
  );
};

export default App;
