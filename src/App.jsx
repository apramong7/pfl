import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-bg-dark overflow-x-hidden">
        <div
          className="relative bg-hero-pattern bg-no-repeat bg-top 
                     bg-contain w-full min-w-[100vw] aspect-[1920/1080] "
        >
          <Navbar />
          <div className="absolute inset-0 flex">
            <section
              className="ml-auto w-[55vw] lg:mt-12 md:mt-10 sm:mt-8 xs:mt-7 mt-6
                         sm:px-2 lg:px-8 md:px-6 px-2"
            >
              <Hero />
            </section>
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
