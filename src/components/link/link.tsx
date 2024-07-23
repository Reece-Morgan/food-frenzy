import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colours from "../../settings/colours";

interface Props {
  href: string;
  children: ReactNode;
}

function StyledLink({ href, children }: Props) {
  return <CustomLink to={href}>{children}</CustomLink>;
}

export default StyledLink;

const CustomLink = styled(Link)`
  color: ${colours.primary};
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: ${colours.secondary};
    text-decoration: underline;
  }
`;
