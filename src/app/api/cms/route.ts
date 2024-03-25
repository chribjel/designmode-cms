import { NextResponse, type NextRequest } from "next/server";
import { setCMSContent } from "./service.server";

export async function POST(request: NextRequest) {
	const { id, content } = (await request.json()) as {
		id: string;
		content: string;
	};

	if (!id) {
		return new NextResponse("Missing id", { status: 400 });
	}
	if (!content) {
		return new NextResponse("Missing content", { status: 400 });
	}

	await setCMSContent(id, content);
	return new NextResponse("OK", { status: 200 });
}
