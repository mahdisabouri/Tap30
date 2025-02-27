// // src/App.js
// import React from "react";
// import Main from "./components/Main";
// import "./App.css";

// const App = () => {
//   return (
//     <div className="App">
//       <Main />
//     </div>
//   );
// };

// export default App;


// src/App.js
// src/App.js
// import React from "react";
// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import Services from "./components/Services";
// import BusinessServices from "./components/BusinessServices";
// import ReservationPanel from "./components/ReservationPanel";
// import ContactUs from "./components/ContactUs";
// import SpecialOffers from "./components/SpecialOffers";

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <HeroSection />
//       <Services />
//       <BusinessServices />
//       <ReservationPanel />
//       <ContactUs />
//       <SpecialOffers />
//     </div>
//   );
// };

// export default App;


// // src/App.js
// import React from "react";
// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import Services from "./components/Services";
// import BusinessServices from "./components/BusinessServices";
// import ReservationPanel from "./components/ReservationPanel";
// import ContactUs from "./components/ContactUs";
// import SpecialOffers from "./components/SpecialOffers";
// import MobileImageComponent from "./components/MobileImageComponent"; // 📌 اضافه شد

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <HeroSection />
//       <MobileImageComponent />
//       <Services />
//       <BusinessServices />
//       <ReservationPanel />
//       <ContactUs />
//       <SpecialOffers />
//     </div>
//   );
// };

// export default App;


import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MobileImageComponent from "./components/MobileImageComponent"; // 📌 ایمپورت کامپوننت موبایل
import Services from "./components/Services";
import BusinessServices from "./components/BusinessServices";
import ReservationPanel from "./components/ReservationPanel";
import ContactUs from "./components/ContactUs";
import SpecialOffers from "./components/SpecialOffers";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <MobileImageComponent /> {/* 📌 اضافه کردن تصویر موبایل */}
      <Services />
      <BusinessServices />
      <ReservationPanel />
      <ContactUs />
      <SpecialOffers />
    </div>
  );
};

export default App;
