interface Product {
  name: string;
  price: number;
}

type ReadOnlyProduct<T> = {
  // Index signature
  // keyof
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type NUllable<T> = {
  [K in keyof T]: T[K] | null;
};

let product: ReadOnlyProduct<Product> = {
  name: "a",
  price: 1,
};
