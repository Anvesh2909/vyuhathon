"use client"
import React from 'react'
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })
import StoryAnimation from "@/public/lotties/Animation-story.json"

const Story = () => {
    return (
        <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-xl p-8 md:p-12 relative">
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0,0 L100,0 L100,100 Z" fill="white" />
                        </svg>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="order-2 md:order-1 md:w-1/2 flex justify-center md:justify-start">
                                <div className="bg-white bg-opacity-10 rounded-2xl p-4 backdrop-blur-sm">
                                    <Lottie animationData={StoryAnimation} className="w-72 md:w-80 lg:w-96" />
                                </div>
                            </div>
                            <div className="order-1 md:order-2 text-center md:text-left md:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                    💡 Your Journey: From Idea to Reality
                                </h2>
                                <p className="text-blue-50 text-lg leading-relaxed mb-8">
                                    Vyuhathon is where groundbreaking ideas come to life. Whether you're a beginner or an expert,
                                    bring your vision, collaborate with the best minds, and build something that could change the world.
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                    <a href="#themes" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all">
                                        Explore Ideas
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Story