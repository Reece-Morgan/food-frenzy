import styled from "styled-components";
import { useAppSelector } from "../../store";
import { BasketItem } from "../../types";
import { useEffect, useState } from "react";
import breakpoints from "../../settings/breakpoints";
import { useDispatch } from "react-redux";
import {
  removeAllItemFromBasket,
  removeSingleItemFromBasket,
  EmptyBasket,
} from "../../store/basket/basket";
import colours from "../../settings/colours";

function Basket() {
  const dispatch = useDispatch();
  const { basket } = useAppSelector((state) => state.Basket);
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    const newTotalCost = basket
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
    setTotalCost(+newTotalCost);
  }, [basket]);

  const calculateTotalPerItem = (price: number, quantity: number) => {
    const totalPrice = price * quantity;
    // setTotalCost(totalCost + totalPrice);
    return "£" + totalPrice;
  };

  const removeEverythingFromBasket = () => {
    dispatch(EmptyBasket());
  };

  return (
    <>
      {basket.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        <>
          <Table>
            <TableBody>
              {basket.map((item: BasketItem) => (
                <TableRow key={item.id}>
                  <NameData>{item.name}</NameData>
                  <NumberWrapper>
                    <NumberData>
                      £{item.price} x {item.quantity}
                    </NumberData>
                    <TotalData>
                      {calculateTotalPerItem(item.price, item.quantity)}
                    </TotalData>
                  </NumberWrapper>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TotalCost>Total Cost: £{totalCost}</TotalCost>
          <Remove onClick={removeEverythingFromBasket}>Empty Basket</Remove>
        </>
      )}
    </>
  );
}

export default Basket;

const Table = styled.table`
  width: 100%;
  @media (min-width: ${breakpoints.md}) {
    width: 60%;
  }
`;

const TableBody = styled.tbody`
  width: 100%;
`;

const TableRow = styled.tr`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.md}) {
    display: table;
  }
`;

const NameData = styled.td`
  width: 100%;
  @media (min-width: ${breakpoints.md}) {
    width: 50%;
  }
`;

const NumberWrapper = styled.div``;

const NumberData = styled.td`
  width: 270px;
`;

const TotalData = styled.td`
  font-weight: 600;
`;

const TotalCost = styled.p`
  font-weight: 700;
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
