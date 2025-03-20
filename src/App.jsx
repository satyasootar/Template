import ChatBot from "./components/ChatBot"
import { Navbar } from "./components/Navbar"
import SignupForm from "./components/SignUp"

const App = () => {
  return (
    <div className="px-10" >
      <Navbar />
      <ChatBot />
      <SignupForm />
    </div>

  )
}

export default App