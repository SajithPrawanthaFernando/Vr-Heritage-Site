import AIGuides from "../components/AIGuides";
import CustomCharacters from "../components/CustomCharacters";
import Discovery from "../components/Discovery";
import Hero from "../components/Hero";
import TemporalGallery from "../components/PresentAndPast";
import SessionReporting from "../components/SessionReporting";
import Testimonials from "../components/Testimonials";
import VRExperience from "../components/VRExperience";

export default function Home() {
  return (
    <main>
      <Hero />
      <Discovery />
      <VRExperience />
      <TemporalGallery />
      <AIGuides />
      <CustomCharacters />
      <SessionReporting />
      <Testimonials />
    </main>
  );
}
