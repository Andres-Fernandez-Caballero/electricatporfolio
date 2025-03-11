import Link, { LinkProps } from "next/link"
import { HTMLAttributeAnchorTarget } from "react"

export interface LinkButtonProps extends LinkProps

{
    children: React.ReactNode,
    target?: HTMLAttributeAnchorTarget,
    className?: string
}

export const LinkButton = (props: LinkButtonProps) => (
    <Link 
        {...props} className={`bg-gray-50 px-3 py-1 rounded-md flex items-center text-sm ${props.className ?? ''}` }>
        {props.children}
    </Link>
)