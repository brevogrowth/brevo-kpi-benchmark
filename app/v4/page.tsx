'use client';

import React, { useState, useRef } from 'react';
import { Header } from '@/components/Header';
import { SidebarInputs } from '@/components/SidebarInputs';
import { BenchmarkGrid } from '@/components/BenchmarkGrid';
import { AiAnalysisResult } from '@/components/AiAnalysisResult';
import { retailBenchmarks, Industry, PriceTier } from '@/data/retailBenchmarks';

export default function V4Page() {
    const [industry, setIndustry] = useState<Industry>('Fashion');
    const [priceTier, setPriceTier] = useState<PriceTier>('Mid-Range');
    const [isComparing, setIsComparing] = useState(false);
    const [userValues, setUserValues] = useState<Record<string, string>>({});
    const [showAnalysis, setShowAnalysis] = useState(false);
    const analysisRef = useRef<HTMLDivElement>(null);

    const handleValueChange = (id: string, value: string) => {
        setUserValues(prev => ({ ...prev, [id]: value }));
    };

    const handleGenerateAnalysis = () => {
        setShowAnalysis(true);
        setTimeout(() => {
            analysisRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const currentBenchmarks = retailBenchmarks[industry];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left Sidebar - Sticky on Desktop */}
                    <aside className="w-full lg:w-80 flex-shrink-0 lg:sticky lg:top-24">
                        <SidebarInputs
                            industry={industry}
                            setIndustry={setIndustry}
                            priceTier={priceTier}
                            setPriceTier={setPriceTier}
                            isComparing={isComparing}
                            setIsComparing={(val) => {
                                setIsComparing(val);
                                if (!val) setShowAnalysis(false);
                            }}
                        />
                    </aside>

                    {/* Main Content - Scrollable */}
                    <div className="flex-1 w-full">
                        <div className="mb-8">
                        </div>

                        <BenchmarkGrid
                            benchmarks={currentBenchmarks}
                            priceTier={priceTier}
                            userValues={userValues}
                            isComparing={isComparing}
                            onValueChange={handleValueChange}
                        />

                        {/* Generate Analysis Button */}
                        {isComparing && !showAnalysis && (
                            <div className="mt-8 flex justify-center">
                                <button
                                    onClick={handleGenerateAnalysis}
                                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-brevo-green font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brevo-green hover:bg-brevo-dark-green shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    <span className="mr-2 text-2xl">✨</span>
                                    Generate AI Analysis
                                    <div className="absolute -top-2 -right-2">
                                        <span className="relative flex h-4 w-4">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brevo-green opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-4 w-4 bg-brevo-green"></span>
                                        </span>
                                    </div>
                                </button>
                            </div>
                        )}

                        {/* AI Analysis Result */}
                        {showAnalysis && (
                            <div ref={analysisRef} className="mt-12">
                                <AiAnalysisResult
                                    industry={industry}
                                    priceTier={priceTier}
                                    userValues={userValues}
                                />
                            </div>
                        )}

                        <div className="mt-20 relative">
                            {/* Decorative blurred circles behind the block */}
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-brevo-green/20 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="relative bg-[#0B1221] text-white p-12 md:p-16 rounded-[2.5rem] shadow-2xl text-center overflow-hidden border border-white/5">
                                <div className="relative z-10 max-w-4xl mx-auto">
                                    <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                                        Turn these insights into revenue with Brevo
                                    </h3>
                                    <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
                                        The only CRM that combines <strong>Email, SMS, and Automation</strong> to help you build lasting customer relationships and drive efficient growth.
                                    </p>
                                    <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                                        <button className="px-8 py-4 bg-brevo-green text-white font-bold text-lg rounded-full hover:bg-brevo-dark-green transition-all duration-300 shadow-lg hover:shadow-brevo-green/25 min-w-[200px]">
                                            Start Free Trial
                                        </button>
                                        <button className="px-8 py-4 bg-transparent text-white font-medium text-lg rounded-full hover:bg-white/5 transition-colors min-w-[200px]">
                                            Talk to Sales
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
