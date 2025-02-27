import React from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/background1.png"; // تصویر پس‌زمینه

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  background: url(${BackgroundImage}) no-repeat center center;
  background-size: cover;
  padding: 50px;
  overflow: hidden;
`;

const TextBox = styled.div`
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  backdrop-filter: blur(0px);
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 15px;
`;

const SubTitle = styled.p`
  font-size: 18px;
  color: white;
  margin-bottom: 25px;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 10px;
`;

const Button = styled.a`
  display: inline-block;
  background-color: ${(props) => (props.outlined ? "transparent" : "#fff")};
  color: ${(props) => (props.outlined ? "#fff" : "#000")};
  padding: 12px 20px;
  border: ${(props) => (props.outlined ? "2px solid white" : "none")};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
  width: 180px;

  &:hover {
    background-color: ${(props) => (props.outlined ? "white" : "#ddd")};
    color: ${(props) => (props.outlined ? "#000" : "#333")};
  }
`;

const HeroSection = ({ children }) => {
  return (
    <HeroContainer>
      {children} {/* 📌 تصویر موبایل از `App.js` دریافت می‌شود */}
      <TextBox>
        <Title>تپسی</Title>
        <SubTitle>اپلیکیشن درخواست خودرو و پیک</SubTitle>
        <ButtonContainer>
          <Button href="/download-passenger">دانلود اپلیکیشن مسافران</Button>
          <Button href="/web-passenger">وب اپلیکیشن مسافران</Button>
          <Button href="/register-driver" outlined>
            ثبت نام رانندگان
          </Button>
          <Button href="/download-driver" outlined>
            دانلود اپلیکیشن رانندگان
          </Button>
        </ButtonContainer>
      </TextBox>
    </HeroContainer>
  );
};

export default HeroSection;
