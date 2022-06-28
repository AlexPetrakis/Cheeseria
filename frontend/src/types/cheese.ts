export type BaseCheeseItem = {
  name: string;
  colour: string;
  image: string;
  price: number;
};

export type Cheese = {
  id: string;
} & BaseCheeseItem;
