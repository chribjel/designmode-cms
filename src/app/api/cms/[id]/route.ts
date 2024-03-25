import { NextResponse, type NextRequest } from "next/server";
import { getCMSContent } from "../service.server";

export const dynamic = "force-dynamic";

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	if (!params.id) {
		return new NextResponse("Missing id", { status: 400 });
	}

	const content = await getCMSContent(params.id);
	if (!content) {
		return new NextResponse("Not found", { status: 404 });
	}

	return new NextResponse(content, { status: 200 });
}
