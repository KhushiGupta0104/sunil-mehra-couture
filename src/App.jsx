import { useState, useEffect } from "react";
import "@/index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import OverlayMenu from "@/components/OverlayMenu";
import Hero from "@/components/Hero";
import Wardrobe from "@/components/Wardrobe";
import Atelier from "@/components/Atelier";
import Featured from "@/components/Featured";
import Gallery from "@/components/Gallery";
import Designer from "@/components/Designer";
import Manifesto from "@/components/Manifesto";
import Editorial from "@/components/Editorial";
import Salons from "@/components/Salons";
import Footer from "@/components/Footer";
import WardrobeCategoryDetail from "@/components/WardrobeCategoryDetail";
import SearchOverlay from "@/components/SearchOverlay";

function ScrollToHash() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                const timer = setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
                return () => clearTimeout(timer);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}

const PageLayout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <div className="bg-[var(--bone)] min-h-screen flex flex-col justify-between" data-testid="page-layout">
            <Navbar
                menuOpen={menuOpen}
                onMenuOpen={() => setMenuOpen(true)}
                onSearchOpen={() => setSearchOpen(true)}
            />
            <OverlayMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
            <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

            <main className="flex-1">
                {children}
            </main>

            <Footer />
        </div>
    );
};

const Home = () => {
    return (
        <PageLayout>
            <Hero />
            <Featured />
            <Designer />
            <Manifesto />
            <Salons />
        </PageLayout>
    );
};

const WardrobePage = () => {
    return (
        <PageLayout>
            <Wardrobe />
        </PageLayout>
    );
};

const AtelierPage = () => {
    return (
        <PageLayout>
            <Atelier />
        </PageLayout>
    );
};

const GalleryPage = () => {
    return (
        <PageLayout>
            <Gallery />
        </PageLayout>
    );
};

const EditorialPage = () => {
    return (
        <PageLayout>
            <Editorial />
        </PageLayout>
    );
};

function App() {
    return (
        <BrowserRouter>
            <ScrollToHash />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wardrobe" element={<WardrobePage />} />
                <Route path="/wardrobe/:categorySlug" element={<PageLayout><WardrobeCategoryDetail /></PageLayout>} />
                <Route path="/wardrobe/:categorySlug/:subCategorySlug" element={<PageLayout><WardrobeCategoryDetail /></PageLayout>} />
                <Route path="/atelier" element={<AtelierPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/editorial" element={<EditorialPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

