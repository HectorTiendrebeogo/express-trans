"use client";

import { motion } from "framer-motion";
import { Target, Users, Award, TrendingUp } from "lucide-react";

export default function About() {
    const features = [
        {
            icon: <Target className="w-6 h-6 text-orange-500" />,
            title: "Notre Vision",
            description: "Devenir le leader incontesté du transport urbain à Ouagadougou en offrant une fiabilité sans faille."
        },
        {
            icon: <Users className="w-6 h-6 text-orange-500" />,
            title: "Notre Équipe",
            description: "Une équipe de professionnels dévoués, formés pour manipuler vos marchandises avec le plus grand soin."
        },
        {
            icon: <Award className="w-6 h-6 text-orange-500" />,
            title: "Qualité de Service",
            description: "Nous nous engageons à respecter les délais et à garantir l'intégrité de vos colis."
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
            title: "Innovation",
            description: "Utilisation de technologies modernes pour optimiser les trajets et réduire les coûts."
        }
    ];

    return (
        <section id="about" className="py-24 bg-white dark:bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">À Propos de Nous</h2>
                        <h3 className="text-4xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
                            Express Trans : L'Excellence au Service de la Logistique
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-6 leading-relaxed">
                            Fondée avec l'ambition de révolutionner le transport de marchandises à Ouagadougou,
                            Express Trans est née d'un constat simple : le besoin crucial d'un service fiable,
                            rapide et transparent pour les échanges inter-quartiers.
                        </p>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 leading-relaxed">
                            Sous la direction de notre fondateur, nous avons bâti une structure capable de répondre
                            aux exigences des particuliers comme des entreprises, en mettant l'accent sur la sécurité
                            et la satisfaction client.
                        </p>

                        <div className="p-6 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20 rounded-2xl">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 shrink-0">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900 dark:text-white text-lg">Le Mot du Dirigeant</h4>
                                    <p className="text-zinc-600 dark:text-zinc-400 mt-2 italic">
                                        "Notre mission est de simplifier votre quotidien en prenant en charge vos défis logistiques.
                                        Chaque livraison est une promesse tenue."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-xl transition-all border border-zinc-100 dark:border-zinc-800 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">{feature.title}</h4>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
