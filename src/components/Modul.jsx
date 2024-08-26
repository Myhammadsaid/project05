import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeFromCart } from '../context/slices/cartSlice'

const Modul = ({ setCartToggle }) => {
	const carts = useSelector(state => state.cart.value)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const CartFetch = carts?.map(el => (
		<div className='flex items-center gap-4 p-4 border-b-2 relative'>
			<img className='w-[100px] h-[100px]' src={el.image} alt={el.title} />
			<div>
				<h1 className='max-w-[400px] text-xl font-medium'>{el.title}</h1>
				<p className='text-xl font-semibold'>${el.price}</p>
			</div>
			<button
				onClick={() => dispatch(removeFromCart(el.id))}
				className='absolute right-[30px] text-3xl'
			>
				<IoCloseOutline />
			</button>
		</div>
	))

	if (carts.length === 0) setCartToggle(false)

	return (
		<>
			{carts.length ? (
				<>
					<div className='w-[100%] h-[300px] overflow-auto p-5 bg-white fixed bottom-0 left-0 right-0 z-20'>
						<div className='grid-cols-1 gap-3 mb-[20px]'>{CartFetch}</div>
						<button
							onClick={() => navigate('/order')}
							className='w-[200px] h-[40px] bg-green-400 text-white text-xl flex items-center justify-center m-auto'
						>
							make an order
						</button>
					</div>
					<div
						className='bg-slate-700 opacity-[60%] fixed top-0 z-10 w-[100%] h-[100%]'
						onClick={() => setCartToggle(false)}
					></div>
				</>
			) : (
				<></>
			)}
		</>
	)
}

export default Modul
