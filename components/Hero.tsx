"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_NAME } from "@/lib/constants";

export default function Hero() {
    return (
        <section id="home" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                    alt="Logistics Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="container mx-auto px-6 relative z-20 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium mb-6 backdrop-blur-sm">
                        <MapPin size={14} />
                        <span>Disponible partout à Ouagadougou</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                        Transport de Marchandises <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                            Rapide & Sécurisé
                        </span>
                    </h1>

                    <p className="text-xl text-zinc-300 mb-8 max-w-xl leading-relaxed">
                        {COMPANY_NAME} est votre partenaire de confiance pour tous vos besoins logistiques urbains.
                        Nous connectons les quartiers de Ouagadougou avec efficacité.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#calculator"
                            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-lg shadow-orange-500/25"
                        >
                            Estimer un Coût
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-all hover:scale-105 shadow-lg"
                        >
                            Commander
                        </Link>
                        <Link
                            href="#about"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
                        >
                            En savoir plus
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Découvrir</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
            </motion.div>
        </section>
    );
}
