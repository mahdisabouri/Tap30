// src/components/ContactUs.js
import React, { useState } from "react";
import styled from "styled-components";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"; // استفاده از آیکون‌ها
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// استایل برای کامپوننت
const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  background-color: #f9f9f9;
`;

const FormSection = styled.div`
  width: 50%;
  padding-right: 50px;
`;

const InfoSection = styled.div`
  width: 40%;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubTitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SendButton = styled.button`
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

const InfoItem = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const SocialIcons = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  font-size: 24px;
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // فرم ارسال می‌شود (می‌توانید اینجا به سرور ارسال کنید)
    alert("پیام شما ارسال شد!");
  };

  return (
    <ContactContainer>
      {/* بخش فرم تماس */}
      <FormSection>
        <Title>ارتباط با ما</Title>
        <SubTitle>
          شما می‌توانید نظرات و انتقادات خود را برای ما بفرستید.
        </SubTitle>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="نام شما"
            value={formData.name}
            onChange={handleInputChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="ایمیل شما"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextArea
            name="message"
            placeholder="پیام شما"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
          />
          <SendButton type="submit">ارسال</SendButton>
        </form>
      </FormSection>

      {/* بخش اطلاعات تماس */}
      <InfoSection>
        <Title>اطلاعات تماس</Title>
        <InfoItem>ایران - کردستان - سنندج</InfoItem>
        <InfoItem>خیابان 21 - کوچه 101</InfoItem>
        <InfoItem>تلفن: +989182451234</InfoItem>
        <InfoItem>ایمیل: info@fronthooks.ir</InfoItem>

        {/* نقشه */}
        <MapContainer
          center={[37.7749, -122.4194]}
          zoom={13}
          style={{ height: "200px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>

        {/* آیکون‌های اجتماعی */}
        <SocialIcons>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </SocialIcons>
      </InfoSection>
    </ContactContainer>
  );
};

export default ContactUs;
