import React from 'react';
import './Home.scss';
import { Hero } from '../../components/HomeSections/Hero/Hero';
import { Feature } from '../FeaturePage/Feature';
import { Signup } from '../EmailPage/Signup';
import { CommunityPage } from '../CommunityPage/CommunityPage';
import { PhoneSection } from '../PhoneSection/phoneSection';
import { NetworkSection } from '../NetworkSection/NetworkSection';
import { TrustedSection } from '../TrustedSection/TrustedSection';
import { Faq } from '../Faq/Faq';
import { Footer } from '../../components/Footer/Footer';
import { Gem } from '../GemSection/Gem';

import { MainLayout } from "../../components/Layouts/MainLayout/MainLayout"


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
      </main>
    </MainLayout >
  );
};
