import { useState } from "react";
import "@/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import OverlayMenu from "@/components/OverlayMenu";
import Hero from "@/components/Hero";
import Wardrobe from "@/components/Wardrobe";
import Atelier from "@/components/Atelier";
import Featured from "@/components/Featured";
import Manifesto from "@/components/Manifesto";
import Editorial from "@/components/Editorial";
import Salons from "@/components/Salons";
import Footer from "@/components/Footer";

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-[var(--bone)]" data-testid="home-page">
            <Navbar
                menuOpen={menuOpen}
                onMenuOpen={() => setMenuOpen(true)}
            />
            <OverlayMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

            <main>
                <Hero />
                <Wardrobe />
                <Atelier />
                <Featured />
                <Manifesto />
                <Editorial />
                <Salons />
            </main>

            <Footer />
        </div>
    );
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
