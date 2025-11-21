import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import LandingPage from "./Components/Pages/LandingPage/LandingPage.jsx";  // Home page
import AboutUs from "./Components/Pages/AboutUs/Aboutus.jsx"; // Services Page
import Service from "./Components/Pages/ServicePage/Service.jsx";
import ContactUs from "./Components/Pages/ContactUs/ContactUs.jsx"
import RegistrationForms from "./Components/Pages/ServicePage/Registration.jsx";
import { BsRegex } from "react-icons/bs";
import RegistrationInfo from "./Components/Pages/Registration/Registration.jsx";
import RegisteredProvidersPage from "./Components/Pages/Registration/Provider/RegistrationProvider.jsx";
import AccreditationPage from "./Components/Pages/Accredition/Accredition.jsx";
import AccreditedProvidersPage from "./Components/Pages/Accredition/AcreditedProvider.jsx";
import CandidatesForAccreditationPage from "./Components/Pages/Accredition/Candidates.jsx";
import CariomAccredition from "./Components/Pages/CARIOM/cariom.jsx";
import HowtoAPPly from "./Components/Pages/CARIOM/Howtoapply.jsx";
import VerificationPage from "./Components/Pages/CARIOM/verification.jsx";
import ProgramApproval from "./Components/Pages/Programapproval/programapproval.jsx";
import DownloadsAndForms from "./Components/Pages/Download/DownloadFile.jsx";
import MACFaqs from "./Components/faqs/cariom.jsx";
import MACGoals from "./Components/Goals/cariom.jsx";
import MACPressReleases from "./Components/pressreleases/cariom.jsx";
import MACMedia from "./Components/media/cariom.jsx";
import CoreValues from "./Components/corevalues/cariom.jsx";
import FunctionsAndPowers from "./Components/function$powers/cariom.jsx";
import QualityStatements from "./Components/Goals copy 4/cariom.jsx";
import CapacityBuilding from "./Components/Pages/PublicPages/CapacityBuilding.jsx";
import Recognitionofawardies from "./Components/Pages/PublicPages/recognisation.jsx";
import FeesandServices from "./Components/Pages/FeesServices/fees&services.jsx";
import Recognitiono from "./Components/Pages/PublicPages/recognisation.jsx";
import DecisionAppeal from "./Components/Pages/PublicPages/DesicionAppeal.jsx";






function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/service" element={<Service/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/registrationform" element={<RegistrationForms/>}/>
        <Route path="/registration" element={<RegistrationInfo/>}/>
        <Route path="/registrationproviders" element={<RegisteredProvidersPage/>}/>
        <Route path="/accredition" element={<AccreditationPage/>}/>
        <Route path="/accreditionprovider" element={<AccreditedProvidersPage/>}/>
        <Route path="/accreditedcandidates" element={<CandidatesForAccreditationPage/>}/>
        <Route path="/cariom" element={<CariomAccredition/>}/>
        <Route path="/howtoapply" element={<HowtoAPPly/>}/>
        <Route path="/verification" element={<VerificationPage/>}/>

        <Route path="/programmeapproval" element={<ProgramApproval/>}/>
        <Route path="/downloadform" element={<DownloadsAndForms/>}/>
        <Route path="/faqs" element={<MACFaqs/>}/>
        <Route path="/fees" element={<FeesandServices/>}/>
        <Route path="/recognisation" element={<Recognitiono/>}/>

        <Route path="/goals" element={<MACGoals/>}/>
        <Route path="/decisionappeal" element={<DecisionAppeal/>}/>

        <Route path="/recognisationofbudies" element={<Recognitionofawardies/>}/>
        <Route path="/capacitybuilding" element={<CapacityBuilding/>}/>
        <Route path="/quality-statements" element={<QualityStatements/>}/>
        <Route path="/functions-powers" element={<FunctionsAndPowers/>}/>
        <Route path="/core-values" element={<CoreValues/>}/>
        <Route path="/pressrelease" element={<MACPressReleases/>}/>
        <Route path="/media" element={<MACMedia/>}/>
        
    
      </Routes>

      <Footer />
    </>
  );
}

export default App;
