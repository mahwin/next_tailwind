import React from "react";
import styled from "styled-components";
import { AiFillAlipayCircle, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useState } from "react";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #263343;
  padding: 8px 12px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 24px;

  svg {
    color: #d49466;
    margin-right: 5px;
  }
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0;
  color: white;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 8px 12px;
  }
`;

const Item = styled.li`
  padding: 8px 12px;
  &:hover {
    background-color: #d49466;
    border-radius: 4px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const SnsLinks = styled.div`
  display: flex;

  a {
    padding: 8px 12px;
  }
  a svg {
    color: #ffffff;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const ToggleMenu = styled.button`
  display: none;
  right: 32px;
  top: 10px;
  position: absolute;
  font-size: 24px;
  color: white;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Nav>
      <Logo>
        <AiFillAlipayCircle />
        <Link href="/">DreamCoding</Link>
      </Logo>
      <Items isOpen={isOpen}>
        <Item>
          <Link href="/">Home</Link>
        </Item>
        <Item>
          <Link href="/">Gallery</Link>
        </Item>
        <Item>
          <Link href="/">Weddings</Link>
        </Item>
        <Item>
          <Link href="/">FAQ</Link>
        </Item>
        <Item>
          <Link href="/">Bookings</Link>
        </Item>
      </Items>
      <SnsLinks isOpen={isOpen}>
        <Link href="/">
          <a>
            <AiFillTwitterCircle />
          </a>
        </Link>
        <Link href="/">
          <a>
            <BsFacebook />
          </a>
        </Link>
      </SnsLinks>
      <ToggleMenu onClick={toggleClick}>
        <GiHamburgerMenu />
      </ToggleMenu>
    </Nav>
  );
}
