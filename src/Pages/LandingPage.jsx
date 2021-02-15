import React from 'react'
import Header from '../components/Header/Header'
import HeaderRowTwo from '../components/Header/HeaderRowTwo'

export default function LandingPage() {
    return (
        <div className="">
            <div>
                <Header/>
                <HeaderRowTwo/>
                <div className="max-w-screen-2xl mx-auto">
                <div className="bg-awesum  text-white  px-6 sm:px-16  pb-96">
                    <p className="pt-32 pb-12 text-2xl md:text-4xl">Curious Learners Change the World</p>
                    <p className="text-xl pb-8">Courses for Secondary/High School Students</p>
                    <button className="bg-white text-primary text-lg py-4 mt-32 px-20 rounded-md">Get Started</button>
                </div>
                </div>
                
            </div>
        </div>
    )
}
