import { Progress } from '@/components/ui/progress'

export default function TimerPage() {
	return (
		<section>
			<h1>Timer Page</h1>
			<p>This is the timer page</p>
			<Progress value={80} />
		</section>
	)
}
