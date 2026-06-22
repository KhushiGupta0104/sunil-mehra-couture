import { useState, useEffect, lazy, Suspense } from "react";
import "@/index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import OverlayMenu from "@/components/OverlayMenu";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Designer from "@/components/Designer";
import Manifesto from "@/components/Manifesto";
import Salons from "@/components/Salons";
import OccasionEdit from "@/components/OccasionEdit";
import ShopTheLook from "@/components/ShopTheLook";
import BespokeJourney from "@/components/BespokeJourney";
import Footer from "@/components/Footer";
import SearchOverlay from "@/components/SearchOverlay";

// Lazy-loaded pages
const Wardrobe = lazy(() => import("@/components/Wardrobe"));
const Atelier = lazy(() => import("@/components/Atelier"));
const Gallery = lazy(() => import("@/components/Gallery"));
const Editorial = lazy(() => import("@/components/Editorial"));
const WardrobeCategoryDetail = lazy(() => import("@/components/WardrobeCategoryDetail"));

// Quiet luxury loader fallback
const PageLoader = () => (
    <div className="min-h-screen bg-[var(--bone)] flex items-center justify-center">
        <div className="font-luxe text-[10px] uppercase tracking-[0.4em] text-[var(--ink-soft)] animate-pulse">
            Sunil Mehra
        </div>
    </div>
);


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
            <OccasionEdit />
            <ShopTheLook />
            <BespokeJourney />
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
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/wardrobe" element={<WardrobePage />} />
                    <Route path="/wardrobe/:categorySlug" element={<PageLayout><WardrobeCategoryDetail /></PageLayout>} />
                    <Route path="/wardrobe/:categorySlug/:subCategorySlug" element={<PageLayout><WardrobeCategoryDetail /></PageLayout>} />
                    <Route path="/atelier" element={<AtelierPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/editorial" element={<EditorialPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;

