import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import local images
import img3721 from "@/assets/images/Sunil Mehra_3721.jpg";
import img0493 from "@/assets/images/Sunil Mehra  0493.jpg";
import img0904 from "@/assets/images/Sunil Mehra_0904.jpg";
import img9371 from "@/assets/images/IMG9371 copy.jpg";
import img0246 from "@/assets/images/Sunil Mehra  0246.jpg";
import img8657 from "@/assets/images/IMG8657 copy.jpg";
import img8871 from "@/assets/images/IMG8871 copy.jpg";
import img9115 from "@/assets/images/IMG9115 copy.jpg";
import img9488 from "@/assets/images/IMG9488 copy.jpg";
import img0039 from "@/assets/images/Sunil Mehra_0039.jpg";
import img2281 from "@/assets/images/Sunil Mehra_2281.jpg";
import img0553 from "@/assets/images/Sunil Mehra  0553.jpg";
import img0966 from "@/assets/images/Sunil Mehra  0966.jpg";
import img6602 from "@/assets/images/Sunil Mehra_6602.jpg";

import suitWhite from "@/assets/images/suit_white.jpg";
import suit1 from "@/assets/images/IMG8912 copy.jpg";
import suit2 from "@/assets/images/Sunil Mehra  1512.jpg";
import suit3 from "@/assets/images/Sunil Mehra  1701.jpg";
import suit4 from "@/assets/images/Sunil Mehra  1737.jpg";
import suit5 from "@/assets/images/Sunil Mehra  1867.jpg";
import suit6 from "@/assets/images/Sunil Mehra_6910.jpg";

import jacket1 from "@/assets/images/Sunil Mehra_6586 - Copy.jpg";
import jacket2 from "@/assets/images/066A0578.jpg";
import jacket3 from "@/assets/images/Sunil Mehra_9011.jpg";
import jacket4 from "@/assets/images/Sunil Mehra_6620 - Copy.jpg";
import jacket5 from "@/assets/images/Sunil Mehra_9112 - Copy.jpg";
import jacket6 from "@/assets/images/Sunil Mehra_9262 - Copy.jpg";

import winter1 from "@/assets/images/Sunil Mehra 0932.jpg";
import winter2 from "@/assets/images/Sunil Mehra 0156.jpg";
import winter3 from "@/assets/images/Sunil Mehra 0239.jpg";
import winter4 from "@/assets/images/Sunil Mehra 0278.jpg";
import winter5 from "@/assets/images/Sunil Mehra 0862.jpg";
import winter6 from "@/assets/images/Sunil Mehra 0628.jpg";

// Accessories imports
// Bags
import bag1 from "@/assets/images/Accessories/Bags/Sunil Mehra_7074.jpg";
import bag2 from "@/assets/images/Accessories/Bags/IMG_9405 copy 2 - Copy.jpg";
import bag3 from "@/assets/images/Accessories/Bags/IMG_9408 copy 2 - Copy.jpg";
import bag4 from "@/assets/images/Accessories/Bags/IMG_9621 copy 2 - Copy.jpg";
import bag5 from "@/assets/images/Accessories/Bags/IMG_9626 copy 2 - Copy.jpg";
import bag6 from "@/assets/images/Accessories/Bags/Sunil Mehra_6602 - Copy.jpg";
import bag7 from "@/assets/images/Accessories/Bags/Sunil Mehra_7053 - Copy.jpg";
import bag8 from "@/assets/images/Accessories/Bags/Sunil Mehra_8295.jpg";

// Broach
import broach1 from "@/assets/images/Accessories/Broach/IMG_9595 copy 2 - Copy.jpg";
import broach2 from "@/assets/images/Accessories/Broach/IMG_9600 copy 2 - Copy.jpg";
import broach3 from "@/assets/images/Accessories/Broach/IMG_9601 copy 2 - Copy.jpg";
import broach4 from "@/assets/images/Accessories/Broach/IMG_9611 copy 2 - Copy.jpg";

// Brooks Lace up
import lace1 from "@/assets/images/Accessories/Brooks Lace up/IMG_9312 copy 2 - Copy.jpg";
import lace2 from "@/assets/images/Accessories/Brooks Lace up/IMG_9337 copy 2 - Copy.jpg";
import lace3 from "@/assets/images/Accessories/Brooks Lace up/IMG_9709 copy 2 - Copy.jpg";

