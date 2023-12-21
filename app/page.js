"use client"
import React from 'react';
import JourneyProvider from '../src/context/JourneyProvider';
import Homepage from '@/src/pages/Homepage';

function Home() {
  
  return (
    <JourneyProvider>
      <Homepage />
    </JourneyProvider>
  );
}

export default Home;