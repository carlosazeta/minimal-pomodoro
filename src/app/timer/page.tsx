'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

const getInitialTime = (mode) => {
	const modeDurations = {
		work: 25 * 60,
		shortBreak: 5 * 60,
		longBreak: 15 * 60,
	}
	return modeDurations[mode] || modeDurations['work']
}

export default function TimerPage() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const [timeLeft, setTimeLeft] = useState<number>(getInitialTime(mode))

	useEffect(() => {
		setTimeLeft(getInitialTime(mode))
	}, [mode])

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft((prevTime) => Math.max(prevTime - 1, 0))
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	// Calcular el valor para el componente Progress
	const progressValue =
		((getInitialTime(mode) - timeLeft) / getInitialTime(mode)) * 100

	return (
		<section>
			<h1>Timer Page</h1>
			<p>This is the timer page</p>
			<Progress value={progressValue} />
			<Button>Start</Button>
		</section>
	)
}
