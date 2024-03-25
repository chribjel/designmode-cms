import "client-only";

export async function getCMSContent(id: string) {
	return await fetch(`/api/cms/${id}`, {
		credentials: "include",
	});
}

export async function setCMSContent(id: string, content: string) {
	return await fetch(`/api/cms`, {
		method: "POST",
		body: JSON.stringify({
			id,
			content,
		}),
		credentials: "include",
	});
}
