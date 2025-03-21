import ChatBot from "./components/ChatBot"
import { Footer1 } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import SignupForm from "./components/SignUp"
import { DemoHeroGeometric } from "./components/Hero"
import { Blog7 } from "./components/blog7"


const App = () => {
  return (
    <div >
      <Navbar />
      <DemoHeroGeometric />
      <Blog7 />
      <Footer1 />
      <ChatBot />

    </div>

  )
}

export default App