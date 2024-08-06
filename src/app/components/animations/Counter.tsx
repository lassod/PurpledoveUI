"use client";
import React from "react";
import { CounterProps } from "../schema/Types";

export const Counter = ({ target, className }: CounterProps) => {
	const [count, setCount] = React.useState(0);
	const counterRef = React.useRef<HTMLHeadingElement | null>(null); // Reference to the counter element

	React.useEffect(() => {
		const increment = target / 500;
		const updateCounter = () => {
			setCount((prevCount) => {
				if (prevCount < target) return Math.ceil(prevCount + increment);
				else return target;
			});
		};

		// Start interval for counting
		const intervalId = setInterval(updateCounter, 1);

		return () => clearInterval(intervalId); // Clear interval on unmount
	}, [target]); // Only run once when target changes

	React.useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Reset count when the component is in view
					setCount(0);
					// Start counting again
					const increment = target / 100000000000000000000000000;
					const updateCounter = () => {
						setCount((prevCount) => {
							if (prevCount < target) return Math.ceil(prevCount + increment);
							else return target;
						});
					};

					// Start interval for new counting
					const intervalId = setInterval(updateCounter, 1);

					return () => clearInterval(intervalId);
				}
			});
		});

		if (counterRef.current) {
			observer.observe(counterRef.current); // Observe the counter element
		}

		return () => {
			if (counterRef.current) {
				observer.unobserve(counterRef.current); // Clean up observer on unmount
			}
		};
	}, [target]); // This effect depends on the target prop

	return (
		<h3 ref={counterRef} className={`counter ${className}`}>
			{count}+
		</h3>
	);
};
