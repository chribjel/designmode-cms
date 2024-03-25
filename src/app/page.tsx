import { ToggleDesignmode } from "./designmode";
import { ClientContent } from "./ClientContent";
import { getCMSContent } from "./api/cms/service.server";

export const dynamic = "force-dynamic";

export default async function Home() {
	const contentId = "test123";
	const content = await getCMSContent(contentId);

	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<h1 className="mb-10 text-4xl">Designmode CMS</h1>
			<p>Server: You can edit the below text, and it will persist</p>
			<p id={contentId}>{content ?? "default value"}</p>
			<p className="mt-5">
				Client: You can edit the below text, and it will persist
			</p>
			<ClientContent />
			<p className="my-5">
				You can toggle designmode and edit the above text, and it will persist
			</p>
			<ToggleDesignmode />
		</main>
	);
}
