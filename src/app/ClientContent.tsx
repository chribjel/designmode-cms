"use client";
import { useContent } from "./MutationObserverProvider";

export function ClientContent() {
	const content = useContent("test1234");

	return (
		<>
			<p id="test1234">
				{content === undefined
					? "loading..."
					: content === null
						? "default value"
						: content}
			</p>
		</>
	);
}
