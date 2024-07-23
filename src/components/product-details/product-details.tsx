import styled from "styled-components";
import { BasketItem, Product } from "../../types";
import colours from "../../settings/colours";
import { useDispatch } from "react-redux";
import {
  addItemToBasket,
  removeAllItemFromBasket,
  removeSingleItemFromBasket,
} from "../../store/basket/basket";
import { useAppSelector } from "../../store";
import breakpoints from "../../settings/breakpoints";

interface Props {
  product: Product;
}

function ProductDetails({ product }: Props) {
  const dispatch = useDispatch();
  const { basket } = useAppSelector((state) => state.Basket);

  const addProductToBasket = (item: Product) => {
    const basketItem: BasketItem = {
      name: item.name,
      price: item.price,
      id: item.id,
      quantity: 1,
    };
    dispatch(addItemToBasket(basketItem));
  };

  const removeSingleProductFromBasket = (item: Product) => {
    const basketItem: BasketItem = {
      name: item.name,
      price: item.price,
      id: item.id,
      quantity: 1,
    };
    console.log(basketItem);
    dispatch(removeSingleItemFromBasket(basketItem));
  };

  const removeAllProductFromBasket = (item: Product) => {
    const basketItem: BasketItem = {
      name: item.name,
      price: item.price,
      id: item.id,
      quantity: 1,
    };
    dispatch(removeAllItemFromBasket(basketItem));
  };

  const amountInBasket = basket.find(
    (item) => item.id === product.id
  )?.quantity;

  return (
    <Wrapper>
      <Details>
        <Name>{product.name}</Name>
        <Cost>£{product.price}</Cost>
      </Details>
      <Description>{product.description}</Description>
      <Button onClick={() => addProductToBasket(product)}>Add to Basket</Button>
      {amountInBasket && (
        <AmountWrapper>
          <Amount>{amountInBasket} in your basket</Amount>
          <Remove onClick={() => removeSingleProductFromBasket(product)}>
            Remove Single
          </Remove>
          <Remove onClick={() => removeAllProductFromBasket(product)}>
            Remove All
          </Remove>
        </AmountWrapper>
      )}
    </Wrapper>
  );
}

export default ProductDetails;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.lg}) {
    width: 50%;
  }
  @media (min-width: ${breakpoints.lg}) {
    width: 33%;
  }
`;

const Details = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const Name = styled.h2`
  margin: 5px 0;
`;

const Cost = styled.p`
  margin: 0;
`;

const Description = styled.p`
  margin: 5px 0 15px 0;
`;

const AmountWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 5px 0 0 0;
`;

const Amount = styled.div`
  margin: 0;
`;

const Remove = styled.p`
  text-decoration: underline;
  cursor: pointer;
  font-weight: 600;
  margin: 0;
  &:hover {
    color: ${colours.tertiary};
  }
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 0.5rem;
  border: 2px solid ${colours.secondary};
  background-color: ${colours.secondary};
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: ${colours.secondary};
    border: 2px solid ${colours.secondary};
  }
`;
