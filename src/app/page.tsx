// src/app/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Truck, Shield, RefreshCw, Headphones } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ProductGrid } from '@/components/product/ProductGrid'

// Mock featured products for demo
const featuredProducts = [
  {
    id: '1',
    name: 'Wireless Noise-Cancelling Headphones',
    slug: 'wireless-headphones',
    shortDescription: 'Premium audio experience with 30-hour battery life',
    basePrice: 299.99,
    compareAtPrice: 349.99,
    images: [{ url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop', altText: 'Headphones' }],
    category: { name: 'Electronics', slug: 'electronics' },
    rating: 4.8,
    reviewCount: 124,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Smart Fitness Watch Pro',
    slug: 'smart-watch-pro',
    shortDescription: 'Track your health with advanced sensors',
    basePrice: 399.99,
    images: [{ url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop', altText: 'Smart Watch' }],
    category: { name: 'Electronics', slug: 'electronics' },
    rating: 4.6,
    reviewCount: 89,
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Premium Leather Backpack',
    slug: 'leather-backpack',
    shortDescription: 'Handcrafted genuine leather with laptop compartment',
    basePrice: 189.99,
    compareAtPrice: 229.99,
    images: [{ url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop', altText: 'Backpack' }],
    category: { name: 'Accessories', slug: 'accessories' },
    rating: 4.9,
    reviewCount: 67,
  },
  {
    id: '4',
    name: 'Minimalist Desk Lamp',
    slug: 'desk-lamp',
    shortDescription: 'Adjustable LED lamp with wireless charging base',
    basePrice: 79.99,
    images: [{ url: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop', altText: 'Desk Lamp' }],
    category: { name: 'Home', slug: 'home' },
    rating: 4.5,
    reviewCount: 45,
  },
]

const categories = [
  {
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=300&fit=crop',
    productCount: 156
  },
  {
    name: 'Fashion',
    slug: 'fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
    productCount: 243
  },
  {
    name: 'Home & Living',
    slug: 'home-living',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&h=300&fit=crop',
    productCount: 89
  },
  {
    name: 'Sports',
    slug: 'sports',
    image: 'https://images.unsplash.com/photo-1461896836934- voices?w=400&h=300&fit=crop',
    productCount: 67
  },
]

const features = [
  { icon: Truck, title: 'Free Shipping', description: 'On orders over $50' },
  { icon: Shield, title: 'Secure Payment', description: '100% protected' },
  { icon: RefreshCw, title: 'Easy Returns', description: '30-day guarantee' },
  { icon: Headphones, title: '24/7 Support', description: 'Dedicated help' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                ✨ New Season Collection
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Discover Your
                <span className="block">Perfect Style</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-lg mx-auto lg:mx-0">
                Explore our curated collection of premium products designed to elevate your everyday experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/products">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90 shadow-xl">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/categories">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Browse Categories
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-white/10 rounded-3xl rotate-6 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-white/20 rounded-3xl -rotate-3 backdrop-blur-sm" />
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop"
                    alt="Featured products"
                    width={500}
                    height={500}
                    className="rounded-2xl object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{feature.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                Featured Products
              </h2>
              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Handpicked items just for you
              </p>
            </div>
            <Link href="/products?featured=true">
              <Button variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>
                View All
              </Button>
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
              Shop by Category
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Find exactly what you&apos;re looking for
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-sm text-white/70">{category.productCount} products</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 lg:p-16">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            <div className="relative text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Get 20% Off Your First Order
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about new products, exclusive offers, and more.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder:text-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="bg-white text-indigo-600 hover:bg-white/90 px-8">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
