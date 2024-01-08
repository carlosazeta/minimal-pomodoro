type Task = {
	id: string
	title: string
}

interface TasksContextType {
	tasks: Task[]
	addTask: (task: Task) => void
}
