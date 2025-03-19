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
    const personalizedPrompt = `You are a customer support assistant specialized in our products and services. Your name is Hari. Answer ONLY questions related to our products or services and ignore any unrelated topics. The user's question is: "${prompt}"`;

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
        <div className="fixed bottom-20 right-4 w-96 max-w-full bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col">
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
                <h2 className="text-lg font-semibold">AI Assistant</h2>
                <div className="flex gap-2">
                    <button onClick={handleClearChat} className="p-1 hover:bg-blue-700 rounded-full">
                        <Trash2 size={20} />
                    </button>
                    <button onClick={onClose} className="p-1 hover:bg-blue-700 rounded-full">
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 h-96">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`}
                    >
                        <div className={`max-w-[80%] rounded-lg p-3 ${message.isBot ? 'bg-gray-100 text-gray-800' : 'bg-blue-600 text-white'}`}>
                            <p className="text-sm">{message.text}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start mb-4">
                        <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                        disabled={isLoading || !inputMessage.trim()}
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

/**
 * ChatWidget manages the overall chat experience.
 * It initially displays a floating circular button with a Bot icon. When clicked, it opens the ChatWindow.
 */
function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    const openChat = () => {
        setIsOpen(true);
    };

    const closeChat = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && <ChatWindow onClose={closeChat} />}
            {!isOpen && (
                <button
                    onClick={openChat}
                    className="fixed bottom-4 right-4 bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                >
                    <Bot size={24} />
                </button>
            )}
        </>
    );
}

export default ChatWidget;
