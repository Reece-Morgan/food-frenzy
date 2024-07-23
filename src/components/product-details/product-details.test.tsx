import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ProductDetails from "./product-details";

const mockStore = configureStore([]);

describe("ProductDetails", () => {
  let store: any;
  const product = {
    id: 1,
    name: "Product 1",
    price: 10,
    description: "This is a product",
  };

  beforeEach(() => {
    store = mockStore({
      Basket: {
        basket: [],
      },
    });
  });

  test("renders product details correctly", () => {
    render(
      <Provider store={store}>
        <ProductDetails product={product} />
      </Provider>
    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(`£${product.price}`)).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
    expect(screen.getByText("Add to Basket")).toBeInTheDocument();
  });

  test('adds product to basket when "Add to Basket" button is clicked', () => {
    render(
      <Provider store={store}>
        <ProductDetails product={product} />
      </Provider>
    );

    fireEvent.click(screen.getByText("Add to Basket"));

    const actions = store.getActions();
    expect(actions).toEqual([
      {
        type: "Basket/addItemToBasket",
        payload: {
          name: product.name,
          price: product.price,
          id: product.id,
          quantity: 1,
        },
      },
    ]);
  });

  test('removes single product from basket when "Remove Single" button is clicked', () => {
    store = mockStore({
      Basket: {
        basket: [
          {
            name: product.name,
            price: product.price,
            id: product.id,
            quantity: 2,
          },
        ],
      },
    });

    render(
      <Provider store={store}>
        <ProductDetails product={product} />
      </Provider>
    );

    fireEvent.click(screen.getByText("Remove Single"));

    const actions = store.getActions();
    expect(actions).toEqual([
      {
        type: "Basket/removeSingleItemFromBasket",
        payload: {
          name: product.name,
          price: product.price,
          id: product.id,
          quantity: 1,
        },
      },
    ]);
  });

  test('removes all products from basket when "Remove All" button is clicked', () => {
    store = mockStore({
      Basket: {
        basket: [
          {
            name: product.name,
            price: product.price,
            id: product.id,
            quantity: 2,
          },
        ],
      },
    });

    render(
      <Provider store={store}>
        <ProductDetails product={product} />
      </Provider>
    );

    fireEvent.click(screen.getByText("Remove All"));

    const actions = store.getActions();
    expect(actions).toEqual([
      {
        type: "Basket/removeAllItemFromBasket",
        payload: {
          name: product.name,
          price: product.price,
          id: product.id,
          quantity: 1,
        },
      },
    ]);
  });
});
