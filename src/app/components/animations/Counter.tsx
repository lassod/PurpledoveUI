"use client";
import React from "react";
import { CounterProps } from "../schema/Types";

export const Counter = ({ target, className }: CounterProps) => {
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		const increment = target / 500;
		const updateCounter = () => {
			setCount((prevCount) => {
				if (prevCount < target) return Math.ceil(prevCount + increment);
				else return target;
			});
		};

		const intervalId = setInterval(updateCounter, 1);

		return () => clearInterval(intervalId);
	}, [target]);

	return <h3 className={`counter ${className}`}>{count}+</h3>;
};
