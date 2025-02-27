import React from "react";
import styled from "styled-components";
import MobileImage from "../assets/background2.png"; // تصویر موبایل

const MobileContainer = styled.div`
  position: absolute;
  left: 50px; /* موبایل در سمت چپ قرار بگیرد */
  bottom: -40px; /* کمی پایین‌تر قرار بگیرد تا از تصویر بیرون بزند */
  width: 480px; /* بزرگ‌تر کردن گوشی */
  height: auto;
  z-index: 2; /* بالاتر از پس‌زمینه نمایش داده شود */

  img {
    width: 100%;
    height: auto;
    filter: drop-shadow(
      0px 20px 40px rgba(0, 0, 0, 0.3)
    ); /* سایه برای جذابیت */
    margin-bottom: 100px; /* فاصله‌ی بیشتر از بخش بعدی */
  }
`;

const MobileImageComponent = () => {
  return (
    <MobileContainer>
      <img src={MobileImage} alt="اپلیکیشن تپسی" />
    </MobileContainer>
  );
};

export default MobileImageComponent;
