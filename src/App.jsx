import ChatBot from "./components/ChatBot"
import { Footer1 } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import SignupForm from "./components/SignUp"


const App = () => {
  return (
    <div className="px-10" >
      <ChatBot />
      <Navbar />
      <SignupForm />
      <Footer1 />

    </div>

  )
}

export default App