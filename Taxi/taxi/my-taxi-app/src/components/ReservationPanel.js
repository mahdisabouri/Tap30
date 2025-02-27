import React from "react";
import styled from "styled-components";
import "./Styles/ReservationPanel.css";

// استایل برای کامپوننت
const PanelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 50px;
  flex-wrap: wrap; /* برای ریسپانسیو شدن */
`;

const Panel = styled.div`
  width: 30%;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px); /* حرکت کمی به بالا */
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15); /* سایه بیشتر هنگام هاور */
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const DiscountTag = styled.div`
  background-color: #f27c3f;
  color: white;
  padding: 8px 20px;
  font-size: 18px;
  border-radius: 8px;
  margin-bottom: 15px;
  font-weight: bold;
`;

const Title = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* بزرگ شدن هنگام هاور */
  }
`;

const Price = styled.p`
  font-size: 22px;
  color: #f27c3f;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Feature = styled.p`
  font-size: 14px;
  color: #555;
  margin: 5px 0;
`;

const Button = styled.button`
  background-color: #f27c3f;
  color: white;
  padding: 14px 28px;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e0601f;
    transform: scale(1.05); /* بزرگ شدن دکمه هنگام هاور */
  }
`;

const ReservationPanel = () => {
  return (
    <PanelContainer>
      <Panel>
        <DiscountTag>20% OFF</DiscountTag>
        <Title>ویژه</Title>
        <Price>490,000 تومان</Price>
        <Feature>کیفیت خیلی خوب</Feature>
        <Feature>بی سروصدا</Feature>
        <Feature>زمان تا محدود</Feature>
        <Feature>سرویس نامحدود</Feature>
        <Button>ثبت سفارش</Button>
      </Panel>

      <Panel>
        <DiscountTag>15% OFF</DiscountTag>
        <Title>اقتصادی</Title>
        <Price>390,000 تومان</Price>
        <Feature>کیفیت عالی</Feature>
        <Feature>کم سروصدا</Feature>
        <Feature>زمان محدود</Feature>
        <Feature>سرویس روزانه</Feature>
        <Button>ثبت سفارش</Button>
      </Panel>

      <Panel>
        <DiscountTag>10% OFF</DiscountTag>
        <Title>عادی</Title>
        <Price>290,000 تومان</Price>
        <Feature>کیفیت معمولی</Feature>
        <Feature>کیفیت معمولی</Feature>
        <Feature>کیفیت معمولی</Feature>
        <Feature>کیفیت معمولی</Feature>
        <Button>ثبت سفارش</Button>
      </Panel>
    </PanelContainer>
  );
};

export default ReservationPanel;
