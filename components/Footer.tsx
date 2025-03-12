"use client";
import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-br from-gray-900 to-black pt-16 pb-10 px-6 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-600 rounded-full filter blur-[100px] opacity-10"></div>

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    {/* Brand column */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-4">Vyuhathon</h3>
                        <p className="text-gray-400 mb-4">Empowering innovation through collaborative challenges and creative problem-solving.</p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="group">
                                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                                    <svg className="w-5 h-5 text-blue-400 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                                    </svg>
                                </div>
                            </a>
                            <a href="#" className="group">
                                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                                    <svg className="w-5 h-5 text-blue-400 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                                    </svg>
                                </div>
                            </a>
                            <a href="#" className="group">
                                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                                    <svg className="w-5 h-5 text-blue-400 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                                    </svg>
                                </div>
                            </a>
                            <a href="#" className="group">
                                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                                    <svg className="w-5 h-5 text-blue-400 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/about" className="text-blue-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="/about" className="text-blue-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="/about" className="text-blue-400 hover:text-white transition-colors">Hackathon Details</a></li>
                            <li><a href="/about" className="text-blue-400 hover:text-white transition-colors">Past Events</a></li>
                            <li><a href="/about" className="text-blue-400 hover:text-white transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-center md:justify-start">
                                <EnvelopeIcon className="w-5 h-5 text-blue-400 mr-2" />
                                <a href="mailto:info@vyhack.tech" className="text-blue-400 hover:text-white transition-colors">info@vyhack.tech</a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start">
                                <svg className="w-5 h-5 text-blue-400 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="text-gray-300">Vijayawada, India</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <a href="#" className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-md">
                                Register Now
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pt-8 mt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm">© 2025 Vyuhathon. All rights reserved.     Designed by Vyuha-Developer Community</p>
                        <div className="mt-4 md:mt-0">
                            <ul className="flex space-x-6 text-sm text-gray-500">
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;