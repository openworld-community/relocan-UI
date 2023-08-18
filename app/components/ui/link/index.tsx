"use client"

import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledLink } from "@/app/components/ui/link/styled";
import { IconArrowOutward} from "@/app/icons";

type ComponentProps = ButtonHTMLAttributes<HTMLAnchorElement> & {
    className?: string
    children: ReactNode
}

export const ALink = (props: ComponentProps) => {
    const {children, ...otherProps} = props

    return (
        <StyledLink {...otherProps}>{children} <IconArrowOutward /></StyledLink>
    )
}