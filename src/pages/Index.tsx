import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Projects from "@/components/Projects";
import Trust from "@/components/Trust";
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
        <Trust />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
