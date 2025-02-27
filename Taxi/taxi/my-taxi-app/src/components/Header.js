// src/components/Header.js
import React from "react";
import styled from "styled-components";
// import "./Styles/Header.css";

// استایل برای کامپوننت Header
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background-color: #f27c3f;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e0601f;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    color: #f27c3f;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>تپسی</Logo>
      <NavLinks>
        <NavLink href="#">خدمات کسب و کارها</NavLink>
        <NavLink href="#">وبلاگ</NavLink>
        <NavLink href="#">فرصت‌های شغلی</NavLink>
        <NavLink href="#">پشتیبانی</NavLink>
      </NavLinks>
      <Button>دانلود تپسی</Button>
    </HeaderContainer>
  );
};

export default Header;
