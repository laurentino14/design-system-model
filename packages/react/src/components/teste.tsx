import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const Styled = cva('text-9xl', {
  variants: {
    intent: {
      primary: 'text-primary',
    },
    defaultVariants: {
      intent: 'primary',
    },
  },
})

export interface Props
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof Styled> {}
export const Button = ({ intent, ...props }: Props) => {
  return (
    <button className={Styled({ intent })} {...props}>
      Ok
    </button>
  )
}
