import type { NextRequest } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(request: NextRequest) {
	const { id, content } = (await request.json()) as {
		id: string;
		content: string;
	};

	if (!id) {
		return new Response("Missing id", { status: 400 });
	}
	if (!content) {
		return new Response("Missing content", { status: 400 });
	}

	await kv.set(id, content);
	return new Response("OK", { status: 200 });
}
