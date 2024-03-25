import { ToggleDesignmode } from "./designmode";
import { ClientContent } from "./ClientContent";
import { getCMSContent } from "./api/cms/service.server";

export const dynamic = "force-dynamic";

export default async function Home() {
	const contentId = "test123";
	const content = await getCMSContent(contentId);

	return (
		<main className="flex h-full max-w-xl flex-col items-center gap-4 p-4">
			<h1 className="mb-10 text-4xl">Designmode CMS</h1>
			<p className="font-semibold">
				Toggle designmode and edit the outlined text, and it will persist
				between refreshes and browser sessions.
			</p>
			<p>Server component:</p>
			<p
				id={contentId}
				className="p-2 outline outline-2 outline-purple-500"
			>
				{content ?? "default value"}
			</p>
			<p>Client component:</p>
			<ClientContent />
			<ToggleDesignmode />
			<p>
				It is not stored in <code>localStorage</code>,{" "}
				<code>sessionStorage</code> or <code>cookies</code>.
			</p>
			<p>
				Designmode CMS uses the <code>MutationObserver</code> to listen for
				changes in the DOM combined with <code>document.designmode</code> and a
				KV-store to provide a CMS-like live editing experience.
			</p>
			<p>
				I have used cookies to seperate users so that no conflicts happen, but
				you could add authentication to this to make it &quot;real&quot;.
			</p>
		</main>
	);
}
