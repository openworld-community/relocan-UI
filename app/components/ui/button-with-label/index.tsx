"use client"

import {ButtonHTMLAttributes, ReactNode} from "react";
import {ButtonStyled} from "@/app/components/ui/button-with-label/styled";
import {Button} from "@/app/components/ui/button";

type ComponentProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode
    label: string
    variant: 'light' | 'dark'
    addArrow?: boolean
}
export const ButtonWithLabel = (props: ComponentProps) => {
    const {children, variant, label, addArrow, ...otherProps } = props
    return (
        <ButtonStyled className={variant} {...otherProps} >
            <div>
                {label}
            </div>
            <Button isDiv variant={variant === 'light' ? 'dark' : 'light'} addArrow={addArrow}>
                {children}
            </Button>
        </ButtonStyled>
    )
}