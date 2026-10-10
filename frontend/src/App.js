import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallBar } from "@/components/layout/StickyCallBar";

import Home from "@/pages/Home";
import Guepes from "@/pages/Guepes";
import FrelonsEuropeens from "@/pages/FrelonsEuropeens";
import FrelonsAsiatiques from "@/pages/FrelonsAsiatiques";
import Zones from "@/pages/Zones";
import Tarifs from "@/pages/Tarifs";
import Videos from "@/pages/Videos";
import Contact from "@/pages/Contact";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <HelmetProvider>
      <div className="App grain min-h-screen bg-background">
        <BrowserRouter>
          <SmoothScroll>
            <ScrollToTop />
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/guepes" element={<Guepes />} />
                <Route path="/frelons-europeens" element={<FrelonsEuropeens />} />
                <Route path="/frelons-asiatiques" element={<FrelonsAsiatiques />} />
                <Route path="/zones-intervention" element={<Zones />} />
                <Route path="/tarifs" element={<Tarifs />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <StickyCallBar />
          </SmoothScroll>
        </BrowserRouter>
        <Toaster position="top-center" theme="dark" richColors />
      </div>
    </HelmetProvider>
  );
}

export default App;
