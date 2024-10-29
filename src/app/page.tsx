import Landing from "./pages/Home";
import Projects from "./pages/Projects";
import Partphoto from "./pages/partphoto";
import SelfIntro from "./pages/AboutMe";
import TechStacks from "./pages/TechStacks";
import { ContactUs } from "./pages/Contact";

export default function Home() {
  return (
    <div className='bg-black overflow-hidden'>
      <Landing/>
      <SelfIntro/>
      <TechStacks/>
      <Projects/>
      <Partphoto/>
      <ContactUs/>
    </div>
  );
}
