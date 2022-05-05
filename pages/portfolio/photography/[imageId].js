import { useRouter } from "next/router";

export default function ImageDetail() {
	const router = useRouter(); // import router hook from next
	const imageId = router.query.imageId; // imageId on the query object corresponds to the dynamic segment we have specified for the file name.

	return (
		<>
			<p>details about image</p>
			<p>Photo name: {imageId}</p>
		</>
	);
}
