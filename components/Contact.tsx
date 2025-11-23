"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Facebook, MessageCircle } from "lucide-react";

export default function Contact() {
    const contacts = [
        {
            icon: <Phone size={32} />,
            title: "Appelez-nous",
            value: "+226 74 86 64 22 / 53 69 92 52",
            href: "tel:+22674866422",
            color: "bg-green-500",
            textColor: "text-green-500"
        },
        {
            icon: <MessageCircle size={32} />,
            title: "WhatsApp",
            value: "Discuter sur WhatsApp",
            href: "https://wa.me/22674866422",
            color: "bg-green-600",
            textColor: "text-green-600"
        },
        {
            icon: <Facebook size={32} />,
            title: "Facebook",
            value: "Express Trans BF",
            href: "https://facebook.com",
            color: "bg-blue-600",
            textColor: "text-blue-600"
        },
        {
            icon: <Mail size={32} />,
            title: "Email",
            value: "expresstrans@intellectus-tech.com",
            href: "mailto:expresstrans@intellectus-tech.com",
            color: "bg-orange-500",
            textColor: "text-orange-500"
        }
    ];

    return (
        <section id="contact" className="py-24 bg-white dark:bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Contactez-nous</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                        Prêt à expédier ?
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Notre équipe est disponible pour répondre à toutes vos questions et prendre vos commandes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contacts.map((contact, index) => (
                        <motion.a
                            key={index}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900 hover:shadow-xl transition-all border border-zinc-100 dark:border-zinc-800 group"
                        >
                            <div className={`w-16 h-16 rounded-full ${contact.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <div className={contact.textColor}>
                                    {contact.icon}
                                </div>
                            </div>
                            <h4 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">{contact.title}</h4>
                            <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                                {contact.value}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
