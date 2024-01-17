'use client'

import { useEffect, useMemo, useState } from 'react'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

const getInitialTime = (mode: Mode) => {
	const modeDurations = {
		pomodoro: 25 * 60,
		short: 5 * 60,
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

	// Actualizar la URL al cambiar el modo
	const handleModeChange = (newMode: Mode) => {
		// Construir la nueva URL con los parámetros de búsqueda actualizados
		const newSearchParams = new URLSearchParams(searchParams)
		newSearchParams.set('mode', newMode)
		const newUrl = `${pathname}?${newSearchParams.toString()}`

		// Navegar a la nueva URL
		router.push(newUrl)
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
		<section>
			<h1>Timer Page</h1>
			<p>This is the timer page</p>
			<Button onClick={() => handleModeChange('pomodoro')}>Pomodoro</Button>
			<Button onClick={() => handleModeChange('short')}>Short Break</Button>
			<Button onClick={() => handleModeChange('long')}>Long Break</Button>
			<Progress value={progressValue} />
			<p>
				Time left: {Math.floor(timeLeft / 60)}:
				{('0' + (timeLeft % 60)).slice(-2)}
			</p>
			<Button onClick={handleStartClick}>Start</Button>
		</section>
	)
}
