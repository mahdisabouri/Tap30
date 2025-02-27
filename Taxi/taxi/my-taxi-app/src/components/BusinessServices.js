import React from "react";
import styled from "styled-components";

// استایل برای کامپوننت
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  background-color: #f9f9f9;
`;

const LeftSection = styled.div`
  width: 50%;
  padding-right: 50px;
`;

const RightSection = styled.div`
  width: 50%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: #f27c3f;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e0601f;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  margin-bottom: 30px;
`;

const BusinessServices = () => {
  return (
    <div>
      {/* بخش خدمات کسب و کارها */}

      <Container>
        <RightSection>
          {/* تصویر اول */}
          <Image
            src={require("../assets/9057533171688623bf4927f136ef2053.png")}
            alt="خرید کد اعتبار"
          />
        </RightSection>
        <LeftSection>
          <Title>تپسی پلاس </Title>
          <Description>
            در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر،
            به دنبال شما خواهد آمد. همچنین، رانندگان این سرویس بالاترین امتیاز
            را از مسافران دریافت کرده‌اند. در این سرویس امکان تعیین چند مقصد یا
            توقف در حین سفر، وجود دارد.
          </Description>
        </LeftSection>
      </Container>

      <Container>
        <LeftSection>
          <Title>خدمات تپسی برای کسب و کارها</Title>
          <Description>
            پنل سازمانی تپسی، یک سامانه تحت وب است که به سازمان‌ها این امکان را
            می‌دهد که درخواست‌های خودرو و پیک را برای کسب و کارهای مختلف فراهم
            کنند.
          </Description>
          <Button>ورود و ثبت نام پنل سازمانی</Button>
        </LeftSection>
        <RightSection>
          {/* تصویر دوم */}
          <Image src={require("../assets/i-mac.webp")} alt="خدمات تپسی" />
        </RightSection>
      </Container>

      {/* بخش خرید کد اعتبار */}

      <Container>
        <RightSection>
          {/* تصویر سوم */}
          <Image src={require("../assets/macbook.png")} alt="خرید کد اعتبار" />
        </RightSection>
        <LeftSection>
          <Title>خرید کد اعتبار تپسی</Title>
          <Description>
            کاربران، کسب‌وکارها و سازمان‌ها می‌توانند به راحتی کد اعتبار تهیه
            کنند و از تخفیف‌های ویژه تپسی بهره‌مند شوند.
          </Description>
          <Button>خرید کد اعتبار و تخفیف</Button>
        </LeftSection>
      </Container>
    </div>
  );
};

export default BusinessServices;
