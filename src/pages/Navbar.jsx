import { Outlet, Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<>
			<nav className=" bg-violet-900 font-['roboto_condensed'] fixed top-0 bg-opacity-60 backdrop-filter backdrop-blur-lg navbar text-white uppercase font-bold px-5 z-20 h-7">
				<ul className='navbar-start flex gap-4'>
					<li>
						<Link to='/' className=''>
							Home
						</Link>
					</li>
					<li>
						<Link to='/input' className=''>
							Input
						</Link>
					</li>
					<li>
						<Link to='/profile' className=''>
							Profile
						</Link>
					</li>
				</ul>
				<ul className='navbar-end'>
					<li>
						<a href='https://www.github.io' className='secondary'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='white'
								viewBox='0 0 24 24'
								stroke='white'
								className='w-6 h-6'
							>
								<path
									fill='white'
									fillRule='evenodd'
									d='M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.536 10.536 0 0 1 12 6.32a10.49 10.49 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11'
								></path>
							</svg>
						</a>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	)
}

export default Navbar