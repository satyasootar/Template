import ChatBot from "./components/ChatBot"
import { Footer1 } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { DemoHeroGeometric } from "./components/Hero"
import ITServiceFAQ from "./components/Accordian"
import { Blog7 } from "./components/blog7"
import { WhyUS } from "./components/WhyUS"
import Skills from "./components/OurServices"
import CallToAction from "./components/CallToAction"

const App = () => {
  return (
    <div >
      <Navbar />
      <DemoHeroGeometric />
      <WhyUS />
      <Blog7 />
      <Skills />
      <ITServiceFAQ />
      <CallToAction />
      <Footer1 />
      <ChatBot />

    </div>

  )
}

export default App