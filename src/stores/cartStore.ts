// src/stores/cartStore.ts
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface CartItem {
    id: string // variant_id
    productId: string
    productName: string
    productSlug: string
    variantName: string
    price: number
    quantity: number
    imageUrl: string | null
    attributes: Record<string, string>
}

interface CartStore {
    items: CartItem[]
    isOpen: boolean

    // Actions
    addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void
    removeItem: (variantId: string) => void
    updateQuantity: (variantId: string, quantity: number) => void
    clearCart: () => void
    setCartOpen: (isOpen: boolean) => void

    // Computed
    getTotalItems: () => number
    getSubtotal: () => number
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,

            addItem: (newItem, quantity = 1) => {
                set(state => {
                    const existingItem = state.items.find(item => item.id === newItem.id)

                    if (existingItem) {
                        return {
                            items: state.items.map(item =>
                                item.id === newItem.id
                                    ? { ...item, quantity: item.quantity + quantity }
                                    : item
                            ),
                        }
                    }

                    return {
                        items: [...state.items, { ...newItem, quantity }],
                    }
                })
            },

            removeItem: variantId => {
                set(state => ({
                    items: state.items.filter(item => item.id !== variantId),
                }))
            },

            updateQuantity: (variantId, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(variantId)
                    return
                }

                set(state => ({
                    items: state.items.map(item =>
                        item.id === variantId ? { ...item, quantity } : item
                    ),
                }))
            },

            clearCart: () => {
                set({ items: [] })
            },

            setCartOpen: isOpen => {
                set({ isOpen })
            },

            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0)
            },

            getSubtotal: () => {
                return get().items.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                )
            },
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: state => ({ items: state.items }), // Only persist items
        }
    )
)
