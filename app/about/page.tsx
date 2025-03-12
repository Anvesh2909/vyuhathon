"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animatedData from "@/public/lotties/Animation-aboutinnovation.json";

const Page = () => {
    return (
        <section className="py-16 px-6 relative">
            <div className="absolute top-20 right-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/3 rounded-full filter blur-3xl"></div>

            <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
                    <div className="text-left relative z-10">
                        <div className="inline-block p-2 px-4 bg-blue-100/50 rounded-full mb-4">
                            <span className="text-blue-800 font-medium">Innovation & Technology</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-transparent bg-clip-text inline-block mb-4">
                            About Vyuhathon
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 font-light">
                            Where groundbreaking ideas meet innovation. Vyuhathon is more than just a hackathon—it's a movement
                            to transform creative ideas into impactful solutions.
                        </p>
                        <div className="mt-8 inline-block p-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl">
                            <div className="bg-white px-6 py-4 rounded-lg">
                                <p className="text-blue-700 font-bold italic">
                                    "Innovation distinguishes between a leader and a follower"
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="w-full max-w-md">
                            <Lottie animationData={animatedData} loop={true} />
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all group">
                        <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-all">
                            <span className="text-2xl">🚀</span>
                        </div>
                        <h2 className="text-2xl font-bold text-blue-800 mb-4">What is Vyuhathon?</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Vyuhathon is a innovation-driven hackathon where developers, designers, and creative thinkers come together to build solutions for the future.
                            Tackle real-world challenges and transform your ideas into impactful projects.
                        </p>
                        <div className="mt-6 w-12 h-1 bg-blue-500 rounded-full"></div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all group">
                        <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-all">
                            <span className="text-2xl">🌟</span>
                        </div>
                        <h2 className="text-2xl font-bold text-blue-800 mb-4">Why It Matters</h2>
                        <p className="text-gray-700 leading-relaxed">
                            This hackathon is designed to foster innovation, creativity, and collaboration among passionate minds.
                            It provides a platform to showcase talent, build portfolio-worthy projects, and connect with industry leaders.
                        </p>
                        <div className="mt-6 w-12 h-1 bg-blue-500 rounded-full"></div>
                    </div>
                </div>

                {/* Enhanced participant section with hexagonal design */}
                <div className="mb-20">
                    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-10 rounded-3xl shadow-xl border border-blue-100">
                        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Who Can Participate?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center relative overflow-hidden group hover:shadow-xl transition-all">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-8 -mt-8 z-0 group-hover:bg-blue-100 transition-all"></div>
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 z-10 transform group-hover:scale-110 transition-all">
                                    <span className="text-blue-700 text-2xl">👨‍💻</span>
                                </div>
                                <h3 className="font-bold text-gray-800 mb-3 text-lg z-10">Students</h3>
                                <p className="text-gray-600 text-center z-10">From any academic background with a passion for innovation</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center relative overflow-hidden group hover:shadow-xl transition-all">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-8 -mt-8 z-0 group-hover:bg-blue-100 transition-all"></div>
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 z-10 transform group-hover:scale-110 transition-all">
                                    <span className="text-blue-700 text-2xl">👩‍🎨</span>
                                </div>
                                <h3 className="font-bold text-gray-800 mb-3 text-lg z-10">Designers</h3>
                                <p className="text-gray-600 text-center z-10">UI/UX designers and creative thinkers who can visualize solutions</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center relative overflow-hidden group hover:shadow-xl transition-all">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-8 -mt-8 z-0 group-hover:bg-blue-100 transition-all"></div>
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 z-10 transform group-hover:scale-110 transition-all">
                                    <span className="text-blue-700 text-2xl">👥</span>
                                </div>
                                <h3 className="font-bold text-gray-800 mb-3 text-lg z-10">Teams</h3>
                                <p className="text-gray-600 text-center z-10">Join as teams of 2-4 members with complementary skills</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced expectation section with abstract design */}
                <div className="mb-20">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold text-blue-800 inline-block border-b-4 border-blue-400 pb-2">What to Expect</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-xl mr-4">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-blue-800 mb-2 text-xl">Multiple Tracks</h3>
                                    <p className="text-gray-600">AI/ML, Web3, IoT, EdTech, and FinTech challenges to choose from based on your interests</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-xl mr-4">
                                    <span className="text-2xl">🏆</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-blue-800 mb-2 text-xl">Unlock Exclusive Rewards!</h3>
                                    <p className="text-gray-600">
                                        Earn prestigious professional certificates, gain hands-on experience by working with Nexera,
                                        and seize exciting internship opportunities to accelerate your career.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-xl mr-4">
                                    <span className="text-2xl">🤝</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-blue-800 mb-2 text-xl">Networking</h3>
                                    <p className="text-gray-600">Connect with industry experts, mentors and fellow innovators for future collaborations</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-xl mr-4">
                                    <span className="text-2xl">💼</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-blue-800 mb-2 text-xl">Showcase</h3>
                                    <p className="text-gray-600">Present your innovative solutions to tech leaders and potential investors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced organization section */}
                <div className="mb-20">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-1 rounded-3xl shadow-xl">
                        <div className="bg-white p-8 rounded-2xl flex flex-col items-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                <span className="text-3xl">🔥</span>
                            </div>
                            <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">Organized by Vyuha</h2>
                            <div className="max-w-2xl text-center">
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Vyuhathon is organized by <span className="font-bold">Vyuha</span>, a leading innovation club dedicated to pushing boundaries in technology and problem-solving.
                                    Our mission is to empower students with the right platform to create, innovate, and excel in today's rapidly evolving digital landscape.
                                </p>
                                <div className="bg-blue-50 px-8 py-4 rounded-xl text-blue-700 italic border-l-4 border-blue-400">
                                    "We believe in the power of collaboration and creativity to solve tomorrow's challenges today."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced CTA */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl text-blue-800 font-bold mb-6">Ready to innovate with us?</h3>
                    <Link href="/register" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl hover:shadow-blue-300/30 text-lg">
                        Register for Vyuhathon
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </Link>
                    <div className="mt-4">
                        <Link href="/schedule" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                            View Event Schedule
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Page;