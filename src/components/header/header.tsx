import styled from "styled-components";
import colours from "../../settings/colours";
import StyledLink from "../link/link";

function Header() {
  return (
    <StyledHeader>
      <StyledLink href="/">
        <img src="/logo-alt.svg" alt="Food Frenzy" width={150} height={70} />
      </StyledLink>
      <nav>
        <List>
          <ListItem>
            <StyledLink href="/">Products</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink href="/basket">Basket</StyledLink>
          </ListItem>
        </List>
      </nav>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${colours.background};
  padding: 0 20px;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
`;

const ListItem = styled.li``;
