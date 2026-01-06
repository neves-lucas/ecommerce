// src/lib/utils/constants.ts

export const SITE_CONFIG = {
    name: 'ShopBase',
    description: 'Your one-stop shop for everything you need',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
}

export const SHIPPING_RATES = {
    standard: {
        name: 'Standard Shipping',
        price: 5.99,
        estimatedDays: '5-7 business days',
    },
    express: {
        name: 'Express Shipping',
        price: 14.99,
        estimatedDays: '2-3 business days',
    },
    overnight: {
        name: 'Overnight Shipping',
        price: 29.99,
        estimatedDays: '1 business day',
    },
}

export const TAX_RATE = 0.08 // 8% default tax rate

export const ORDER_STATUSES = {
    pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
    processing: { label: 'Processing', color: 'bg-blue-100 text-blue-800' },
    shipped: { label: 'Shipped', color: 'bg-purple-100 text-purple-800' },
    delivered: { label: 'Delivered', color: 'bg-green-100 text-green-800' },
    cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-800' },
    refunded: { label: 'Refunded', color: 'bg-gray-100 text-gray-800' },
} as const

export const PAYMENT_STATUSES = {
    pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
    paid: { label: 'Paid', color: 'bg-green-100 text-green-800' },
    failed: { label: 'Failed', color: 'bg-red-100 text-red-800' },
    refunded: { label: 'Refunded', color: 'bg-gray-100 text-gray-800' },
} as const

export const ITEMS_PER_PAGE = 12

export const SORT_OPTIONS = [
    { value: 'newest', label: 'Newest' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name-asc', label: 'Name: A to Z' },
    { value: 'rating', label: 'Highest Rated' },
]
