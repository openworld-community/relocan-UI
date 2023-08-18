"use client"

import type { ReactElement, ReactNode, ButtonHTMLAttributes } from 'react'

import { IconArrow } from "@/app/icons";
import { ButtonStyled, DivButton } from "@/app/components/ui/button/styled";

type ComponentProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode
    variant: 'light' | 'dark' | 'outlined'
    addArrow?: boolean
    isDiv?: boolean
}

export function Button(props: ComponentProps): ReactElement<HTMLButtonElement> {
    const { children, variant, isDiv, addArrow, ...otherProps } = props

    if(isDiv) {
        return (
            <DivButton className={variant}>
                {children}
                {addArrow && <IconArrow/> }
            </DivButton>
        )
    } else {
        return (
            <ButtonStyled className={variant} {...otherProps}>
                {children}
                {addArrow && <IconArrow/>}
            </ButtonStyled>
        )
    }
}