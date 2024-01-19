import type { Metadata } from 'next'
import './globals.css'
import SideNav from '../components/layout/sidenav'
import { outfit } from '@/components/ui/fonts'

export const metadata: Metadata = {
	title: 'Minimal Pomodoro',
	description:
		'Minimal Pomodoro is a sleek, straightforward app designed to boost your productivity using the Pomodoro Technique. Emphasizing simplicity and ease of use, this app assists you in staying focused on your tasks with customizable work and break timers. No distractions, just pure efficiency to help you better manage your time and complete your tasks more effectively. Ideal for students, professionals, and anyone looking to improve their time management.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${outfit.className} antialiased flex h-screen flex-col md:flex-row md:overflow-hidden bg-black text-gray-50`}
			>
				<div className='w-full flex-none md:w-64'>
					<SideNav />
				</div>
				<div className='md:flex flex-grow justify-center md:p-10'>
					{children}
				</div>
			</body>
		</html>
	)
}
