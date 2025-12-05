import AboutSection from "@/components/About";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import EducationSection from "@/components/EducationSection";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TechStack />
      <Projects />
      <Achievements />
      <EducationSection />
      <Contact />
    </div>
  );
}
