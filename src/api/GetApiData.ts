export const GetApiData = async (): Promise<void> => {
	const endpoints = [];

	try {
		for (var i = 1; i <= 100; i++) {
			endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
		}
		await Promise.all(endpoints.map((endpoint) => fetch(endpoint))).then(
			(res) =>
				Promise.all(res.map(async (r) => r.json())).then((res) =>
					{console.log(res)}
				)
		);
	} catch (error) {
		console.log(error);
	}
};
