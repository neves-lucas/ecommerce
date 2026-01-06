// src/components/product/ProductCard.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { formatPrice } from '@/lib/utils/formatters'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface ProductCardProps {
    product: {
        id: string
        name: string
        slug: string
        shortDescription?: string | null
        basePrice: number
        compareAtPrice?: number | null
        images: { url: string; altText?: string | null }[]
        category?: { name: string; slug: string } | null
        rating?: number
        reviewCount?: number
        isOutOfStock?: boolean
        isFeatured?: boolean
    }
    showQuickAdd?: boolean
    onAddToCart?: () => void
    onAddToWishlist?: () => void
    className?: string
}

export function ProductCard({
    product,
    showQuickAdd = true,
    onAddToCart,
    onAddToWishlist,
    className,
}: ProductCardProps) {
    const primaryImage = product.images[0]
    const hasDiscount = product.compareAtPrice && product.compareAtPrice > product.basePrice
    const discountPercentage = hasDiscount
        ? Math.round((1 - product.basePrice / product.compareAtPrice!) * 100)
        : 0

    return (
        <div
            className={cn(
                'group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden',
                'border border-slate-100 dark:border-slate-800',
                'hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50',
                'transition-all duration-300',
                className
            )}
        >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Link href={`/products/${product.slug}`}>
                    {primaryImage ? (
                        <Image
                            src={primaryImage.url}
                            alt={primaryImage.altText || product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                            <ShoppingCart className="h-12 w-12" />
                        </div>
                    )}
                </Link>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {hasDiscount && (
                        <Badge variant="danger" size="sm">
                            -{discountPercentage}%
                        </Badge>
                    )}
                    {product.isFeatured && (
                        <Badge variant="default" size="sm">
                            Featured
                        </Badge>
                    )}
                    {product.isOutOfStock && (
                        <Badge variant="secondary" size="sm">
                            Out of Stock
                        </Badge>
                    )}
                </div>

                {/* Wishlist Button */}
                {onAddToWishlist && (
                    <button
                        onClick={e => {
                            e.preventDefault()
                            onAddToWishlist()
                        }}
                        className={cn(
                            'absolute top-3 right-3',
                            'p-2 rounded-full bg-white/80 backdrop-blur-sm',
                            'text-slate-600 hover:text-red-500 hover:bg-white',
                            'opacity-0 group-hover:opacity-100',
                            'transition-all duration-200',
                            'shadow-lg'
                        )}
                        aria-label="Add to wishlist"
                    >
                        <Heart className="h-5 w-5" />
                    </button>
                )}

                {/* Quick Add Button */}
                {showQuickAdd && onAddToCart && !product.isOutOfStock && (
                    <div
                        className={cn(
                            'absolute bottom-0 left-0 right-0 p-4',
                            'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0',
                            'transition-all duration-200'
                        )}
                    >
                        <Button
                            onClick={e => {
                                e.preventDefault()
                                onAddToCart()
                            }}
                            className="w-full"
                            size="sm"
                            leftIcon={<ShoppingCart className="h-4 w-4" />}
                        >
                            Add to Cart
                        </Button>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Category */}
                {product.category && (
                    <Link
                        href={`/categories/${product.category.slug}`}
                        className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                        {product.category.name}
                    </Link>
                )}

                {/* Title */}
                <Link href={`/products/${product.slug}`}>
                    <h3 className="mt-1 font-semibold text-slate-900 dark:text-slate-100 line-clamp-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        {product.name}
                    </h3>
                </Link>

                {/* Rating */}
                {product.rating !== undefined && (
                    <div className="mt-2 flex items-center gap-1.5">
                        <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map(star => (
                                <Star
                                    key={star}
                                    className={cn(
                                        'h-3.5 w-3.5',
                                        star <= Math.round(product.rating!)
                                            ? 'text-amber-400 fill-amber-400'
                                            : 'text-slate-300 dark:text-slate-600'
                                    )}
                                />
                            ))}
                        </div>
                        <span className="text-xs text-slate-500">
                            ({product.reviewCount || 0})
                        </span>
                    </div>
                )}

                {/* Price */}
                <div className="mt-3 flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        {formatPrice(product.basePrice)}
                    </span>
                    {hasDiscount && (
                        <span className="text-sm text-slate-400 line-through">
                            {formatPrice(product.compareAtPrice!)}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}
