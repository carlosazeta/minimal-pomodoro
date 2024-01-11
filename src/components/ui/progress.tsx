'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'

const Progress = React.forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
	const progressValue = value ?? 0

	return (
		<ProgressPrimitive.Root
			ref={ref}
			className={cn(
				'relative flex items-center justify-center',
				'h-40 w-40 rounded-full bg-slate-800', // Tamaño y forma del círculo
				className
			)}
			{...props}
		>
			<ProgressPrimitive.Indicator
				className='absolute rounded-full bg-slate-50'
				style={{
					width: '100%',
					height: '100%',
					transform: `scale(${progressValue / 100})`, // Ajustar el tamaño según el valor
					transformOrigin: 'center',
					transition: 'transform 0.2s ease-out',
				}}
			/>
			<span className='z-10 text-sm font-medium text-white'>{value}%</span>
		</ProgressPrimitive.Root>
	)
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
