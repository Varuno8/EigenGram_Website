"use client";
import React from "react";
import Image from "next/image";
import { DirectionAwareHover } from "./ui/direction-aware-hover"; // Adjust the path as needed

function WhyChooseUs() {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 md:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Deployments made easy
        </h1>
        <p className="text-lg md:text-xl text-neutral-400">
          Deploy with ease, leave complexities to us.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          {/* Git Commands */}
          <DirectionAwareHover
            imageUrl="" // Replace with your Git commands image path
            className="w-32 h-32 md:w-40 md:h-40"
            imageClassName="object-contain"
          >
            <p className="text-white font-mono text-sm">
              git add . <br />
              git commit -m "update" <br />
              git push
            </p>
          </DirectionAwareHover>

          {/* GitHub Logo */}
          <div className="w-32 h-32 md:w-40 md:h-40 bg-black rounded-lg flex items-center justify-center shadow-md">
            <Image
              src="/courses/Github-logo.png" // Replace with your GitHub logo path
              alt="GitHub Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          {/* AWS Deployment */}
          <div className="w-32 h-32 md:w-40 md:h-40 bg-black rounded-lg flex flex-col items-center justify-center text-center shadow-md">
            <Image
              src="/courses/aws-logo.png" // Replace with your AWS logo path
              alt="AWS Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <p className="text-neutral-300 mt-2 text-sm">
              <span className="text-yellow-500">Your site is live ✨</span>
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Intuitive workflow</h2>
          <p className="text-neutral-400 mb-8">
            With our intuitive workflow, you can easily manage your app without
            complex steps.
          </p>
          <Image
            src="/courses/intuitive.webp" // Replace with your white dashboard image path
            alt="Dashboard Preview"
            width={800}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">One click deploy</h3>
          <p className="text-neutral-400">
            Deploy your app in seconds, with our one-click deploy feature.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Hosting over the edge</h3>
          <p className="text-neutral-400">
            Experience blazing fast hosting with edge technology, designed for
            global audiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
