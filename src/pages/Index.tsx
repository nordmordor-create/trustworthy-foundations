import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Projects from "@/components/Projects";
import FinishingOptions from "@/components/FinishingOptions";
import Portfolio from "@/components/Portfolio";
import Certificates from "@/components/Certificates";
import SocialMedia from "@/components/SocialMedia";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Approach />
        <Projects />
        <FinishingOptions />
        <Portfolio />
        <Certificates />
        <SocialMedia />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
