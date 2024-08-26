import React from 'react'
import { BsCart } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useGetProductsQuery } from '../context/api/productApi'
import { addToCart } from '../context/slices/cartSlice'

const Products = () => {
	const { data } = useGetProductsQuery({ params: { limit: 4 } })
	const dispatch = useDispatch()

	const fetchData = data?.map(el => (
		<div key={el.id} className='w-[200px] p-4 relative'>
			<img
				className='w-[200px] h-[200px] object-contain mb-[10px]'
				src={el.image}
				alt={el.title}
			/>
			<h2
				title={el.title}
				className='text-xl font-normal overflow-hidden overflow-ellipsis whitespace-nowrap'
			>
				{el.title}
			</h2>
			<p className='text-center'>${el.price}</p>
			<button
				onClick={() => dispatch(addToCart(el))}
				className='w-[32px] h-[32px] bg-green-500 rounded-[50%] text-white flex items-center justify-center text-xl absolute pt-4 pb-4 top-0 right-0'
			>
				<BsCart />
			</button>
		</div>
	))

	return (
		<>
			<section className='mb-[100px]'>
				<div className='flex items-center justify-center gap-5 flex-wrap'>
					{fetchData}
				</div>
			</section>
		</>
	)
}

export default Products
