"use client"
import React from 'react';
import Hero from '../pages/hero';
import Sidenav from '../pages/Sidenav';
import Header from '../pages/Header';
import JourneyProvider from '../context/JourneyProvider';

function Home() {
  
  return (
    <JourneyProvider>
      <Header />
      <Sidenav />
      <Hero />
    </JourneyProvider>
  );
}

export default Home;