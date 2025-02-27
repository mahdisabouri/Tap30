import React from "react";
import styled from "styled-components";
import { FaTrash, FaHeart, FaShareAlt } from "react-icons/fa"; // آیکون‌های حذف، لایک و اشتراک‌گذاری

// استایل برای کامپوننت
const Container = styled.div`
  padding: 50px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
`;

const OfferContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OfferCard = styled.div`
  width: 30%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

const DiscountTag = styled.div`
  background-color: #f27c3f;
  color: white;
  padding: 5px 15px;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const OfferImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 8px;
`;

const OfferTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const OfferDescription = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  font-size: 20px;
  color: #f27c3f;
`;

const SpecialOffers = () => {
  return (
    <Container>
      <Title>جوایز ویژه</Title>
      <OfferContainer>
        {/* کارت اول */}
        <OfferCard>
          <DiscountTag>ویژه</DiscountTag>
          <OfferImage
            src={require("../assets/5ea86fd9671ef27c6003e37042ff71fd.jpeg")}
            alt="Offer 1"
          />
          <OfferTitle>سفر به قالب کویر لوت</OfferTitle>
          <OfferDescription>اقامت رایگان + سفر 3 روزه</OfferDescription>
          <IconContainer>
            <FaTrash />
            <FaHeart />
            <FaShareAlt />
          </IconContainer>
        </OfferCard>

        {/* کارت دوم */}
        <OfferCard>
          <DiscountTag>ویژه</DiscountTag>
          <OfferImage
            src={require("../assets/5ea86fd9671ef27c6003e37042ff71fd.jpeg")}
            alt="Offer 2"
          />
          <OfferTitle>سفر به قالب کویر لوت</OfferTitle>
          <OfferDescription>اقامت رایگان + سفر 3 روزه</OfferDescription>
          <IconContainer>
            <FaTrash />
            <FaHeart />
            <FaShareAlt />
          </IconContainer>
        </OfferCard>

        {/* کارت سوم */}
        <OfferCard>
          <DiscountTag>ویژه</DiscountTag>
          <OfferImage
            src={require("../assets/5ea86fd9671ef27c6003e37042ff71fd.jpeg")}
            alt="Offer 3"
          />
          <OfferTitle>سفر به قالب کویر لوت</OfferTitle>
          <OfferDescription>اقامت رایگان + سفر 3 روزه</OfferDescription>
          <IconContainer>
            <FaTrash />
            <FaHeart />
            <FaShareAlt />
          </IconContainer>
        </OfferCard>
      </OfferContainer>
    </Container>
  );
};

export default SpecialOffers;