// Loafers
import loafer1 from "@/assets/images/Accessories/Loafers/IMG_9284 copy 2 - Copy.jpg";
import loafer2 from "@/assets/images/Accessories/Loafers/IMG_9353 copy 2 - Copy.jpg";
import loafer3 from "@/assets/images/Accessories/Loafers/IMG_9361 copy 2 - Copy.jpg";
import loafer4 from "@/assets/images/Accessories/Loafers/IMG_9385 copy 2 - Copy.jpg";
import loafer5 from "@/assets/images/Accessories/Loafers/IMG_9686 copy 2 - Copy.jpg";
import loafer6 from "@/assets/images/Accessories/Loafers/IMG_9719 copy 2 - Copy.jpg";

// Monks
import monk1 from "@/assets/images/Accessories/Monks/IMG_9521 copy 2 - Copy.jpg";
import monk2 from "@/assets/images/Accessories/Monks/IMG_9541-Enhanced-NR copy 2 - Copy.jpg";
import monk3 from "@/assets/images/Accessories/Monks/IMG_9728 copy 2 - Copy.jpg";
import monk4 from "@/assets/images/Accessories/Monks/IMG_9734 copy 2 - Copy.jpg";

// Ostrich Leather Wallet
import wallet1 from "@/assets/images/Accessories/Ostrich Leather Wallet/IMG_9738 copy 2.jpg";
import wallet2 from "@/assets/images/Accessories/Ostrich Leather Wallet/IMG_9749 copy 2 - Copy.jpg";
import wallet3 from "@/assets/images/Accessories/Ostrich Leather Wallet/IMG_9750 copy 2 - Copy.jpg";
import wallet4 from "@/assets/images/Accessories/Ostrich Leather Wallet/IMG_9751 copy 2 - Copy.jpg";

// Sneakers
import sneaker1 from "@/assets/images/Accessories/Sneakers/IMG_9420 copy 2 - Copy.jpg";
import sneaker2 from "@/assets/images/Accessories/Sneakers/IMG_9448 copy 2 - Copy.jpg";
import sneaker3 from "@/assets/images/Accessories/Sneakers/IMG_9469 copy - Copy.jpg";
import sneaker4 from "@/assets/images/Accessories/Sneakers/IMG_9491 copy 2 - Copy.jpg";
import sneaker5 from "@/assets/images/Accessories/Sneakers/IMG_9692 copy 2 - Copy.jpg";
import sneaker6 from "@/assets/images/Accessories/Sneakers/IMG_9698 copy 2 - Copy.jpg";
import sneaker7 from "@/assets/images/Accessories/Sneakers/IMG_9726 copy 2 - Copy.jpg";

// New Bandhagla Sets & Indo-western imports
import b1 from "@/assets/images/Bandhagla/066a0317.jpg";
import b2 from "@/assets/images/Bandhagla/066a0595.jpg";
import b3 from "@/assets/images/Bandhagla/img9367_copy.jpg";
import b4 from "@/assets/images/Bandhagla/img9702_copy.jpg";
import b5 from "@/assets/images/Bandhagla/sunil_mehra_0738.jpg";
import b6 from "@/assets/images/Bandhagla/sunil_mehra_1043.jpg";
import b7 from "@/assets/images/Bandhagla/sunil_mehra_1962.jpg";
import b8 from "@/assets/images/Bandhagla/sunil_mehra_3591.jpg";

