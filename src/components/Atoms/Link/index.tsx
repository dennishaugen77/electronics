import { FC } from "react"
import clsx from "clsx"
interface LinkProps {
    link?: string
    className?: string
    value: string
}

export const Link:FC<LinkProps> = ({link='#', className, value, ...props}) => {
    return (
        <a href={link} className={clsx("bg-primary text-xs font-semibold mt-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 inline-flex items-center justify-center", className)} {...props}>{value}</a>
    )
}