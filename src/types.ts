export type Products = {
  products: Product[];
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export type BasketItem = {
  name: string;
  price: number;
  id: number;
};
