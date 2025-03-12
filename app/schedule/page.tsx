"use client";
import React from 'react';
import Link from "next/link";
const schedule = [
    { time: "10:00 AM", event: "🚀 Hackathon Kickoff & Orientation" },
    { time: "11:00 AM", event: "🧠 Idea Submission Deadline" },
    { time: "12:00 PM", event: "👨‍🏫 Mentorship & Guidance Session" },
    { time: "03:00 PM", event: "⚙️ Prototype Building & Coding Begins" },
    { time: "06:00 PM", event: "🍕 Break & Networking" },
    { time: "09:00 AM (Next Day)", event: "📊 Final Submissions" },
    { time: "11:00 AM", event: "🎤 Pitching & Presentations" },
    { time: "01:00 PM", event: "🏆 Winner Announcement & Closing Ceremony" },
];

const Page = () => {
    return (
        <section className="py-16 px-6 relative">
            <div className="absolute top-20 right-0 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>

            <div className="text-center mb-12 relative z-10">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text inline-block">
                    Vyuhathon Schedule
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Your step-by-step guide to making the most out of Vyuhathon!
                </p>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
                    <div className="relative">
                        <div className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"></div>

                        <div className="space-y-8">
                            {schedule.map((item, index) => (
                                <div key={index} className="relative pl-8">
                                    {/* Timeline dot */}
                                    <div className="absolute left-[-8px] w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md shadow-blue-300/50"></div>

                                    <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg border border-blue-100 hover:border-blue-300 transition-all hover:shadow-lg hover:shadow-blue-100">
                                        <p className="text-blue-700 font-bold text-xl mb-2">{item.time}</p>
                                        <p className="text-lg text-gray-700">{item.event}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <Link href="/register" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-300/30">
                        Register Now
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Page;