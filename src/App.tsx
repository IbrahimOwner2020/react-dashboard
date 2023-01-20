import { FC } from "react";
import SimpleTable from "./components/Table";

const App: FC = () => {
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

	return (
		<div>
			<h1>Sortable table with react</h1>
			<SimpleTable />
		</div>
	);
};

export default App;