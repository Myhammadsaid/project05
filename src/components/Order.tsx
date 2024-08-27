import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Order: FC = () => {
	const navigate = useNavigate()
	return (
		<>
			<div className='p-4'>
				<h1 className='text-3xl mt-[-90px] mb-[10px]'>Thanks for your order</h1>
				<button
					onClick={() => navigate('/')}
					className='w-[100px] h-[40px] bg-green-400 text-xl text-white'
				>
					Home
				</button>
			</div>
		</>
	)
}

export default Order
