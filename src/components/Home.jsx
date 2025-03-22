import React from 'react'
import { DemoHeroGeometric } from '@/components/Hero'
import { WhyUS } from '@/components/WhyUS'
import { Blog7 } from '@/components/blog7'
import Service from './OurServices'
import ITServiceFAQ from '@/components/Accordian'
import { Testimonial } from '@/components/Testimonal'
import CallToAction from '@/components/CallToAction'

function Home() {
    return (
        <>
            <DemoHeroGeometric />
            <WhyUS />
            <Blog7 />
            <Service />
            <ITServiceFAQ />
            <Testimonial />
            <CallToAction />
        </>
    )
}

export default Home 