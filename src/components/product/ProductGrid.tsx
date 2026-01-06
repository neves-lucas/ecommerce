// src/components/product/ProductGrid.tsx
import { ProductCard } from './ProductCard'

interface Product {
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

interface ProductGridProps {
    products: Product[]
    columns?: 2 | 3 | 4
    onAddToCart?: (productId: string) => void
    onAddToWishlist?: (productId: string) => void
}

export function ProductGrid({
    products,
    columns = 4,
    onAddToCart,
    onAddToWishlist,
}: ProductGridProps) {
    const gridCols = {
        2: 'grid-cols-1 sm:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    }

    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="text-6xl mb-4">🛍️</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    No products found
                </h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-md">
                    We couldn&apos;t find any products matching your criteria. Try adjusting your filters or search terms.
                </p>
            </div>
        )
    }

    return (
        <div className={`grid ${gridCols[columns]} gap-6`}>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart ? () => onAddToCart(product.id) : undefined}
                    onAddToWishlist={onAddToWishlist ? () => onAddToWishlist(product.id) : undefined}
                />
            ))}
        </div>
    )
}
