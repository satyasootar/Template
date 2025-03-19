import ChatBot from "./components/ChatBot"
import { Navbar } from "./components/Navbar"

const App = () => {
  return (
    <div className="px-10" >
      <Navbar />
      <ChatBot />
    </div>

  )
}

export default App