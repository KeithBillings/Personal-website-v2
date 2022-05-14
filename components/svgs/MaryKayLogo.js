export default function MaryKayLogo({ fillColor }) {
	const DEFAULT_FILL_COLOR = "black";
	const OFF_WHITE = "rgba(248, 240, 227, 1)";

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.756 192.756">
			<g fillRule="evenodd" clipRule="evenodd">
				<path fill={OFF_WHITE} d="M0 0h192.756v192.756H0V0z" />
				<path d="M102.756 81.243l.145 1.194c1.457.233.932.902.467 2.126L95.36 99.911l-6.932-14.532c-.291-.99-1.748-2.534-.582-2.854l-.088-1.252c-1.776 0-3.262.029-5.009 0v1.252c.378.059.641.146.845.233.407.204 1.193.845 1.543 1.922l8.679 18.23-3.203 6.088c-.739 1.063-2.33 1.806-2.359 1.688l-.204.903c1.223 0 3.728-1.106 4.485-2.563l13.425-25.308c.496-.874 1.02-1.107 1.863-1.223v-1.223c-1.602.029-3.407 0-5.067-.029zM72.526 93.999c-.149-.227-.184-.297-.087-.466 2.533-1.748 4.426-2.97 4.31-5.737-.174-4.98-2.562-6.261-6.814-6.553-2.359.088-4.456.146-6.786.088v1.165c1.282.146 1.398.583 1.398 1.922v15.639c0 1.457.291 2.767-1.398 3.029v1.223c1.807-.029 3.787-.116 5.592 0v-1.193c-1.457-.263-1.223-1.719-1.252-3v-.059-14.62c0-.844-.233-1.573.117-2.476.728-.175 1.631-.378 2.388-.378 2.504 0 3.903 1.573 3.99 5.33.088 3.465-1.689 4.834-5.417 5.184v.582c4.048 3.961 7.193 11.416 13.368 10.397l-.233-.787c-2.07.059-4.225-2.213-9.176-9.29zM55.576 100.552l-8.125-18.959c-.262-.583-.816-.553-.99 0l-.117.262-7.426 17.241c-.437 1.02-.903 2.126-1.573 3-.291.407-.757.67-1.369.844v1.078a38.25 38.25 0 0 1 4.077-.059v-1.252c-.728-.35-.146-1.602.117-2.097l1.281-2.593 4.893-.029 5.039-.028 1.252 2.825c.204.466.612 1.747 0 2.067v1.106c1.66-.029 3.321 0 4.98.029v-1.165c-1.136-.319-1.631-1.338-2.039-2.27zm-9.232-4.048l-4.368.059 4.368-10.339.059-.146 4.281 10.396-4.34.03zM30.356 100.406l-2.33-15.348c0-1.223-.495-2.359.99-2.592v-1.165h-.058c-1.485.117-2.767-.029-4.223-.029-.146.35 0 .699-.146 1.078l-6.64 15.755c-2.737-5.504-5.3-10.105-7.688-15.755-.146-.379.117-.728-.029-1.078-1.63.146-3.116 0-4.717-.029v1.165c.669.116 1.106.262 1.281.466.291.32.32 1.311.087 2.767l-2.358 15.901c-.146 1.106-.612 1.194-1.631 1.311-.029 0-.058 0-.058.029v1.136c1.631-.088 2.825-.059 4.485 0v-1.194c-1.224-.233-.991-.902-.991-2.126l2.039-15.056c3.059 6.261 5.795 11.038 8.446 17.502l.67-.058 7.397-17.562 2.534 14.183c0 .99.932 2.534-.291 2.825v1.281c1.893-.029 3.436-.029 5.3 0v-1.194c-.582-.058-.961-.174-1.194-.291-.351-.203-.875-.844-.875-1.922zM127.277 99.445l-.088-14.853c0-.961.059-1.748.787-2.126.146-.058.291-.116.465-.146v-1.078c-.145 0-.291.029-.465.029-1.631 0-3.262 0-4.893-.029v1.136c1.252.32 1.252 1.194 1.252 2.388v14.765c0 1.136.146 2.563-1.135 2.884v1.136c1.572-.059 3.203-.088 4.775-.029.174.029.35.029.494.058v-1.135a1.423 1.423 0 0 1-.494-.176c-.786-.464-.698-1.688-.698-2.824zM184.883 81.243l.117 1.195c1.484.233.932.902.465 2.126l-8.008 15.348-6.902-14.532c-.32-.99-1.777-2.534-.582-2.854l-.088-1.252c-1.777 0-3.291.029-5.01 0v1.252c.35.059.641.146.816.233.436.204 1.223.845 1.543 1.922l8.678 18.23-3.174 6.088c-.674 1.027-2.33 1.806-2.359 1.688l-.203.903c1.223 0 3.699-1.106 4.484-2.563l13.426-25.308c.496-.874.99-1.107 1.836-1.223v-1.223c-1.604.028-3.379-.001-5.039-.03zM162.721 100.552l-8.127-18.959c-.262-.583-.814-.553-1.018 0l-.117.262-7.426 17.241c-.438 1.02-.875 2.126-1.543 3-.322.407-.787.67-1.369.844v1.078a37.683 37.683 0 0 1 4.047-.059v-1.252c-.729-.35-.145-1.602.117-2.097l1.311-2.593 4.863-.029 5.039-.028 1.281 2.825c.203.466.582 1.747 0 2.067v1.106c1.66-.029 3.291 0 4.951.029v-1.165c-1.136-.319-1.63-1.338-2.009-2.27zm-9.262-4.048l-4.369.059 4.369-10.339.059-.146 4.311 10.396-4.37.03z" />
				<path d="M130.48 90.737c-.145-.204 0-.35-.117-.495l5.855-6.262c1.311-1.369 1.922-1.573 3.553-1.631V81.33c-1.34.058-2.65 0-3.99-.088v.262c0 1.252-.961 1.834-1.777 2.708-2.037 2.242-3.697 4.485-6.027 6.437-.146.116-.32.262-.467.378v.32c.146.059.291.175.467.32 2.387 2.068 8.125 12.174 14.619 12.087l.088-.787c-3.465-.201-9.291-9.696-12.204-12.23z" />
			</g>
		</svg>
	);
}
