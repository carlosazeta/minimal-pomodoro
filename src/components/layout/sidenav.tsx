import Link from 'next/link'
import NavLinks from './nav-links'

export default function SideNav() {
	return (
		<div className='flex h-full flex-col px-3 py-4 md:px-2 md:py-0'>
			<Link
				className='text-center items-end justify-center p-4  scroll-m-20 text-xl font-semibold tracking-tight md:flex md:h-20 md:justify-start'
				href='/'
			>
				minimal_pomodoro
			</Link>
			<div className='flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
				<NavLinks />
			</div>
		</div>
	)
}
