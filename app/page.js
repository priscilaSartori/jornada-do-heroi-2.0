"use client"
import React from 'react';
import JourneyProvider from '../src/context/JourneyProvider';
import Homepage from '../src/components/organisms/Homepage';

function Home() {
  
  return (
    <JourneyProvider>
      <Homepage />
    </JourneyProvider>
  );
}

export default Home;