import Sidebar from "./components/sidebar";
import "./globals.css";
import { personalData } from "./data/page-data";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body className='flex flex-col sm:flex-row'>
				<Sidebar data={personalData} />
				<main className='grow-full p-16 basis-4/5 ml-auto'>{children}</main>
			</body>
		</html>
	);
}
