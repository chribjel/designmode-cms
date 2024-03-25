import "server-only";
import { kv } from "@vercel/kv";
import { cookies } from "next/headers";

export async function getCMSContent(id: string) {
	const c = cookies().get("designmodeCMS");
	if (!c) {
		throw new Error("Unauthorized");
	}
	const cVal = c.value;
	const content = await kv.get<string>(`${cVal}-${id}`);
	return content;
}

export async function setCMSContent(id: string, content: string) {
	const c = cookies().get("designmodeCMS");
	if (!c) {
		throw new Error("Unauthorized");
	}
	const cVal = c.value;
	await kv.set(`${cVal}-${id}`, content);
}
