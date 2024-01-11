'use client'

import React, { createContext, useState, useContext } from 'react'
interface TasksProviderProps {
	children: React.ReactNode
}

const TasksContext = createContext<TasksContextType | undefined>(undefined)

export function useTasks() {
	const context = useContext(TasksContext)
	if (!context) {
		throw new Error('useTasks must be used within a TasksProvider')
	}
	return context
}

const getTasksFromLocalStorage = () => {
	const savedTasks = localStorage.getItem('tasks')
	return savedTasks ? JSON.parse(savedTasks) : []
}

const saveTasksToLocalStorage = (tasks: Task[]) => {
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

export function TasksProvider({ children }: TasksProviderProps) {
	const [tasks, setTasks] = useState<Task[]>(() => getTasksFromLocalStorage())

	const addTask = (task: Task) => {
		const newTasks = [...tasks, task]
		setTasks(newTasks)
		saveTasksToLocalStorage(newTasks)
	}

	return (
		<TasksContext.Provider value={{ tasks, addTask }}>
			{children}
		</TasksContext.Provider>
	)
}
