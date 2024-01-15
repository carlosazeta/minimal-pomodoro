'use client'
import { useState } from 'react'
import { Checkbox } from '../ui/checkbox'
import { useTasksStore } from '@/store/tasks'
import { useEffect } from 'react'

export function TaskList() {
	const tasks = useTasksStore((state) => state.tasks)
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		setIsLoaded(true)
	}, [])

	if (!isLoaded) return <div>Loading...</div>

	return tasks.map((task) => (
		<div className='flex items-center space-x-2 my-5' key={task.id}>
			<Checkbox id={`checkbox-${task.id}`} />
			<label
				htmlFor={`checkbox-${task.id}`}
				className='text-sm font-medium leading-5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
			>
				{task.title}
			</label>
		</div>
	))
}
