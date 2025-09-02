import { ReactNode, ButtonHTMLAttributes, FC } from "react"
import clsx from 'classnames'

type ButtonProps = {
    children: ReactNode
    loading?: boolean
    className?: string;
    variant?: 'solid'| 'outline'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button:FC<ButtonProps> = ({
  children,
  loading = false,
  disabled = false,
  variant = 'primary',
  className = '',
  ...props
}) => {
    return (
        <button
            className={clsx(
                `relative rounded-2 px-6 h-9 flex items-center text-sm border !outline-none ${className}`,
                {
                'font-bold bg-primary hover:bg-hov text-white': variant === 'solid' && !(disabled || loading),
                'bg-gray-300 text-gray-50 pointer-events-none': disabled || loading,
                },
            )}
            {...props}
            disabled={disabled || loading}
        >
            {loading && (
                <div className="absolute left-1/2 -translate-x-1/2">
                {/* <SvgIcon className="h-6 w-6 animate-spin text-white" name="spinner" /> */}
                </div>
            )}

            {children}
        </button>
    )
}