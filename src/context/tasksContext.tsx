'use client'

import React, { createContext, useState, useContext } from 'react'

type Task = {
	id: string
	title: string
	// ...otros campos
}

interface TasksContextType {
	tasks: Task[]
	addTask: (task: Task) => void
}

const TasksContext = createContext<TasksContextType | undefined>(undefined)

export function useTasks() {
	const context = useContext(TasksContext)
	if (!context) {
		throw new Error('useTasks must be used within a TasksProvider')
	}
	return context
}

interface TasksProviderProps {
	children: React.ReactNode
}

export function TasksProvider({ children }: TasksProviderProps) {
	const [tasks, setTasks] = useState<Task[]>([])

	const addTask = (task: Task) => {
		setTasks((prevTasks) => [...prevTasks, task])
	}

	return (
		<TasksContext.Provider value={{ tasks, addTask }}>
			{children}
		</TasksContext.Provider>
	)
}
