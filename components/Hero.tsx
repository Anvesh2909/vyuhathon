"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import HeroAnimation from "@/public/lotties/Animation-hero.json"
import Link from 'next/link'
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

const Hero = () => {
    return (
        <section className="min-h-[calc(100vh-120px)] flex items-center relative overflow-hidden pt-0 sm:pt-10 ">
            <div className="container mx-auto flex flex-col md:flex-row gap-10 items-center relative z-5 px-4">
                <div className="text-center md:text-left md:pr-6 md:flex-1 mt-0">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="text-blue-600">Innovate</span> & <span className="text-gray-800">Transform</span> at Vyuhathon
                    </h1>

                    <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed">
                        Join a community of visionaries and creators building the next generation of technological solutions. Turn your boldest ideas into reality!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-4 mb-8">
                        <Link href="/schedule" className="px-8 py-3.5 bg-white border border-blue-200 rounded-lg text-blue-600 font-semibold shadow-sm hover:shadow-md transition">
                            View Schedule
                        </Link>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                        <div className="flex items-center space-x-3 bg-white px-5 py-2.5 rounded-full shadow-sm">
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                            <p className="text-sm font-medium text-gray-700">Registration Open Until March 16, 8:00 AM</p>
                        </div>
                    </div>
                </div>

                <div className="md:flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
                    <div className="bg-white bg-opacity-70 rounded-full p-4 sm:p-6 w-full max-w-xs sm:max-w-sm md:max-w-lg aspect-square flex items-center justify-center shadow-lg">
                        <Lottie
                            animationData={HeroAnimation}
                            className="w-full h-full"
                            loop={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;