import React from 'react';
import './Home.scss';
import { Hero } from '../../components/HomeSections/Hero/Hero';
import { Feature } from '../FeaturePage/Feature';
import { Signup } from '../EmailPage/Signup';
import { CommunityPage } from '../CommunityPage/CommunityPage';
import { PhoneSection } from '../PhoneSection/phoneSection';
import { NetworkSection } from '../NetworkSection/NetworkSection';
import { TrustedSection } from '../TrustedSection/TrustedSection';

import { Footer } from '../../components/Footer/Footer';


import { MainLayout } from "../../components/Layouts/MainLayout/MainLayout"
import { Featue } from '../../components/HomeSections/Feature/Featue';
import { SignUp } from '../../components/HomeSections/SignUp/SignUp';
import { Community } from '../../components/HomeSections/Community/Community';
import { Phone } from '../../components/HomeSections/Phone/Phone';
import { Network } from '../../components/HomeSections/Network/Network';
import { Trusted } from '../../components/HomeSections/Trusted/Trusted';
import { Faq } from '../../components/HomeSections/Faq/Faq';
import { Gem } from '../../components/HomeSections/Gem/Gem';


export const Home = () => {
  return (
    // <>
    //   {/* <Navbar />
    //   <Hero />
    /* <Hero />
      <Feature />
      <Signup />
      <CommunityPage />
      <PhoneSection />
      <NetworkSection />
      <TrustedSection />
      <Faq />
      <Gem /> */
    //   <Footer /> */}

    // </>
    < MainLayout >
      {/* <Hero />
      
      <Feature />
      <Signup />
      <CommunityPage />
      <PhoneSection />
      <NetworkSection />
      <TrustedSection />
      <Faq />
      <Gem /> */}
      <main className='home'>
        <Hero />
        <Featue />
        <SignUp />
        <Community />
        <Phone/>
        <Network/>
        <Trusted/>
        <Faq/>
        <Gem/>
      </main>
    </MainLayout >
  );
};