// New Kurta Sets imports
import k1 from "@/assets/images/KurtaSets/img8974_copy.jpg";
import k2 from "@/assets/images/KurtaSets/img9136_copy.jpg";
import k3 from "@/assets/images/KurtaSets/img9176_copy.jpg";
import k4 from "@/assets/images/KurtaSets/sunil_mehra_0711.jpg";
import k5 from "@/assets/images/KurtaSets/sunil_mehra_0725.jpg";
import k6 from "@/assets/images/KurtaSets/sunil_mehra_0740.jpg";
import k7 from "@/assets/images/KurtaSets/sunil_mehra_0935.jpg";
import k8 from "@/assets/images/KurtaSets/sunil_mehra_0943.jpg";
import k9 from "@/assets/images/KurtaSets/sunil_mehra_0964.jpg";
import k10 from "@/assets/images/KurtaSets/sunil_mehra_1147.jpg";
import k11 from "@/assets/images/KurtaSets/sunil_mehra_1177.jpg";
import k12 from "@/assets/images/KurtaSets/sunil_mehra_1217.jpg";
import k13 from "@/assets/images/KurtaSets/sunil_mehra_1298.jpg";
import k14 from "@/assets/images/KurtaSets/sunil_mehra_1318.jpg";
import k15 from "@/assets/images/KurtaSets/sunil_mehra_1338.jpg";
import k16 from "@/assets/images/KurtaSets/sunil_mehra_2539.jpg";
import k17 from "@/assets/images/KurtaSets/sunil_mehra_8328.jpg";
import k18 from "@/assets/images/KurtaSets/sunil_mehra_8350.jpg";
import k19 from "@/assets/images/KurtaSets/sunil_mehra_8371.jpg";
import k20 from "@/assets/images/KurtaSets/sunil_mehra_9283.jpg";
import k21 from "@/assets/images/KurtaSets/sunil_mehra_9295.jpg";
import k22 from "@/assets/images/KurtaSets/sunil_mehra_9334.jpg";
import k23 from "@/assets/images/KurtaSets/sunil_mehra_9406.jpg";


