import { FC } from "react";
import { useMantineColorScheme, ActionIcon } from "@mantine/core";
// import { IconSun, IconMoon } from "@tabler/icons";

const ToggleTheme: FC = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	return (
		<ActionIcon
			variant="outline"
			color={colorScheme === "dark" ? "yellow" : "blue"}
			title="Toggle color theme"
			onClick={() => toggleColorScheme()}
		>
			{colorScheme === "dark" ? <p>light</p> : <p>dark</p>}
		</ActionIcon>
	);
};

export default ToggleTheme;
