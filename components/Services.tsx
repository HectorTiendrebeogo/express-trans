"use client";

import { motion } from "framer-motion";
import { Package, Truck, Clock, ShieldCheck } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: <Package size={32} />,
            title: "Livraison de Colis",
            description: "Transport rapide de petits et moyens colis entre tous les quartiers de Ouagadougou."
        },
        {
            icon: <Truck size={32} />,
            title: "Transport de Marchandises",
            description: "Solutions adaptées pour les volumes plus importants et les besoins commerciaux."
        },
        {
            icon: <Clock size={32} />,
            title: "Livraison Express",
            description: "Service prioritaire pour vos urgences. Livraison garantie dans les plus brefs délais."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Transport Sécurisé",
            description: "Garantie de sécurité pour vos objets de valeur et documents confidentiels."
        }
    ];

    return (
        <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Nos Services</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        Des Solutions Adaptées à Vos Besoins
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Que vous soyez un particulier ou une entreprise, nous avons la solution de transport qu'il vous faut.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-b-4 border-transparent hover:border-primary group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{service.title}</h4>
                            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
