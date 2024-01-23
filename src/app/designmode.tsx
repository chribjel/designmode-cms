"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ToggleDesignmode() {
	const [designMode, setDesignMode] = useState(false);
	return (
		<Button
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
		</Button>
	);
}
