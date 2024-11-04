import graph from '../../assets/Graph.svg'
import background from '../../assets/background.svg'
import Input from '../../components/Input/input'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { formLogin } from '../../hooks/useform'
import { LoginAuth } from '../../api/auth'

import { toast } from 'sonner'
import { Toaster } from 'sonner'


const Login: React.FC = () => {
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(false)

	interface LoginData {
		email: string
		password: string
	}

	const handleLogin = async (data: LoginData) => {
		setIsLoading(true)
		try {
			const response = await LoginAuth(data.email, data.password)
			window.localStorage.setItem('token', response.token)
			navigate('/')
		} catch (error: any) {
			toast.error(error.response.data)
		} finally {
			setIsLoading(false)
		}
	}

	const { register, handleSubmit, errors } = formLogin(handleLogin)

	return (
		<div className='flex min-h-screen h-screen bg-gray-100'>
			<div className='flex w-full lg:w-1/2 flex-col justify-center items-center bg-white shadow-lg p-8'>
				<form
					onSubmit={handleSubmit(handleLogin)}
					className='w-full max-w-sm space-y-4'
				>
					<div className='flex justify-center mb-8'>
						<div className='bg-gray-900 p-3 rounded-full'>
							<span className='text-white font-bold text-3xl'>⭐</span>
						</div>
					</div>

					<h1 className='text-2xl font-bold text-gray-800 text-center'>
						Bem-vindo de volta ao Tree
					</h1>
					<p className='text-center text-gray-600 font-medium mb-4'>
						Preencha seu email e senha para continuar.
					</p>

					<div className='space-y-4'>
						<Input
							type='email'
							label='Email'
							placeholder='Digite seu email'
							{...register('email')}
							error={errors.email?.message}
						/>

						<Input
							type='password'
							placeholder='Digite sua senha'
							label='Senha'
							{...register('password')}
							error={errors.password?.message}
						/>

						<button
							type='submit'
							className='w-full bg-gray-800 text-white rounded py-2 hover:bg-gray-900 transition duration-300 flex items-center justify-center'
							disabled={isLoading}
						>
							{isLoading ? (
								<>
									<svg
										className='animate-spin h-5 w-5 mr-3 text-white'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
									>
										<circle
											className='opacity-25'
											cx='12'
											cy='12'
											r='10'
											stroke='currentColor'
											strokeWidth='4'
										></circle>
										<path
											className='opacity-75'
											fill='currentColor'
											d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
										></path>
									</svg>
									Processando...
								</>
							) : (
								'Entrar'
							)}
						</button>

						<p className='text-center text-sm text-gray-600'>
							Ainda não tem uma conta?{' '}
							<a
								onClick={() => navigate('/signup')}
								className='text-gray-900 hover:underline cursor-pointer'
							>
								Registre-se
							</a>
						</p>
					</div>
				</form>
			</div>

			<div
				className='hidden lg:flex lg:w-1/2 items-center justify-center bg-cover bg-center'
				style={{
					backgroundImage: `url(${background})`
				}}
			>
				<div className='p-2 rounded-lg shadow-2xl'>
					<img src={graph} alt='gráfico' />
				</div>
			</div>

			<Toaster position='top-left' />
		</div>
	)
}

export default Login
