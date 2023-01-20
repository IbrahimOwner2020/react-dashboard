import { useState } from "react";
import { IColumn } from "../interfaces";

const TableHead = ({
	columns,
	handleSorting,
}: {
	columns: IColumn[];
	handleSorting: (key: string, order: string) => void;
}) => {
	const [sortField, setSortField] = useState("");
	const [order, setOrder] = useState("asc");

	const handleSortingChange = (key: string) => {
		const sortOrder = key === sortField && order === "asc" ? "desc" : "asc";
		setSortField(key);
		setOrder(sortOrder);
		handleSorting(key, sortOrder);
	};

	return (
		<thead>
			<tr>
				{columns.map(({ label, key, sortable }) => {
					return (
						<th
							key={key}
							onClick={
								sortable
									? () => handleSortingChange(key)
									: undefined
							}
						>
							{label}
						</th>
					);
				})}
			</tr>
		</thead>
	);
};

export default TableHead;
