interface IProduct {
	id: number;
	title: string;
	price: number;
	brand: string;
	rating: number;
	category: string;
}

interface IColumn {
    label: string;
    key: string;
    sortable: boolean
}

export type { IProduct, IColumn };
