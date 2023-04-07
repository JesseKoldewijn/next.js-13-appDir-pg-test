import Link from "next/link";
const page = () => {
	return (
		<main>
			check db content {"->"} <Link href={"/api"}>Click here!</Link>
		</main>
	);
};

export default page;
