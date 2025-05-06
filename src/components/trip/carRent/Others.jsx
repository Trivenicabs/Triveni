"use client";

import { CheckCircle, PhoneCall } from 'lucide-react'
import React from 'react'
import { phoneNumber } from '../../../utils/data';

function Others() {
    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };
    
    return (
        <div>
            {/* rental requirements */}
            <section className="py-16 max-w-7xl mx-auto px-4">
                <h2 className="text-3xl max-sm:text-2xl font-bold text-center mb-4">
                    Rental Requirements
                </h2>
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Required Documents</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                                    <span>Valid Driver's License (minimum 1 year old)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                                    <span>Government ID Proof (Aadhar/PAN/Passport)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                                    <span>Security Deposit (refundable)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                                    <span>Address Proof</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Terms & Conditions</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                                    <span>Minimum age: 21 years</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                                    <span>Advance booking required</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                                    <span>Fuel charges as per actual consumption</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                                    <span>Insurance coverage included</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ready to book */}
            <section className="py-16 max-w-7xl mx-auto px-4">
                <div className="bg-black rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl text-white font-bold mb-4">
                        Ready to Book Your Ride?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact us now to check availability and get the best rates for your
                        car rental
                    </p>
                    <button onClick={handleClick} className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-colors flex items-center gap-2 mx-auto">
                        <PhoneCall className="w-5 h-5" />
                        Contact for Booking
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Others