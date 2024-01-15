'use client'

import { useTasksStore } from '@/store/tasks'
import { Button } from '../ui/button'

export function CleanTasks() {
	const deleteAllTasks = useTasksStore((state) => state.deleteAllTasks)
	const tasks = useTasksStore((state) => state.tasks)

	return (
		<Button
			className={`w-full ${!tasks.length && 'hidden'}`}
			onClick={deleteAllTasks}
		>
			Delete All
		</Button>
	)
}
