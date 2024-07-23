import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import styled from "styled-components";

const Layout = () => {
  return (
    <Wrapper>
      <Header />

      <Outlet />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  margin: 0 20px;
`;
