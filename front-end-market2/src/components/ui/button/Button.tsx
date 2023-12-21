import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'dark' | 'light'
	size?: 'sm' | 'md' | 'lg'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	size = 'md',
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				'font-semibold shadow-sm px-10 py-2 rounded-xl hover:shadow-lg transition duration-300 ease-in-out',
				{
					'text-white bg-primary': variant == 'dark',
					'text-primary bg-white': variant == 'light',
          'px-5 py-2 text-sm': size == 'sm'
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
