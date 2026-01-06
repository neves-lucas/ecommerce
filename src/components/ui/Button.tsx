// src/components/ui/Button.tsx
'use client'

import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'
import { Loader2 } from 'lucide-react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
    size?: 'sm' | 'md' | 'lg'
    isLoading?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = 'primary',
            size = 'md',
            isLoading = false,
            disabled,
            leftIcon,
            rightIcon,
            children,
            ...props
        },
        ref
    ) => {
        const baseStyles = `
      inline-flex items-center justify-center
      font-medium rounded-lg
      transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `

        const variants = {
            primary: `
        bg-gradient-to-r from-indigo-600 to-purple-600
        hover:from-indigo-700 hover:to-purple-700
        text-white shadow-lg shadow-indigo-500/25
        focus:ring-indigo-500
      `,
            secondary: `
        bg-slate-100 text-slate-900
        hover:bg-slate-200
        focus:ring-slate-500
        dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700
      `,
            outline: `
        border-2 border-slate-200
        text-slate-700 hover:bg-slate-50
        focus:ring-slate-500
        dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800
      `,
            ghost: `
        text-slate-600 hover:bg-slate-100
        focus:ring-slate-500
        dark:text-slate-400 dark:hover:bg-slate-800
      `,
            danger: `
        bg-red-600 hover:bg-red-700
        text-white
        focus:ring-red-500
      `,
        }

        const sizes = {
            sm: 'h-8 px-3 text-sm gap-1.5',
            md: 'h-10 px-4 text-sm gap-2',
            lg: 'h-12 px-6 text-base gap-2.5',
        }

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                ) : leftIcon ? (
                    leftIcon
                ) : null}
                {children}
                {rightIcon && !isLoading && rightIcon}
            </button>
        )
    }
)

Button.displayName = 'Button'

export { Button }
