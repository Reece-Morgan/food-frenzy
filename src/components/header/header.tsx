import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <header>
      <Title>Food Frenzy</Title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/basket">Basket</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  width: fit-content;
  color: #fb5858;
`;
