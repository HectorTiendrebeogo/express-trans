import Link from "next/link";
import { Truck, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_NAME } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-zinc-300 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6 text-white">
                            <div className="bg-primary p-2 rounded-lg text-white">
                                <Truck size={24} />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter">
                                {COMPANY_NAME.split(' ')[0]}<span className="text-primary">{COMPANY_NAME.split(' ').slice(1).join(' ')}</span>
                            </span>
                        </Link>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                            Votre partenaire logistique de confiance à Ouagadougou.
                            Rapidité, sécurité et transparence pour tous vos envois.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Liens Rapides</h4>
                        <ul className="space-y-4">
                            <li><Link href="#home" className="hover:text-primary transition-colors">Accueil</Link></li>
                            <li><Link href="#about" className="hover:text-primary transition-colors">À Propos</Link></li>
                            <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="#calculator" className="hover:text-primary transition-colors">Calculateur de Coût</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contactez-nous</h4>
                        <p className="text-zinc-400 mb-4">Inscrivez-vous pour recevoir nos offres.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="bg-zinc-800 border-none rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-primary text-white"
                            />
                            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                                OK
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-sm">
                    <p>&copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> {COMPANY_NAME}. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
