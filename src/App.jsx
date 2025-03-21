import ChatBot from "./components/ChatBot"
import { Footer1 } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import SignupForm from "./components/SignUp"
import { DemoHeroGeometric } from "./components/Hero"
import { WhyUS } from "./components/WhyUS"

const App = () => {
  return (
    <div >
      <Navbar />
      <DemoHeroGeometric />
      <WhyUS />
      <Footer1 />
      <ChatBot />

    </div>

  )
}

export default App