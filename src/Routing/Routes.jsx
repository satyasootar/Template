import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@/components/Home'
import { BlogPage } from '@/components/BlogPage'
import { Navbar } from '@/components/Navbar'
import { Footer1 } from '@/components/Footer'
import ChatBot from "@/components/ChatBot"

function Routing() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blog' element={<BlogPage />} />
            </Routes>
            <Footer1 />
            <ChatBot />
        </>
    )
}

export default Routing