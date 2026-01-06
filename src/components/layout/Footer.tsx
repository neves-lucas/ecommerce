// src/components/layout/Footer.tsx
import Link from 'next/link'
import { ShoppingBag, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export function Footer() {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        shop: [
            { label: 'All Products', href: '/products' },
            { label: 'Categories', href: '/categories' },
            { label: 'Featured', href: '/products?featured=true' },
            { label: 'New Arrivals', href: '/products?sort=newest' },
            { label: 'Sale', href: '/products?sale=true' },
        ],
        support: [
            { label: 'Contact Us', href: '/contact' },
            { label: 'FAQs', href: '/faqs' },
            { label: 'Shipping Info', href: '/shipping' },
            { label: 'Returns & Exchanges', href: '/returns' },
            { label: 'Size Guide', href: '/size-guide' },
        ],
        company: [
            { label: 'About Us', href: '/about' },
            { label: 'Careers', href: '/careers' },
            { label: 'Press', href: '/press' },
            { label: 'Blog', href: '/blog' },
            { label: 'Affiliates', href: '/affiliates' },
        ],
        legal: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Cookie Policy', href: '/cookies' },
            { label: 'Accessibility', href: '/accessibility' },
        ],
    }

    const socialLinks = [
        { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
        { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    ]

    return (
        <footer className="bg-slate-900 text-slate-300">
            {/* Newsletter Section */}
            <div className="border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="text-center lg:text-left">
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Subscribe to our newsletter
                            </h3>
                            <p className="text-slate-400">
                                Get the latest updates on new products and upcoming sales
                            </p>
                        </div>
                        <form className="flex gap-3 w-full max-w-md">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                                leftIcon={<Mail className="h-4 w-4" />}
                                aria-label="Email address for newsletter"
                            />
                            <Button type="submit">Subscribe</Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {/* Brand */}
                    <div className="col-span-2">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-2xl font-bold text-white mb-4"
                        >
                            <ShoppingBag className="h-7 w-7 text-indigo-500" />
                            ShopBase
                        </Link>
                        <p className="text-slate-400 mb-6 max-w-sm">
                            Your one-stop shop for everything you need. Quality products, competitive prices,
                            and exceptional customer service since 2024.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                                    aria-label={label}
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Shop</h4>
                        <ul className="space-y-3">
                            {footerLinks.shop.map(link => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map(link => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map(link => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map(link => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-slate-500">
                            © {currentYear} ShopBase. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                                alt="Visa"
                                className="h-6 opacity-60"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                                alt="Mastercard"
                                className="h-6 opacity-60"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                alt="PayPal"
                                className="h-6 opacity-60"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
