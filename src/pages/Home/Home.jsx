import React from 'react';
import './Home.scss';
import { Hero } from '../../components/HomeSections/Hero/Hero';
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
    < MainLayout >
      <main className='home'>
        <Hero />
        <Featue />
        <SignUp />
        <Community />
        <Phone/>
        <Network/>
        {/* <Trusted/> */}
        {/* <Faq/> */}
        {/* <Gem/> */}
      </main>
    </MainLayout >
  );
};
