import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pokedex from "./Pokedex/Pokedex";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	});

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Pokedex />,
		},
	]);

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};

export default App;
