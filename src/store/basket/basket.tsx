import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Basket = {
  basket: BasketItem[];
};

type BasketItem = {
  name: string;
  price: number;
  id: number;
};

const initialState: Basket = {
  basket: [],
};

const BasketSlice = createSlice({
  name: "Basket",
  initialState,
  reducers: {
    addItemToBasket: (state, action: PayloadAction<BasketItem>) => {
      state.basket.push(action.payload);
    },
    removeItemFromBasket: (state, action: PayloadAction<BasketItem>) => {
      state.basket = state.basket.filter(
        (item: BasketItem) => item.id !== action.payload.id
      );
    },
  },
});

const { actions, reducer } = BasketSlice;
export const { addItemToBasket, removeItemFromBasket } = actions;
export const BasketReducer = reducer;
