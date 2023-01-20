import type { IColumn, IProduct } from "../interfaces";

const TableBody = ({
	columns,
	data,
}: {
	columns: IColumn[];
	data: IProduct[];
}) => {
	return (
		<tbody>
			{data.map((item) => {
				return (
					<tr key={item.id}>
						{columns.map(({ key }) => {
							const tData = item[key as keyof IProduct] || "__";
							return <td key={key}>{tData}</td>;
						})}
					</tr>
				);
			})}
		</tbody>
	);
};

export default TableBody;
