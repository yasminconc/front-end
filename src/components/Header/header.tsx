import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
	const navigate = useNavigate()

	const logout = () => {
		window.localStorage.removeItem('token')
		navigate('/login')
	}

	return (
		<header className='flex justify-between items-center w-full max-w-6xl p-4 sm:p-6'>
			<h1 className='text-2xl sm:text-3xl font-bold'>⭐ Tree</h1>

			<nav className='hidden sm:flex space-x-4 sm:space-x-8 text-base sm:text-lg'>
				<a
					href='https://www.linkedin.com/in/yasminconc/'
					className='hover:text-purple-300'
				>
					LinkedIn
				</a>
				<a href='#lorem' className='hover:text-purple-300'>
					Lorem
				</a>
				<a
					href='https://github.com/yasminconc'
					className='hover:text-purple-300'
				>
					Github
				</a>
				<a href='#lorem' className='hover:text-purple-300'>
					Lorem
				</a>
			</nav>

			<button
				onClick={logout}
				className='bg-gray-900 hover:bg-gray-700 text-white font-semibold py-1 px-3 sm:py-2 sm:px-4 rounded-lg transition duration-200'
			>
				Sair
			</button>
		</header>
	)
}

export default Header

