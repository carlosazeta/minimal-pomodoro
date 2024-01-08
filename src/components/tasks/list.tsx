'use client'

import { useTasks } from '@/context/tasksContext'
import { Checkbox } from '../ui/checkbox'

export function TaskList() {
	const { tasks } = useTasks()

	return tasks.map((task) => (
		<div className='flex items-center space-x-2 my-5' key={task.id}>
			<Checkbox id={`checkbox-${task.id}`} />
			<label
				htmlFor={`checkbox-${task.id}`}
				className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
			>
				{task.title}
			</label>
		</div>
	))
}
