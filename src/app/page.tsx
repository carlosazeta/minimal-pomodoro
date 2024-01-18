import TimerPage from './timer/page'
import TasksPage from './tasks/page'

export default function Home() {
	return (
		<main className='flex flex-col lg:flex-row min-h-screen gap-12 md:gap-28 mb-12'>
			<TimerPage />
			<TasksPage />
		</main>
	)
}
