// src/components/ui/Card.tsx
import { cn } from '@/lib/utils/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    variant?: 'default' | 'bordered' | 'elevated'
    padding?: 'none' | 'sm' | 'md' | 'lg'
}

export function Card({
    children,
    className,
    variant = 'default',
    padding = 'md',
    ...props
}: CardProps) {
    const variants = {
        default: 'bg-white dark:bg-slate-900',
        bordered: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700',
        elevated: 'bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50',
    }

    const paddings = {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    }

    return (
        <div
            className={cn('rounded-xl', variants[variant], paddings[padding], className)}
            {...props}
        >
            {children}
        </div>
    )
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
    return (
        <div className={cn('mb-4', className)} {...props}>
            {children}
        </div>
    )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode
    as?: 'h1' | 'h2' | 'h3' | 'h4'
}

export function CardTitle({ children, className, as: Tag = 'h3', ...props }: CardTitleProps) {
    return (
        <Tag
            className={cn('text-xl font-semibold text-slate-900 dark:text-slate-100', className)}
            {...props}
        >
            {children}
        </Tag>
    )
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode
}

export function CardDescription({ children, className, ...props }: CardDescriptionProps) {
    return (
        <p className={cn('text-sm text-slate-500 dark:text-slate-400 mt-1', className)} {...props}>
            {children}
        </p>
    )
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function CardContent({ children, className, ...props }: CardContentProps) {
    return (
        <div className={cn('', className)} {...props}>
            {children}
        </div>
    )
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export function CardFooter({ children, className, ...props }: CardFooterProps) {
    return (
        <div
            className={cn('mt-4 pt-4 border-t border-slate-100 dark:border-slate-800', className)}
            {...props}
        >
            {children}
        </div>
    )
}
