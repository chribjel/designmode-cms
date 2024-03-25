"use client";
import { useContent } from "./MutationObserverProvider";

export function ClientContent() {
	const content = useContent("test1234");

	return (
		<>
			<p
				id="test1234"
				className="p-2 outline outline-2 outline-purple-500"
			>
				{content === undefined
					? "loading..."
					: content === null
						? "default value"
						: content}
			</p>
		</>
	);
}
