import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

	return (
		<nav className='text-white bg-gray-800 text-lg m-4 rounded-lg shadow-lg'>
			<ul className='flex w-full items-center justify-start'>
				<li className='px-2 m-4 transition duration-300 rounded-md py-2 hover:bg-gray-700 hover:shadow-lg'>
					<Link to='/' id="link">Random Color Palette</Link>
				</li>
				<li className='px-2 m-4 transition duration-300 rounded-md py-2 hover:bg-gray-700 hover:shadow-lg'>
					<Link to='/fill' id="link">Fill the Gap</Link>
				</li>
			</ul>
		</nav>
	)
}