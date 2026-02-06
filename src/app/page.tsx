import DarkCardContainer from "@/components/DarkCardContainer";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navbar";
import ProfessionalTraining from "@/components/ProfessionalTrainingSection";
import ProfileSection from "@/components/ProfileSection";
import Projects from "@/components/ProjectsSection";
import ReachOut from "@/components/ReachOutSection";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <GlobalBackground />
      <HeroSection />
      <DarkCardContainer>
        <ProfileSection />
        <Projects />
        <ProfessionalTraining />
        <ReachOut />
      </DarkCardContainer>
      <Footer />
    </main>
  );
}
