"use client"
import React from 'react'
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })
import AboutAnimation from "@/public/lotties/Animation-about.json"
import Link from "next/link";

const About = () => {
    return (
        <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden ">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="container mx-auto">
                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 relative border border-blue-100">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-40"></div>

                    <div className="max-w-5xl mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-700 text-center">
                            🚀 About Vyuha
                        </h2>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="order-2 md:order-2 md:w-1/2 flex justify-center md:justify-end">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-5 shadow-lg transform rotate-1">
                                    <Lottie animationData={AboutAnimation} className="w-72 md:w-80 lg:w-96" />
                                </div>
                            </div>

                            <div className="order-1 md:order-1 text-center md:text-left md:w-1/2">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="inline-block text-2xl md:text-3xl font-bold mb-2 text-blue-700 border-b-2 border-blue-400 pb-1">
                                            Our Mission
                                        </h3>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Vyuha, the innovation club, is committed to fostering creativity and technological advancements.
                                            We aim to empower students by providing opportunities to showcase their skills in real-world scenarios.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="inline-block text-2xl md:text-3xl font-bold mb-2 text-blue-700 border-b-2 border-blue-400 pb-1">
                                            Vyuhathon
                                        </h3>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Vyuhathon is an <span className="font-bold text-blue-600">innovation-driven hackathon</span> where participants brainstorm,
                                            build, and present groundbreaking solutions to real-world challenges.
                                            Whether you're an aspiring entrepreneur, a coder, or a designer, this is your chance to shine!
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                                        <Link href="https://t.me/vyuha_club" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-md">
                                            Join Our Community
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .bg-grid-pattern {
                    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                }
            `}</style>
        </section>
    )
}
export default About