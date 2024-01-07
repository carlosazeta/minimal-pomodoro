'use client'

import {
	ClockIcon,
	BookOpenIcon,
	MusicalNoteIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
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
						className={`flex h-[48px] grow items-center justify-center gap-2 p-3 text-sm font-medium rounded-md text-gray-200 hover:bg-stone-950	 md:flex-none md:justify-start md:p-2 md:px-3 ${
							isActive ? 'bg-stone-950' : ''
						}`}
					>
						<LinkIcon className='w-6 text-gray-200' />
						<p className='hidden md:block'>{link.name}</p>
					</Link>
				)
			})}
		</>
	)
}
