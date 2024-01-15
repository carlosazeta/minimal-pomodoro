import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
	tasks: Task[]
	addTask: (task: Task) => void
}

export const useTasksStore = create<State>()(
	persist(
		(set) => {
			return {
				tasks: [],

				addTask: (task: Task) =>
					set((state) => {
						const newTasks = [...state.tasks, task]
						return { tasks: newTasks }
					}),
			}
		},
		{
			name: 'tasks',
		}
	)
)
