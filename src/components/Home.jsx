import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { DemoHeroGeometric } from '@/components/Hero'
import { WhyUS } from '@/components/WhyUS'
import { Blog7 } from '@/components/blog7'
import Skills from '@/components/OurServices'
import ITServiceFAQ from '@/components/Accordian'
import { Testimonial } from '@/components/Testimonal'
import CallToAction from '@/components/CallToAction'

function Home() {
    return (
        <>
            <DemoHeroGeometric />
            <WhyUS />
            <Blog7 />
            <Skills />
            <ITServiceFAQ />
            <Testimonial />
            <CallToAction />
        </>
    )
}

export default Home