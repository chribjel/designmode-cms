import "server-only";
import { kv } from "@vercel/kv";
import { cookies, headers } from "next/headers";

export async function getCMSContent(id: string) {
	let designModeCMS = cookies().get("designmodeCMS")?.value;
	if (!designModeCMS) {
		designModeCMS = headers()
			.get("Set-Cookie")
			?.match(/designmodeCMS=([^;]*)/)?.[1];
		if (!designModeCMS) {
			throw new Error("Unauthorized");
		}
	}
	const content = await kv.get<string>(`${designModeCMS}-${id}`);
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
