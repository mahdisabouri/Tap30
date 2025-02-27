import React from "react";
import styled from "styled-components";

// استایل برای بخش سرویس‌ها
const ServicesContainer = styled.div`
  padding: 50px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

const ServicesRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ServiceBox = styled.div`
  text-align: center;
  max-width: 120px;
  transition: transform 0.3s ease; /* انیمیشن برای بزرگ شدن */

  &:hover {
    transform: scale(1.1); /* بزرگ شدن سرویس با موس */
  }
`;

const ServiceIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  opacity: 0.7; /* تصویر به طور پیش‌فرض کمی تار است */
  transition: opacity 0.3s ease, transform 0.3s ease; /* انیمیشن برای تغییرات */

  &:hover {
    opacity: 1; /* زمانی که موس روی تصویر است، روشن می‌شود */
    transform: scale(1.2); /* بزرگ شدن تصویر هنگام هاور */
  }
`;

const ServiceTitle = styled.h4`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  transition: transform 0.3s ease; /* انیمیشن برای بزرگ شدن متن */

  &:hover {
    transform: scale(1.1); /* بزرگ شدن متن هنگام هاور */
  }
`;

const ServiceDescription = styled.p`
  font-size: 14px;
  color: #777;
`;

const Services = () => {
  return (
    <ServicesContainer>
      <Title>سرویس های تپسی</Title>
      <ServicesRow>
        <ServiceBox>
          <ServiceIcon src={require("../assets/cc-line.png")} alt="تپسی لاین" />
          <ServiceTitle>تپسی لاین</ServiceTitle>
          <ServiceDescription>
            سرویس با مدل بالاتر و عمر کمتر.
          </ServiceDescription>
        </ServiceBox>

        <ServiceBox>
          <ServiceIcon
            src={require("../assets/cc-autopeyk.png")}
            alt="اتوپیک"
          />
          <ServiceTitle>اتوپیک</ServiceTitle>
          <ServiceDescription>
            سرویس استاندارد با خودروهای مختلف.
          </ServiceDescription>
        </ServiceBox>

        <ServiceBox>
          <ServiceIcon
            src={require("../assets/cc-motopeyk.png")}
            alt="موتوپیک"
          />
          <ServiceTitle>موتوپیک</ServiceTitle>
          <ServiceDescription>
            سرویس استاندارد با خودروهای مختلف.
          </ServiceDescription>
        </ServiceBox>

        <ServiceBox>
          <ServiceIcon
            src={require("../assets/cc-classic.png")}
            alt="تپسی کلاسیک"
          />
          <ServiceTitle>تپسی کلاسیک</ServiceTitle>
          <ServiceDescription>سرویس مخصوص مسیرهای مشخص.</ServiceDescription>
        </ServiceBox>

        <ServiceBox>
          <ServiceIcon src={require("../assets/cc-tel.png")} alt="تپسی تلفنی" />
          <ServiceTitle>تپسی تلفنی</ServiceTitle>
          <ServiceDescription>
            درخواست سرویس از طریق تماس تلفنی.
          </ServiceDescription>
        </ServiceBox>
      </ServicesRow>
    </ServicesContainer>
  );
};

export default Services;
