import { TasksForm } from '@/components/tasks/form'
import { TaskList } from '@/components/tasks/list'
import { TasksProvider } from '@/context/tasksContext'

export default function TasksPage() {
	return (
		<TasksProvider>
			<section>
				<h1 className='scroll-m-20 mb-8 text-4xl font-bold tracking-tight lg:text-5xl'>
					TASK LIST
				</h1>
				<TasksForm />
				<div className='mt-10'>
					<TaskList />
				</div>
			</section>
		</TasksProvider>
	)
}
