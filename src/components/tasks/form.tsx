'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useTasks } from '@/context/tasksContext'

const formSchema = z.object({
	title: z
		.string()
		.min(2, {
			message: 'The task must be at least 2 characters.',
		})
		.max(50),
})

export function TasksForm() {
	const { addTask } = useTasks()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '',
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		const newTask: Task = {
			id: crypto.randomUUID(),
			title: values.title,
		}
		addTask(newTask)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<div className='flex items-center'>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem className='flex-grow space-y-0 max-w-80'>
								<FormLabel className='sr-only'>Task input</FormLabel>
								<FormControl>
									<Input
										placeholder='Write here your task ...'
										{...field}
										className='self-center'
									/>
								</FormControl>
								<FormDescription className='sr-only'>
									Enter a brief description of your task.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type='submit' className='ml-2'>
						Add
					</Button>
				</div>
			</form>
		</Form>
	)
}
