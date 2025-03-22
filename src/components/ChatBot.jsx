import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Trash2 } from 'lucide-react';

const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your actual API key
const MODEL_NAME = 'gemini-1.5-flash';

/**
 * generateContent sends a request to the generative language API.
 * It injects a personalized prompt to ensure the bot answers only about your products or services.
 *
 * @param {string} prompt - The user's original query.
 * @returns {Promise<string|null>} The generated answer or null if an error occurred.
 */
async function generateContent(prompt) {
    // Create a personalized prompt that restricts responses to your products or services.
    const personalizedPrompt = `TechBuddy AI is an intelligent IT service chatbot designed to provide quick, professional, and friendly assistance with a wide range of IT-related inquiries. Whether you need expert advice on IT consulting to optimize your infrastructure, custom software development to boost productivity, secure and scalable cloud solutions, or advanced cybersecurity to protect your digital assets, TechBuddy AI has got you covered. It also offers guidance on IT support and maintenance, system integration, and tailored solutions for industries like healthcare, finance, and retail. With a focus on clarity and efficiency, TechBuddy AI ensures seamless communication while proactively offering additional resources or consultation scheduling when needed. Let TechBuddy AI help you navigate the digital landscape with confidence. The user's question is: "${prompt}"`;

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: personalizedPrompt
                        }]
                    }]
                })
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Return the text of the first candidate.
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}


function ChatWindow({ onClose }) {
    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Scroll to the bottom when new messages arrive.
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim() || isLoading) return;

        // Append the user's message to the chat history.
        setMessages(prev => [...prev, { text: inputMessage, isBot: false }]);

        try {
            setIsLoading(true);
            // Generate the bot's response.
            const botResponse = await generateContent(inputMessage);
            setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
        } catch (error) {
            setMessages(prev => [
                ...prev,
                { text: "Sorry, I'm having trouble connecting. Please try again later.", isBot: true }
            ]);
        } finally {
            setIsLoading(false);
            setInputMessage('');
        }
    };

    const handleClearChat = () => {
        setMessages([]);
    };

    return (
        <div className="fixed bottom-20 z-20 right-4 w-96 max-w-full bg-white/80 dark:bg-gray-900/80 rounded-lg shadow-xl backdrop-blur-xl border border-white/30 dark:border-gray-700/30 flex flex-col">
            {/* Chat Header */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-gray-900 dark:text-white p-4 rounded-t-lg flex items-center justify-between border-b border-white/20 dark:border-gray-700/30">
                <h2 className="text-lg font-semibold">Tech Buddy AI</h2>
                <div className="flex gap-2">
                    <button
                        onClick={handleClearChat}
                        className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-full text-gray-700 dark:text-gray-200"
                    >
                        <Trash2 size={20} />
                    </button>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-full text-gray-700 dark:text-gray-200"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 h-96 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`}
                    >
                        <div className={`max-w-[80%] rounded-lg p-3 backdrop-blur-sm ${
                            message.isBot
                            ? 'bg-white/70 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 shadow-sm'
                            : 'bg-gray-100/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-100 shadow-sm'
                        }`}>
                            <p className="text-sm">{message.text}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start mb-4">
                        <div className="bg-white/70 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 rounded-lg p-3 backdrop-blur-sm">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-300 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-300 rounded-full animate-bounce delay-100"></div>
                                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-300 rounded-full animate-bounce delay-200"></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="border-t border-white/20 dark:border-gray-700/30 p-4 backdrop-blur-sm">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 
                        bg-white/70 dark:bg-gray-800/70
                        border-gray-300/50 dark:border-gray-700/50
                        text-gray-900 dark:text-white
                        placeholder-gray-500 dark:placeholder-gray-400
                        backdrop-blur-sm"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        className="bg-gray-100/80 dark:bg-gray-800/80 text-gray-900 dark:text-white px-4 py-2 rounded-lg 
                        hover:bg-gray-200/80 dark:hover:bg-gray-700/80 
                        disabled:opacity-50 transition-all backdrop-blur-sm
                        border border-gray-300/50 dark:border-gray-700/50"
                        disabled={isLoading || !inputMessage.trim()}
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-4 right-4 bg-white/80 dark:bg-gray-800/80 w-16 h-16 rounded-full flex items-center justify-center shadow-xl backdrop-blur-xl border border-white/30 dark:border-gray-700/30 hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all"
                >
                    <Bot className="text-gray-900 dark:text-white" size={30} />
                </button>
            )}
        </>
    );
}
export default ChatWidget;
