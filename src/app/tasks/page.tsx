import { CleanTasks } from '@/components/tasks/cleanTasks'
import { TasksForm } from '@/components/tasks/form'
import { TaskList } from '@/components/tasks/list'

export default function TasksPage() {
	return (
		<section>
			<h1 className='scroll-m-20 mb-8 text-4xl font-bold tracking-tight lg:text-5xl'>
				Task List
			</h1>
			<TasksForm />
			<div className='mt-10'>
				<TaskList />
			</div>
			<CleanTasks />
		</section>
	)
}
