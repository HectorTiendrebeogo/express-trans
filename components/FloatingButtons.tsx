"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ShoppingBag } from "lucide-react";

export default function FloatingButtons() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show buttons after scrolling down 300px
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
                >
                    <Link
                        href="#calculator"
                        className="flex items-center gap-2 bg-white text-primary px-5 py-3 rounded-full shadow-lg border border-orange-100 hover:bg-orange-50 transition-colors font-semibold"
                    >
                        <Calculator size={20} />
                        <span className="hidden sm:inline">Estimer</span>
                    </Link>
                    <Link
                        href="#contact"
                        className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-colors font-semibold"
                    >
                        <ShoppingBag size={20} />
                        <span className="hidden sm:inline">Commander</span>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
