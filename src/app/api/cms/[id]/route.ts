import { kv } from "@vercel/kv";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const content = await kv.get<string>(params.id);

	if (!content) {
		return new Response("Not found", { status: 404 });
	}

	return new Response(content, { status: 200 });
}
