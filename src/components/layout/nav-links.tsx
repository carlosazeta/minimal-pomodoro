'use client'

import {
	ClockIcon,
	BookOpenIcon,
	MusicalNoteIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
	{ name: 'Timer', href: '/timer', icon: ClockIcon },
	{
		name: 'Tasks',
		href: '/tasks',
		icon: BookOpenIcon,
	},
	{ name: 'Music', href: '/music', icon: MusicalNoteIcon },
]

export default function NavLinks() {
	const pathname = usePathname()
	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon
				const isActive = link.href === pathname
				return (
					<Link
						key={link.name}
						href={link.href}
						className={`flex items-center justify-center gap-2 p-3 text-sm font-medium text-gray-400 hover:text-gray-50
            md:flex-none md:justify-start md:p-2 md:px-3 
            h-[48px] grow 
            transform transition duration-200 ease-in-out 
            hover:scale-98 hover:translate-y-0.5 hover:translate-x-1 
            ${isActive ? 'text-gray-200' : ''}`}
					>
						<LinkIcon className='w-6' />
						<p className='hidden md:block'>{link.name}</p>
					</Link>
				)
			})}
		</>
	)
}
