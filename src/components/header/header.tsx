import { Link } from "react-router-dom";
import styled from "styled-components";
import colours from "../../settings/colours";
import breakpoints from "../../settings/breakpoints";

function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <Title>Food Frenzy</Title>
      </Link>
      <nav>
        <List>
          <ListItem>
            <Link to="/">Products</Link>
          </ListItem>
          <ListItem>
            <Link to="/basket">Basket</Link>
          </ListItem>
        </List>
      </nav>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  width: fit-content;
  color: ${colours.primary};
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
`;

const ListItem = styled.li``;
