import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { IEmailPassword } from '@/store/user/user.interface'
import Heading from '@/ui/Heading'
import Loader from '@/ui/Loader'
import Button from '@/ui/button/Button'
import Meta from '@/ui/meta'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Field from '../../ui/input/Field'
import { useAuthRedirect } from './useAuthRedirect'
import { validEmail } from './valid-email'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const { login, register } = useActions()

	const [type, setType] = useState<'sign in' | 'registration'>('sign in')

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onBlur'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type == 'sign in') login(data)
		else register(data)

		reset()
	}

	return (
		<Meta title='Auth'>
			<section className='flex h-screen'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='rounded-lg bg-white shadow-sw p-8 m-auto '
				>
					<Heading className='capitalize text-center mb-4'>{type}</Heading>

					{isLoading ? (
						<Loader />
					) : (
						<>
							<Field
								{...formRegister('email', {
									required: 'Email is required',
									pattern: {
										value: validEmail,
										message: 'Please enter a valid email address'
									}
								})}
								placeholder='Email'
								error={errors.email?.message}
							></Field>
							<Field
								{...formRegister('password', {
									required: 'Password is required',
									minLength: {
										value: 6,
										message: 'Min lenght should more 6 symbols'
									}
								})}
								type='password'
								placeholder='Password'
								error={errors.password?.message}
							></Field>
							<Button variant='dark' className='flex m-auto'>
								Let's go!
							</Button>
							{''}

							<div>
								<button
									type='button'
									className='flex opacity-40 m-auto mt-3 text-sm text-secondary'
									onClick={() =>
										setType(type == 'sign in' ? 'registration' : 'sign in')
									}
								>
									{type == 'sign in' ? 'register' : 'sign in'}
								</button>
							</div>
						</>
					)}
				</form>
			</section>
		</Meta>
	)
}

export default Auth
