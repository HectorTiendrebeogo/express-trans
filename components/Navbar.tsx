"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY_NAME } from "@/lib/constants";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Accueil", href: "#home" },
        { name: "À Propos", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Calculateur", href: "#calculator" },
        { name: "Partenaires", href: "#partners" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary p-2 rounded-lg text-white group-hover:scale-105 transition-transform">
                        <Truck size={24} />
                    </div>
                    <span className="text-2xl font-bold tracking-tighter">
                        {COMPANY_NAME.split(' ')[0]}<span className="text-primary">{COMPANY_NAME.split(' ').slice(1).join(' ')}</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="bg-primary text-white px-5 py-2.5 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                    >
                        Commander
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-xl md:hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="bg-primary text-white px-5 py-3 rounded-xl font-medium text-center hover:bg-orange-600 transition-colors"
                            >
                                Commander Maintenant
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
