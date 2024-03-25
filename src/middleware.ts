import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default async function middleware() {
	const c = cookies();
	const designmodeCMSCookie = c.get("designmodeCMS");
	const res = NextResponse.next();
	if (!designmodeCMSCookie) {
		res.cookies.set("designmodeCMS", crypto.randomUUID(), {
			secure: true,
			expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
		});
	}
	return res;
}
