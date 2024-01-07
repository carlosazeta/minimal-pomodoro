import Link from 'next/link'
import NavLinks from './nav-links'

export default function SideNav() {
	return (
		<div className='flex h-full flex-col px-3 py-4 md:px-2 md:'>
			<Link
				className='mb-2 flex h-20 items-end justify-start rounded-md bg-red-400 p-4 md:h-20'
				href='/'
			>
				minimal-pomodoro
			</Link>
			<div className='flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
				<NavLinks />
			</div>
		</div>
	)
}
