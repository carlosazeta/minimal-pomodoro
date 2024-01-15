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
import { useTasksStore } from '@/store/tasks'

const formSchema = z.object({
	title: z
		.string()
		.min(2, {
			message: 'The task must be at least 2 characters.',
		})
		.max(200),
})

export function TasksForm() {
	const addTask = useTasksStore((state) => state.addTask)

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
		form.reset()
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<div className='flex items-center'>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem className='flex-grow space-y-0 max-w-full'>
								<FormLabel className='sr-only'>Task input</FormLabel>
								<FormControl>
									<Input
										placeholder='Write here your task...'
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
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.3}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 4.5v15m7.5-7.5h-15'
							/>
						</svg>
					</Button>
				</div>
			</form>
		</Form>
	)
}
