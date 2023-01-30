import { FC, useState } from "react";
import { ColorSchemeProvider, MantineProvider, Title } from "@mantine/core";
import type { ColorScheme } from "@mantine/core";
import SimpleTable from "./components/Table";
import ToggleTheme from "./components/shared/ToggleTheme";

const App: FC = () => {
	const [colorScheme, setColorScheme] = useState<ColorScheme>("light");

	const toggleColorScheme = (value?: ColorScheme) => {
		setColorScheme(value || colorScheme === "dark" ? "light" : "dark");
	};

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{ colorScheme }}
			>
				<Title>Sortable table with react</Title>
				<ToggleTheme />
				<SimpleTable />
			</MantineProvider>
		</ColorSchemeProvider>
	);
};

export default App;

// Using Sorting in js

// const arr = [3, 1, 4, 2, 5];
// arr.sort((a, b) => a - b);

// console.log(arr);

// const arr2 = ["a", "e", "c", "b", "d"];
// arr2.sort((a, b) => a.localeCompare(b));
// console.log(arr2);
// arr2.sort((a, b) => b.localeCompare(a));
// console.log(arr2);
// arr2.sort((a, b) => a > b ? 1 : -1);
// console.log(arr2);
// arr2.sort((a, b) => b > a ? 1 : -1);
// console.log(arr2);