const WARDROBE_DATA = {
    "bandhagala-indo-western": {
        name: "Bandhagla Sets & Indo-western",
        edit: "Tailored Royalty",
        description: "Sartorial precision meets regal Indian heritage. Clean, structured Bandhgalas and classic Sherwanis crafted from raw silk and wool blends.",
        pieces: [
            { name: "Bandhagla/Indo-western — Piece 01", price: "₹1,85,000", img: b1 },
            { name: "Bandhagla/Indo-western — Piece 02", price: "₹1,95,000", img: b2 },
            { name: "Bandhagla/Indo-western — Piece 03", price: "₹1,75,000", img: b3 },
            { name: "Bandhagla/Indo-western — Piece 04", price: "₹2,25,000", img: b4 },
            { name: "Bandhagla/Indo-western — Piece 05", price: "₹2,45,000", img: b5 },
            { name: "Bandhagla/Indo-western — Piece 06", price: "₹2,10,000", img: b6 },
            { name: "Bandhagla/Indo-western — Piece 07", price: "₹2,35,000", img: b7 },
            { name: "Bandhagla/Indo-western — Piece 08", price: "₹1,95,000", img: b8 }
        ]
    },
    "kurta-sets": {
        name: "Kurta Sets",
        edit: "Quiet Luxury",
        description: "Elevated comfort in pure hand-woven silk and light linen, cut with fluid, graceful lines.",
        pieces: [
            { name: "Kurta Set — Piece 01", price: "₹1,15,000", img: k1 },
            { name: "Kurta Set — Piece 02", price: "₹1,25,000", img: k2 },
            { name: "Kurta Set — Piece 03", price: "₹98,000", img: k3 },
            { name: "Kurta Set — Piece 04", price: "₹1,35,000", img: k4 },
            { name: "Kurta Set — Piece 05", price: "₹1,45,000", img: k5 },
            { name: "Kurta Set — Piece 06", price: "₹1,05,000", img: k6 },
            { name: "Kurta Set — Piece 07", price: "₹1,18,000", img: k7 },
            { name: "Kurta Set — Piece 08", price: "₹1,28,000", img: k8 },
            { name: "Kurta Set — Piece 09", price: "₹1,38,000", img: k9 },
            { name: "Kurta Set — Piece 10", price: "₹1,48,000", img: k10 },
            { name: "Kurta Set — Piece 11", price: "₹1,12,000", img: k11 },
            { name: "Kurta Set — Piece 12", price: "₹1,22,000", img: k12 },
            { name: "Kurta Set — Piece 13", price: "₹1,32,000", img: k13 },
            { name: "Kurta Set — Piece 14", price: "₹1,42,000", img: k14 },
            { name: "Kurta Set — Piece 15", price: "₹95,000", img: k15 },
            { name: "Kurta Set — Piece 16", price: "₹1,08,000", img: k16 },
            { name: "Kurta Set — Piece 17", price: "₹1,24,000", img: k17 },
            { name: "Kurta Set — Piece 18", price: "₹1,34,000", img: k18 },
            { name: "Kurta Set — Piece 19", price: "₹1,44,000", img: k19 },
            { name: "Kurta Set — Piece 20", price: "₹1,19,000", img: k20 },
            { name: "Kurta Set — Piece 21", price: "₹1,29,000", img: k21 },
            { name: "Kurta Set — Piece 22", price: "₹1,39,000", img: k22 },
            { name: "Kurta Set — Piece 23", price: "₹1,49,000", img: k23 }
        ]
    },
    "jawahar-jackets": {
        name: "Jawahar Jacket Sets",
        edit: "Modern Maharaja",
        description: "A timeless Indian silhouette, reimagined. Hand-crafted Nehru jackets and sadris layered for modern elegance.",
        pieces: [
            { name: "Jawahar Jacket — Piece 01", price: "₹1,25,000", img: jacket1 },
            { name: "Jawahar Jacket — Piece 02", price: "₹1,45,000", img: jacket2 },
            { name: "Jawahar Jacket — Piece 03", price: "₹1,35,000", img: jacket3 },
            { name: "Jawahar Jacket — Piece 04", price: "₹1,55,000", img: jacket4 },
            { name: "Jawahar Jacket — Piece 05", price: "₹1,15,000", img: jacket5 },
            { name: "Jawahar Jacket — Piece 06", price: "₹1,65,000", img: jacket6 }
        ]
    },
    "winter-collection": {
        name: "Winter Collection",
        edit: "Princely Silhouettes",
        description: "Premium tailored winter wear. Elegant structured double-breasted coats, trench layers, and rich wool suits.",
        pieces: [
            { name: "Winter Overcoat — Piece 01", price: "₹2,10,000", img: winter1 },
            { name: "Winter Overcoat — Piece 02", price: "₹1,95,000", img: winter2 },
            { name: "Winter Overcoat — Piece 03", price: "₹2,25,000", img: winter3 },
            { name: "Winter Overcoat — Piece 04", price: "₹2,45,000", img: winter4 },
            { name: "Winter Overcoat — Piece 05", price: "₹1,85,000", img: winter5 },
            { name: "Winter Overcoat — Piece 06", price: "₹2,35,000", img: winter6 }
        ]
    },
    suits: {
        name: "Sartorial Suits",
        edit: "Sharply Cut",
        description: "Sharply cut for the modern gentleman. Double-breasted and single-breasted options in wool and silk blends.",
        pieces: [
            { name: "Sartorial Suit — Piece 01", price: "₹1,85,000", img: suitWhite },
            { name: "Sartorial Suit — Piece 02", price: "₹1,95,000", img: suit1 },
            { name: "Sartorial Suit — Piece 03", price: "₹1,75,000", img: suit2 },
            { name: "Sartorial Suit — Piece 04", price: "₹2,10,000", img: suit3 },
            { name: "Sartorial Suit — Piece 05", price: "₹1,65,000", img: suit4 },
            { name: "Sartorial Suit — Piece 06", price: "₹2,25,000", img: suit5 },
            { name: "Sartorial Suit — Piece 07", price: "₹1,95,000", img: suit6 }
        ]
    },
    accessories: {
        name: "Atelier Accessories",
        edit: "Finishing Details",
        description: "Bespoke leather bags, ostrich skin wallets, hand-crafted footwear, and detailed brooches to complete the silhouette.",
        subcategories: [
            { id: "bags", name: "Bags", count: 8, img: bag1, desc: "Bespoke leather travel luggage, portfolios, and daily document cases." },
            { id: "brooches", name: "Brooches", count: 4, img: broach1, desc: "Intricately detailed gold crests, silver pins, and maison emblems." },
            { id: "lace-ups", name: "Lace-ups", count: 3, img: lace1, desc: "Hand-crafted formal oxfords and derbies built from premium skins." },
            { id: "loafers", name: "Loafers", count: 6, img: loafer1, desc: "Sophisticated suede slip-ons, tassel loafers, and heritage penny cuts." },
            { id: "monks", name: "Monks", count: 4, img: monk1, desc: "Classic single and double strap burnished leather monk shoes." },
            { id: "wallets", name: "Wallets", count: 4, img: wallet1, desc: "Bespoke ostrich leather billfolds, cardholders, and travel organizers." },
            { id: "sneakers", name: "Sneakers", count: 7, img: sneaker1, desc: "Minimalist calfskin, textured suede, and premium sport runners." }
        ],
        pieces: [
            // Bags
            { name: "Sartorial Weekender Duffle", price: "₹85,000", subcat: "bags", img: bag1 },
            { name: "Atelier Document Case", price: "₹75,000", subcat: "bags", img: bag2 },
            { name: "Sartorial Travel Bag", price: "₹90,000", subcat: "bags", img: bag3 },
            { name: "Exotic Skin Carryall", price: "₹82,000", subcat: "bags", img: bag4 },
            { name: "Signature Document Case", price: "₹55,000", subcat: "bags", img: bag5 },
            { name: "Classic Leather Portfolio", price: "₹45,000", subcat: "bags", img: bag6 },
            { name: "Sleek Everyday Briefcase", price: "₹68,000", subcat: "bags", img: bag7 },
            { name: "Heritage Travel Duffle", price: "₹95,000", subcat: "bags", img: bag8 },
            
            // Brooches
            { name: "Classic Gold Crest Brooch", price: "₹18,000", subcat: "brooches", img: broach1 },
            { name: "Intricate Silver Brooch", price: "₹15,000", subcat: "brooches", img: broach2 },
            { name: "Maison Emblem Pin", price: "₹12,500", subcat: "brooches", img: broach3 },
            { name: "Atelier Shield Brooch", price: "₹22,000", subcat: "brooches", img: broach4 },

            // Brooks Lace-ups
            { name: "Brooks Oxford — Tan", price: "₹32,500", subcat: "lace-ups", img: lace1 },
            { name: "Brooks Derby — Black", price: "₹29,000", subcat: "lace-ups", img: lace2 },
            { name: "Bespoke Wingtip Lace-up", price: "₹38,000", subcat: "lace-ups", img: lace3 },

            // Loafers
            { name: "Classic Leather Loafer", price: "₹28,500", subcat: "loafers", img: loafer1 },
            { name: "Suede Slip-On Loafer", price: "₹26,000", subcat: "loafers", img: loafer2 },
            { name: "Atelier Tassel Loafer", price: "₹34,000", subcat: "loafers", img: loafer3 },
            { name: "Heritage Penny Loafer", price: "₹31,500", subcat: "loafers", img: loafer4 },
            { name: "Exotic Skin Loafer", price: "₹48,000", subcat: "loafers", img: loafer5 },
            { name: "Sartorial Monk Loafer", price: "₹36,000", subcat: "loafers", img: loafer6 },

            // Monks
            { name: "Double Monk Strap — Tan", price: "₹34,500", subcat: "monks", img: monk1 },
            { name: "Single Monk Strap — Black", price: "₹32,000", subcat: "monks", img: monk2 },
            { name: "Hand-Burnished Monk Strap", price: "₹39,500", subcat: "monks", img: monk3 },
            { name: "Textured Leather Monk", price: "₹36,500", subcat: "monks", img: monk4 },

            // Wallets
            { name: "Ostrich Leather Billfold", price: "₹24,000", subcat: "wallets", img: wallet1 },
            { name: "Exotic Skin Cardholder", price: "₹14,500", subcat: "wallets", img: wallet2 },
            { name: "Heritage Ostrich Wallet", price: "₹26,500", subcat: "wallets", img: wallet3 },
            { name: "Sleek Travel Wallet", price: "₹28,000", subcat: "wallets", img: wallet4 },

            // Sneakers
            { name: "Minimalist Calfskin Sneaker", price: "₹24,500", subcat: "sneakers", img: sneaker1 },
            { name: "Classic White Low-Top", price: "₹22,000", subcat: "sneakers", img: sneaker2 },
            { name: "Atelier Panel Sneaker", price: "₹28,000", subcat: "sneakers", img: sneaker3 },
            { name: "Sartorial Suede Sneaker", price: "₹26,500", subcat: "sneakers", img: sneaker4 },
            { name: "Heritage Textured Sneaker", price: "₹31,000", subcat: "sneakers", img: sneaker5 },
            { name: "Bespoke Sport Sneaker", price: "₹33,500", subcat: "sneakers", img: sneaker6 },
            { name: "Sleek Runner Sneaker", price: "₹29,000", subcat: "sneakers", img: sneaker7 }
        ]
    }
};

