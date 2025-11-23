"use client";

import { motion } from "framer-motion";
import { PhoneCall, Calculator, CheckCircle, Truck, PackageCheck, Wallet } from "lucide-react";

export default function Process() {
    const steps = [
        {
            icon: <PhoneCall size={24} />,
            title: "Appel Client",
            description: "Contactez-nous avec les détails de votre livraison."
        },
        {
            icon: <Calculator size={24} />,
            title: "Estimation",
            description: "Nous calculons le coût exact selon la distance."
        },
        {
            icon: <CheckCircle size={24} />,
            title: "Validation",
            description: "Vous validez la commande et le tarif."
        },
        {
            icon: <Truck size={24} />,
            title: "Ramassage",
            description: "Notre livreur récupère le colis au point de départ."
        },
        {
            icon: <PackageCheck size={24} />,
            title: "Livraison",
            description: "Acheminement rapide vers la destination."
        },
        {
            icon: <Wallet size={24} />,
            title: "Paiement",
            description: "Payez par Mobile Money ou en espèces à la livraison."
        }
    ];

    return (
        <section id="process" className="py-24 bg-white dark:bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Comment ça marche ?</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        Un Processus Simple et Transparent
                    </h3>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center bg-white dark:bg-zinc-950 p-4"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30 relative">
                                    {step.icon}
                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center text-xs font-bold border-2 border-white dark:border-zinc-900">
                                        {index + 1}
                                    </div>
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">{step.title}</h4>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
