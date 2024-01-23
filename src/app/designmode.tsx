"use client";

import { useState } from "react";

export function ToggleDesignmode() {
	const [designMode, setDesignMode] = useState(false);
	return (
		<button
			className="rounded bg-gray-800 px-4 py-2 text-white"
			onClick={() => {
				if (document.designMode === "on") {
					document.designMode = "off";
					setDesignMode(false);
				} else {
					document.designMode = "on";
					setDesignMode(true);
				}
			}}
		>
			Toggle Designmode ({designMode ? "on" : "off"})
		</button>
	);
}
