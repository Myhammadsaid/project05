import { FC, useState } from 'react'
import { BsCart } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Modul from './Modul'

const Header: FC = () => {
	const carts = useSelector((state: any) => state.cart.value)
	const [cartToggle, setCartToggle] = useState<boolean>(false)
	const { pathname } = useLocation()

	if (pathname === '/order') return null

	return (
		<>
			<header className='p-4 fixed top-0 right-0 left-0 bg-white z-10'>
				<div className='mx-auto'>
					<nav className='flex items-center justify-between'>
						<h1 className='text-3xl'>All Products</h1>
						<button
							onClick={() => setCartToggle(!cartToggle)}
							className='cursor-pointer rounded-full text-xl bg-green-600 p-3 text-white'
						>
							<BsCart />
						</button>
					</nav>
				</div>
			</header>
			{cartToggle && <Modul carts={carts} setCartToggle={setCartToggle} />}
		</>
	)
}

export default Header
