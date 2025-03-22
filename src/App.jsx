import ChatBot from "./components/ChatBot"
import { Footer1 } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import SignupForm from "./components/SignUp"
import { DemoHeroGeometric } from "./components/Hero"

import { Blog7 } from "./components/blog7"

import { WhyUS } from "./components/WhyUS"

const App = () => {
  return (
    <div >
      <Navbar />
      <DemoHeroGeometric />

      <Blog7 />

      <WhyUS />
      <Footer1 />
      <ChatBot />

    </div>

  )
}

export default App