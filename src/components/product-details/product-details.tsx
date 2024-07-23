import styled from "styled-components";
import { Product } from "../../types";
import colours from "../../settings/colours";

interface Props {
  product: Product;
}

function ProductDetails({ product }: Props) {
  return (
    <>
      <Details>
        <Name>{product.name}</Name>
        <Cost>£{product.price}</Cost>
      </Details>
      <Description>{product.description}</Description>
      <Button>Add to Basket</Button>
    </>
  );
}

export default ProductDetails;

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
