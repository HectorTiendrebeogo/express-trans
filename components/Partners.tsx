"use client";

import { motion } from "framer-motion";
import { Bike, Briefcase, CheckCircle, Truck, FileCheck, Smile } from "lucide-react";
import Link from "next/link";
import { COMPANY_NAME } from "@/lib/constants";

export default function Partners() {
    return (
        <section id="partners" className="py-24 bg-zinc-50 dark:bg-zinc-900">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Rejoignez-nous</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        Grandissons Ensemble
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Que vous soyez un professionnel de la route ou une entreprise, nous avons des opportunités pour vous.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Devenir Livreur */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-lg border border-zinc-100 dark:border-zinc-800"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-primary mb-6">
                            <Bike size={32} />
                        </div>
                        <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Devenir Livreur</h4>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                            Rejoignez notre flotte et gagnez de l'argent en livrant avec votre propre véhicule.
                        </p>

                        <h5 className="font-semibold text-zinc-900 dark:text-white mb-4">Conditions requises :</h5>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <Truck className="shrink-0 text-primary" size={20} />
                                <span className="text-zinc-600 dark:text-zinc-400">Posséder un moyen roulant (Taxi-moto, Camion, etc.)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FileCheck className="shrink-0 text-primary" size={20} />
                                <span className="text-zinc-600 dark:text-zinc-400">Papiers du véhicule à jour & Permis valide</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Smile className="shrink-0 text-primary" size={20} />
                                <span className="text-zinc-600 dark:text-zinc-400">Être enthousiaste et professionnel</span>
                            </li>
                        </ul>

                        <Link
                            href="#contact"
                            className="inline-flex w-full items-center justify-center bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                        >
                            Postuler Maintenant
                        </Link>
                    </motion.div>

                    {/* Entreprises Partenaires */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-lg border border-zinc-100 dark:border-zinc-800"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 mb-6">
                            <Briefcase size={32} />
                        </div>
                        <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Entreprises Partenaires</h4>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                            Optimisez votre logistique et bénéficiez d'avantages exclusifs en collaborant avec {COMPANY_NAME}.
                        </p>

                        <h5 className="font-semibold text-zinc-900 dark:text-white mb-4">Vos avantages :</h5>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="shrink-0 text-blue-600" size={20} />
                                <span className="text-zinc-600 dark:text-zinc-400">Tarifs préférentiels pour vos livraisons régulières</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="shrink-0 text-blue-600" size={20} />
                                <span className="text-zinc-600 dark:text-zinc-400">Récompenses et bonus selon le volume de livraisons</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="shrink-0 text-blue-600" size={20} />
                                <span className="text-zinc-600 dark:text-zinc-400">Service prioritaire et support dédié</span>
                            </li>
                        </ul>

                        <Link
                            href="#contact"
                            className="inline-flex w-full items-center justify-center bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Devenir Partenaire
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
