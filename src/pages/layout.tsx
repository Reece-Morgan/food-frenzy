import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Header />

      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default Layout;

const Content = styled.div`
  padding: 0 20px;
`;
