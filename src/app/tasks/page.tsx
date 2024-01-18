import { CleanTasks } from '@/components/tasks/cleanTasks'
import { TasksForm } from '@/components/tasks/form'
import { TaskList } from '@/components/tasks/list'

export default function TasksPage() {
	return (
		<section className='flex flex-col items-center'>
			<h1 className='scroll-m-20 mb-8 text-4xl font-bold tracking-tight lg:text-5xl'>
				Tasks
			</h1>
			<div className='w-96 md:min-w-128 p-10 rounded-lg border-2 border-slate-700 hover:border-slate-500 transition-all duration-300'>
				<TasksForm />
				<div className='mt-10'>
					<TaskList />
				</div>
				<CleanTasks />
			</div>
		</section>
	)
}
