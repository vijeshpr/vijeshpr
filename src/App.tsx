import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProfessionalHighlights from "./components/ProfessionalHighlights";
import About from "./components/About";
import Expertise from "./components/Expertise";
import ExperienceTimeline from "./components/ExperienceTimeline";
import RCUExperience from "./components/RCUExperience";
import CareerJourney from "./components/CareerJourney";
import EducationCertifications from "./components/EducationCertifications";
import CareerObjective from "./components/CareerObjective";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-paper dark:bg-night text-ink dark:text-paper transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <ProfessionalHighlights />
        <About />
        <Expertise />
        <ExperienceTimeline />
        <RCUExperience />
        <CareerJourney />
        <EducationCertifications />
        <CareerObjective />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
