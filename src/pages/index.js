"use client"
import React from 'react';
import JourneyProvider from '../context/JourneyProvider';
import Homepage from './Homepage';

function Home() {
  
  return (
    <JourneyProvider>
      <Homepage />
    </JourneyProvider>
  );
}

export default Home;