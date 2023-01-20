import { useState } from "react";
import { IProduct } from "../interfaces";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const getData = () => {
	return fetch("https://dummyjson.com/products")
		.then((res) => res.json())
		.then((data) => {
			return data.products.map((el: any) => {
				return {
                    id: el.id,
					title: el.title,
					brand: el.brand,
					category: el.category,
					price: el.price,
					ratings: el.rating,
				};
			});
		});
};

const Table = () => {
	const [data, setData] = useState<IProduct[] | null>(null);

	useState(() => {
		getData().then((data) => setData(data));
	});

    const handleSorting = (key: string, order: string) => {
        const sortedData = [...data!];
        sortedData.sort((a, b) => {
            if (a[key as keyof typeof a] > b[key as keyof typeof b]) {
                return order === "asc" ? 1 : -1;
            }
            if (a[key as keyof typeof a] < b[key as keyof typeof b]) {
                return order === "asc" ? -1 : 1;
            }
            return 0;
        });
        setData(sortedData);
    }

	const columns = [
		{
			label: "Title",
			key: "title",
            sortable: true
		},
		{
			label: "Brand",
			key: "brand",
            sortable: true
		},
		{
			label: "Category",
			key: "category",
            sortable: true
		},
		{
			label: "Price",
			key: "price",
            sortable: true
		},
		{
			label: "Ratings",
			key: "ratings",
            sortable: true
		},
	];

	if (!data) return <p>Loading...</p>;

	return (
		<table>
			<caption>
				Developers currently enrolled in this course, column headers are
				sortable.
			</caption>
			<TableHead columns={columns} handleSorting={handleSorting} />
			<TableBody data={data} columns={columns} />
		</table>
	);
};

export default Table;