export default function WardrobeCategoryDetail() {
    const { categorySlug, subCategorySlug } = useParams();
    const category = WARDROBE_DATA[categorySlug];
    const [selectedPiece, setSelectedPiece] = useState(null);

    if (!category) {
        return (
            <div className="relative bg-[var(--bone)] text-[var(--ink)] min-h-[80vh] w-full flex flex-col items-center justify-center p-8">
                <h2 className="font-display text-3xl mb-4">Category Not Found</h2>
                <p className="text-sm text-[var(--muted)] mb-6">The wardrobe selection you are looking for does not exist.</p>
                <Link to="/wardrobe" className="hairline-link">
                    ← Back to Wardrobe
                </Link>
            </div>
        );
    }

    // Determine context
    const isAccessoriesHub = categorySlug === "accessories" && !subCategorySlug;
    const isSubcategoryDetail = categorySlug === "accessories" && subCategorySlug;

    // Filter subcategory metadata if on a subcategory page
    const subcatInfo = isSubcategoryDetail 
        ? category.subcategories.find(s => s.id === subCategorySlug)
        : null;

    if (isSubcategoryDetail && !subcatInfo) {
        return (
            <div className="relative bg-[var(--bone)] text-[var(--ink)] min-h-[80vh] w-full flex flex-col items-center justify-center p-8">
                <h2 className="font-display text-3xl mb-4">Subcategory Not Found</h2>
                <p className="text-sm text-[var(--muted)] mb-6">The accessories group you are looking for does not exist.</p>
                <Link to="/wardrobe/accessories" className="hairline-link">
                    ← Back to Accessories
                </Link>
            </div>
        );
    }

    // Determine displayed items
    const displayedPieces = isSubcategoryDetail
        ? category.pieces.filter(p => p.subcat === subCategorySlug)
        : category.pieces;

    const handlePrev = (e) => {
        e.stopPropagation();
        const list = displayedPieces;
        const currentIndex = list.findIndex(p => p.img === selectedPiece.img);
        const prevIndex = (currentIndex - 1 + list.length) % list.length;
        setSelectedPiece(list[prevIndex]);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        const list = displayedPieces;
        const currentIndex = list.findIndex(p => p.img === selectedPiece.img);
        const nextIndex = (currentIndex + 1) % list.length;
        setSelectedPiece(list[nextIndex]);
    };

    // Render Accessories Subcategories Landing Hub
    if (isAccessoriesHub) {
        return (
            <div className="relative bg-[var(--bone)] text-[var(--ink)] min-h-screen w-full flex flex-col pt-[76px] sm:pt-[84px] lg:pt-[92px]" data-testid="wardrobe-accessories-hub">
                <div className="max-w-[1500px] mx-auto w-full px-6 sm:px-10 lg:px-14 py-8 lg:py-16">
                    
                    {/* Navigation Breadcrumb */}
                    <div className="mb-10 lg:mb-16">
                        <Link to="/wardrobe" className="font-luxe text-[10px] tracking-[0.25em] uppercase text-[var(--ink-soft)] hover:text-[var(--ink)] transition flex items-center gap-2">
                            <span>←</span> Wardrobe
                        </Link>
                    </div>

                    {/* Sartorial Header Block */}
                    <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24 space-y-4">
                        <span className="eyebrow justify-center !text-[var(--bronze)]">{category.edit}</span>
                        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-[0.05em] uppercase text-[var(--ink)]">
                            {category.name}
                        </h1>
                        <p className="font-italic-serif text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-md mx-auto pt-2">
                            {category.description}
                        </p>
                    </div>

                    {/* Subcategories Hub Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {category.subcategories.map((subcat) => (
                            <Link 
                                key={subcat.id}
                                to={`/wardrobe/accessories/${subcat.id}`}
                                className="group cursor-pointer flex flex-col w-full"
                            >
                                {/* Card Image Container */}
                                <div className="relative overflow-hidden border border-[var(--hairline)] aspect-[3/4] bg-[var(--cream)] shadow-sm">
                                    <img 
                                        src={subcat.img} 
                                        alt={subcat.name} 
                                        loading="lazy"
                                        className="w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                                    />
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="bg-[var(--bone)] text-[var(--ink)] text-[9px] uppercase tracking-[0.25em] font-luxe px-5 py-2.5 border border-[var(--hairline)]">
                                            Explore
                                        </span>
                                    </div>
                                </div>

                                {/* Card Text Details */}
                                <div className="mt-5 flex flex-col w-full">
                                    <div className="flex justify-between items-baseline w-full">
                                        <h3 className="font-luxe text-sm uppercase tracking-[0.15em] text-[var(--ink)] group-hover:text-[var(--bronze)] transition duration-300">
                                            {subcat.name}
                                        </h3>
                                        <span className="font-display text-[10px] tracking-[0.1em] text-[var(--bronze)] font-semibold uppercase">
                                            {subcat.count} {subcat.count === 1 ? 'Item' : 'Items'}
                                        </span>
                                    </div>
                                    <p className="text-[11px] sm:text-xs text-[var(--ink-soft)] leading-relaxed font-light font-body mt-2">
                                        {subcat.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Centered CTA booking block at the bottom */}
                    <div className="mt-24 lg:mt-36 border-t border-[var(--hairline)] pt-16 text-center max-w-xl mx-auto space-y-6">
                        <h3 className="font-display text-xl sm:text-2xl text-[var(--ink)]">
                            Tailored for your presence.
                        </h3>
                        <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed font-light font-body max-w-md mx-auto">
                            Experience our signature fits and consult fabric swatches directly with our tailoring concierges at our Sundar Nagar Salon.
                        </p>
                        <div className="pt-4">
                            <Link 
                                to="/#request-form"
                                className="bg-[var(--bronze)] text-[var(--bone)] hover:bg-[var(--ink)] hover:text-white px-10 py-4 text-[10px] tracking-[0.3em] font-luxe uppercase transition-all duration-300 inline-block"
                            >
                                Request Fitting Appointment
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    // Render Subcategory Detail Grid OR Standard Category Grid
    return (
        <div className="relative bg-[var(--bone)] text-[var(--ink)] min-h-screen w-full flex flex-col pt-[76px] sm:pt-[84px] lg:pt-[92px]" data-testid="wardrobe-category-page">
            <div className="max-w-[1500px] mx-auto w-full px-6 sm:px-10 lg:px-14 py-8 lg:py-16">
                
                {/* Navigation Breadcrumb */}
                <div className="mb-10 lg:mb-16">
                    {isSubcategoryDetail ? (
                        <Link to="/wardrobe/accessories" className="font-luxe text-[10px] tracking-[0.25em] uppercase text-[var(--ink-soft)] hover:text-[var(--ink)] transition flex items-center gap-2">
                            <span>←</span> Accessories
                        </Link>
                    ) : (
                        <Link to="/wardrobe" className="font-luxe text-[10px] tracking-[0.25em] uppercase text-[var(--ink-soft)] hover:text-[var(--ink)] transition flex items-center gap-2">
                            <span>←</span> Wardrobe
                        </Link>
                    )}
                </div>

                {/* Sartorial Header Block */}
                <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24 space-y-4">
                    <span className="eyebrow justify-center !text-[var(--bronze)]">
                        {isSubcategoryDetail ? "Atelier Accessories" : category.edit}
                    </span>
                    <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-[0.05em] uppercase text-[var(--ink)]">
                        {isSubcategoryDetail ? subcatInfo.name : category.name}
                    </h1>
                    <p className="font-italic-serif text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-md mx-auto pt-2">
                        {isSubcategoryDetail ? subcatInfo.desc : category.description}
                    </p>
                </div>

                {/* Minimalist Grid Layout - 3 columns for desktop, 2 for tablet, 1 for mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-16">
                    {displayedPieces.map((piece, index) => (
                        <div 
                            key={index}
                            className="group cursor-pointer flex flex-col w-full"
                            onClick={() => setSelectedPiece(piece)}
                        >
                            {/* Card Image Container */}
                            <div className="relative overflow-hidden border border-[var(--hairline)] aspect-[3/4] bg-[var(--cream)] shadow-sm">
                                <img 
                                    src={piece.img} 
                                    alt={piece.name} 
                                    loading="lazy"
                                    className="w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                                />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="bg-[var(--bone)] text-[var(--ink)] text-[9px] uppercase tracking-[0.25em] font-luxe px-5 py-2.5 border border-[var(--hairline)]">
                                        View Details
                                    </span>
                                </div>
                            </div>

                            {/* Card Text details */}
                            <div className="mt-4 flex justify-between items-baseline gap-4 w-full">
                                <h3 className="font-luxe text-xs uppercase tracking-[0.1em] text-[var(--ink)] group-hover:text-[var(--bronze)] transition duration-300">
                                    {piece.name}
                                </h3>
                                <p className="font-display text-sm font-medium whitespace-nowrap text-[var(--ink)]">
                                    {piece.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Centered CTA booking block at the bottom */}
                <div className="mt-24 lg:mt-36 border-t border-[var(--hairline)] pt-16 text-center max-w-xl mx-auto space-y-6">
                    <h3 className="font-display text-xl sm:text-2xl text-[var(--ink)]">
                        Tailored for your presence.
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed font-light font-body max-w-md mx-auto">
                        Experience our signature fits and consult fabric swatches directly with our tailoring concierges at our Sundar Nagar Salon.
                    </p>
                    <div className="pt-4">
                        <Link 
                            to="/#request-form"
                            className="bg-[var(--bronze)] text-[var(--bone)] hover:bg-[var(--ink)] hover:text-white px-10 py-4 text-[10px] tracking-[0.3em] font-luxe uppercase transition-all duration-300 inline-block"
                        >
                            Request Fitting Appointment
                        </Link>
                    </div>
                </div>

            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedPiece && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPiece(null)}
                        className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-md p-6 sm:p-10"
                    >
                        {/* Lightbox Top */}
                        <div className="flex justify-between items-center w-full shrink-0">
                            <span className="font-luxe text-[9px] uppercase tracking-[0.3em] text-[var(--champagne)]">
                                {isSubcategoryDetail ? `ACCESSORIES / ${subcatInfo.name.toUpperCase()}` : category.name.toUpperCase()} — {selectedPiece.name.toUpperCase()}
                            </span>
                            <button
                                onClick={() => setSelectedPiece(null)}
                                className="font-luxe text-[10px] uppercase tracking-[0.3em] text-white hover:text-[var(--champagne)] border border-white/20 hover:border-[var(--champagne)] px-6 py-3 transition duration-300"
                            >
                                Close <span aria-hidden>×</span>
                            </button>
                        </div>

                        {/* Lightbox Middle */}
                        <div className="relative flex items-center justify-center grow my-6 max-h-[75vh]">
                            <button
                                onClick={handlePrev}
                                className="absolute left-0 sm:left-4 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-[var(--champagne)] bg-black/50 hover:bg-black/80 rounded-full border border-white/10 transition duration-300"
                                aria-label="Previous image"
                            >
                                ❮
                            </button>

                            <motion.div
                                key={selectedPiece.img}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="max-w-full max-h-full aspect-[3/4] overflow-hidden"
                            >
                                <img
                                    src={selectedPiece.img}
                                    alt={selectedPiece.name}
                                    className="max-w-full max-h-[65vh] sm:max-h-[70vh] object-contain mx-auto shadow-2xl border border-white/10"
                                />
                            </motion.div>

                            <button
                                onClick={handleNext}
                                className="absolute right-0 sm:right-4 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-[var(--champagne)] bg-black/50 hover:bg-black/80 rounded-full border border-white/10 transition duration-300"
                                aria-label="Next image"
                            >
                                ❯
                            </button>
                        </div>

                        {/* Lightbox Bottom */}
                        <div className="text-center shrink-0 max-w-xl mx-auto flex flex-col items-center">
                            <span className="font-luxe text-[9px] uppercase tracking-[0.2em] text-[var(--champagne)]">
                                {selectedPiece.name} — {selectedPiece.price}
                            </span>
                            <p className="font-display text-white text-sm mt-2">
                                Hand-finished tailoring from the House of Sunil Mehra.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
