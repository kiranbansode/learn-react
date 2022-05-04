// our-domain.com/news
import Link from "next/link";

function NewsPage() {
	return (
		<>
			<h1>News Page</h1>
			<ul>
				<li>
					<Link href="/news/news1">NextJs is a Great Framework</Link>
				</li>
				<li>Something Else</li>
			</ul>
		</>
	);
}

export default NewsPage;
