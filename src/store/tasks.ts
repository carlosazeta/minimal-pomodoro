import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
	tasks: Task[]
	addTask: (task: Task) => void
	deleteAllTasks: () => void
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

				deleteAllTasks: () =>
					set(() => {
						return { tasks: [] }
					}),
			}
		},
		{
			name: 'tasks',
		}
	)
)
