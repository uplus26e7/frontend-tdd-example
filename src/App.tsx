import { MantineProvider } from "@mantine/core";
import { Counter } from "./Counter";

export default function App() {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Counter />
		</MantineProvider>
	);
}
