type Task = {
	id: string
	title: string
}

type TaskId = Task['id']

interface TasksContextType {
	tasks: Task[]
	addTask: (task: Task) => void
}

type Mode = 'pomodoro' | 'short' | 'long'
