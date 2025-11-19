import React from 'react';

interface AiAnalysisResultProps {
    industry: string;
    priceTier: string;
    userValues: Record<string, string>;
}

export const AiAnalysisResult = ({ industry, priceTier, userValues }: AiAnalysisResultProps) => {
    // Mock logic to generate "dynamic" insights based on inputs
    // In a real app, this would be an LLM call

    const hasData = Object.keys(userValues).length > 0;
    const score = hasData ? Math.floor(Math.random() * 30) + 60 : 0; // Mock score 60-90

    return (
        <div className="animate-fade-in-up space-y-8">
            <div className="bg-white rounded-xl shadow-lg border border-brevo-green/20 overflow-hidden">
                <div className="bg-brevo-dark-green px-8 py-6 text-white flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold flex items-center gap-3">
                            <span className="text-3xl">🤖</span>
                            AI Performance Analysis
                        </h2>
                        <p className="text-brevo-light/80 mt-1">
                            Based on your inputs for {industry} ({priceTier})
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-brevo-light/60 uppercase tracking-wider font-semibold">Overall Health Score</div>
                        <div className="text-4xl font-bold text-white">{score}/100</div>
                    </div>
                </div>

                <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Executive Summary */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <span className="w-1 h-6 bg-brevo-green rounded-full"></span>
                                Executive Summary
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Your performance indicates a strong foundation in <strong>Acquisition</strong>, but there are significant efficiency leaks in your <strong>Retention</strong> and <strong>Channel Mix</strong> strategies.
                                While you are acquiring customers at a competitive cost, you are not maximizing their lifetime value, leaving approximately <strong>20-30% of potential revenue</strong> on the table.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    Key Strengths
                                </h4>
                                <ul className="space-y-2 text-sm text-green-700">
                                    <li>• Customer Acquisition Cost is well optimized</li>
                                    <li>• Strong Mobile Conversion rates</li>
                                    <li>• Healthy Gross Margins</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                    Critical Attention Areas
                                </h4>
                                <ul className="space-y-2 text-sm text-red-700">
                                    <li>• Email Revenue Share is below benchmark (15%)</li>
                                    <li>• Low Repeat Purchase Rate</li>
                                    <li>• High Cart Abandonment</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Brevo Recommendations */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h3 className="text-lg font-bold text-brevo-dark-green mb-4">
                            Brevo Recommendations
                        </h3>
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="text-xs font-bold text-brevo-green uppercase mb-1">Quick Win</div>
                                <h4 className="font-semibold text-gray-900 mb-1">Automate Abandoned Carts</h4>
                                <p className="text-xs text-gray-500">Recover 4-7% of lost sales immediately by activating a 3-step email sequence.</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="text-xs font-bold text-brevo-green uppercase mb-1">Strategic Play</div>
                                <h4 className="font-semibold text-gray-900 mb-1">Launch Loyalty Program</h4>
                                <p className="text-xs text-gray-500">Increase LTV by incentivizing second purchases within 30 days.</p>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="text-xs font-bold text-brevo-green uppercase mb-1">Channel Expansion</div>
                                <h4 className="font-semibold text-gray-900 mb-1">Integrate SMS Campaigns</h4>
                                <p className="text-xs text-gray-500">Boost engagement for flash sales and time-sensitive offers.</p>
                            </div>
                        </div>

                        <button className="w-full mt-6 py-3 bg-brevo-green text-white font-bold rounded-lg hover:bg-brevo-dark-green transition-colors shadow-md">
                            Implement with Brevo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
