"use client";

import React, { createContext, useEffect, useState } from "react";
import { getCMSContent, setCMSContent } from "./api/cms/service.client";

const MutationObserverContext = createContext(null);

export function MutationObserverProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				switch (mutation.type) {
					case "characterData":
						const id = mutation.target.parentElement?.id;
						const content = mutation.target.textContent;
						if (id && content) {
							setCMSContent(id, content);
						}
						break;
					default:
						break;
				}
			});
		});
		observer.observe(document.body, {
			subtree: true,
			characterData: true,
		});
		return () => {
			observer.disconnect();
		};
	}, []);
	return (
		<MutationObserverContext.Provider value={null}>
			{children}
		</MutationObserverContext.Provider>
	);
}

export function useContent(id: string) {
	const [content, setContent] = useState<string | null | undefined>(undefined);
	useEffect(() => {
		getCMSContent(id).then((res) => {
			if (res.ok) {
				res.text().then((text) => {
					setContent(text);
				});
			} else {
				setContent(null);
			}
		});
	}, [id]);

	return content;
}
