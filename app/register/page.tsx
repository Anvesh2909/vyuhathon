"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { supabase } from "@/lib/supabase";
import Link from 'next/link';
import axios from 'axios';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        universityId: '',
        teamName: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setMessage('');

        try {
            // Validate input
            if (!formData.name.trim() || !formData.email.trim() || !formData.universityId.trim() || !formData.teamName.trim()) {
                throw new Error("All fields are required");
            }

            // Check if email already exists
            const { data: existingEmail, error: emailError } = await supabase
                .from('registrations')
                .select('email')
                .eq('email', formData.email)
                .single();

            if (emailError && emailError.code !== 'PGRST116') throw emailError;
            if (existingEmail) throw new Error("Email already exists");

            // Insert new registration
            const { data, error } = await supabase
                .from('registrations')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        universityId: formData.universityId,
                        teamName: formData.teamName
                    }
                ])
                .select();

            if (error) throw error;

            // Send confirmation email
            const response = await axios.post('/api/send-email', {
                name: formData.name,
                email: formData.email,
            });

            if (response.status !== 200) {
                throw new Error('Failed to send confirmation email');
            }

            setMessage('Registration successful! We will contact you soon.');
            setFormData({ name: '', email: '', universityId: '', teamName: '' });
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-xl text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    <span className="text-blue-600">Register</span> for <span className="text-gray-800">Vyuhathon</span>
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed max-w-lg mx-auto">
                    Take the first step towards innovation. Complete the form below to participate in our hackathon.
                </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl border border-blue-100">
                {message && (
                    <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse mr-3"></div>
                        {message}
                    </div>
                )}

                {error && (
                    <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-blue-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-blue-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="universityId" className="block text-gray-700 font-medium mb-2">
                            University ID <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="universityId"
                            name="universityId"
                            value={formData.universityId}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-blue-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="Enter your university ID"
                        />
                    </div>

                    <div>
                        <label htmlFor="teamName" className="block text-gray-700 font-medium mb-2">
                            Team Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="teamName"
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-blue-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="Enter your team name"
                        />
                        <p className="mt-1 text-sm text-gray-500">
                            All team members should use the same team name when registering.
                        </p>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3.5 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-lg"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </span>
                        ) : (
                            <span className="flex items-center justify-center">
                                Register Now
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                        )}
                    </button>
                </form>

                <div className="mt-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-3 bg-white px-5 py-2.5 rounded-full shadow-sm my-4">
                        <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                        <p className="text-sm font-medium text-gray-700">Registration Open Until March 16, 8:00 AM</p>
                    </div>

                    By clicking "Register Now", you agree to our <Link href="/terms" className="text-blue-600 hover:text-blue-800 transition-colors">Terms and Conditions</Link> and acknowledge that your information will be used in accordance with Vyuhathon's <Link href="/privacy" className="text-blue-600 hover:text-blue-800 transition-colors">Privacy Policy</Link>.
                </div>
            </div>

            <div className="mt-8 text-gray-600 flex items-center justify-center">
                <span>For any assistance, contact us at </span>
                <a href="mailto:vyuha.kl@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors ml-1">vyuha.kl@gmail.com</a>
            </div>
        </div>
    );
};

export default RegistrationForm;