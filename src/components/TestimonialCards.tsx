'use client';

import React from 'react';
import Image from 'next/image';
import { World } from './ui/globe'; // Assuming World component is in your UI folder

// Globe configuration
const globeConfig = {
  globeColor: '#1d072e',
  atmosphereColor: '#ffffff',
  showAtmosphere: true,
  atmosphereAltitude: 0.1,
  polygonColor: 'rgba(255, 255, 255, 0.7)',
  emissive: '#000000',
  emissiveIntensity: 0.1,
  shininess: 0.9,
  pointSize: 1.5,
  ambientLight: '#ffffff',
  directionalLeftLight: '#ffffff',
  directionalTopLight: '#ffffff',
  pointLight: '#ffffff',
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

// Example data for arcs (replace with your real data)
const globeData = [
  {
    order: 1,
    startLat: 37.7749,
    startLng: -122.4194,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: '#ff5722',
  },
  {
    order: 2,
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.3,
    color: '#ff5722',
  },
];

function HostingAndDashboard() {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 md:px-20">
      {/* Section Header */}
      <div className="text-left mb-12">
        <h1 className="text-2xl font-semibold mb-4">
          Hosting over the edge
        </h1>
        <p className="text-lg md:text-xl text-neutral-400">
          With our edge network, we host your website by going into each city by ourselves.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section: Rotating Globe */}
        <div className="flex justify-center items-center">
          <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
            <World globeConfig={globeConfig} data={globeData} />
          </div>
        </div>

        {/* Right Section: Dashboard */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Running out of copy
          </h2>
          <p className="text-neutral-400 mb-8">
            You are running out of copy for your website, we can generate copy for you.
          </p>
          <div className="w-full h-auto flex justify-center">
            <Image
              src="/courses/whiteimg.webp" // Replace with the path to the Dashboard image
              alt="Dashboard Preview"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostingAndDashboard;
