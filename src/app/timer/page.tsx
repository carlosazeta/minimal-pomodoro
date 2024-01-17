'use client'

import { useEffect, useMemo, useState } from 'react'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

const getInitialTime = (mode: Mode) => {
	const modeDurations = {
		pomodoro: 25 * 60,
		short: 1 * 60,
		long: 15 * 60,
	}
	return modeDurations[mode]
}

export default function TimerPage() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const mode = (searchParams.get('mode') as Mode) || 'pomodoro'
	const [timeLeft, setTimeLeft] = useState<number>(getInitialTime(mode))
	const [isActive, setIsActive] = useState<Boolean>(false)

	const handleStartClick = () => {
		setIsActive(!isActive)
	}

	const handleModeChange = (newMode: Mode) => {
		const newSearchParams = new URLSearchParams(searchParams)
		newSearchParams.set('mode', newMode)
		const newUrl = `${pathname}?${newSearchParams.toString()}`

		router.push(newUrl)

		setIsActive(false)
	}

	useEffect(() => {
		setTimeLeft(getInitialTime(mode))
	}, [mode])

	useEffect(() => {
		if (!isActive) return
		const timer = setInterval(() => {
			setTimeLeft((prevTime) => Math.max(prevTime - 1, 0))
		}, 1000)

		return () => clearInterval(timer)
	}, [timeLeft, isActive])

	const progressValue = useMemo(() => {
		return ((getInitialTime(mode) - timeLeft) / getInitialTime(mode)) * 100
	}, [timeLeft, mode])

	return (
		<section className='flex flex-col items-center'>
			<h1 className='scroll-m-20 mb-8 text-4xl font-bold tracking-tight lg:text-5xl'>
				Timer
			</h1>
			<div className='flex flex-col items-center p-10 rounded-lg border-2 border-slate-700 hover:border-slate-500 transition-all duration-300 '>
				<div className='flex gap-2 mb-6'>
					<Button onClick={() => handleModeChange('pomodoro')}>Pomodoro</Button>
					<Button onClick={() => handleModeChange('short')}>Short Break</Button>
					<Button onClick={() => handleModeChange('long')}>Long Break</Button>
				</div>
				<p className='mb-4 tabular-nums scroll-m-20 text-4xl font-extrabold lg:text-7xl'>
					{Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}
				</p>
				<Progress value={progressValue} className='mb-6' />
				<Button onClick={handleStartClick}>
					{isActive ? 'Stop' : 'Start'}
				</Button>
			</div>
		</section>
	)
}
