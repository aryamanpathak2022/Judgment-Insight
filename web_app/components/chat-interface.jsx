'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Gavel, Send, Upload, MoreVertical } from "lucide-react"

export function ChatInterfaceComponent() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to Judgment Insight. How can I assist you today?", sender: "ai" },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const cases = [
    { id: 1, name: "Tata Sons Ltd. v. Greenpeace " },
    { id: 2, name: "Vodafone BV v. Union of India" },
    { id: 3, name: "Novartis AG v. Union of India" },
    { id: 4, name: "Reliance Industries Ltd. v. Securities " },
  ]

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages(
        [...messages, { id: messages.length + 1, text: inputMessage, sender: "user" }]
      )
      setInputMessage("")
      // Here you would typically send the message to your AI backend and handle the response
    }
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 bg-muted border-r flex flex-col">
        <div className="p-4 flex items-center space-x-2 ">
          <Gavel className="h-6 w-6" />
          <span className="font-bold text-lg">Judgment Insight</span>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-2 space-y-2">
            {cases.map((caseItem) => (
              <Button
                key={caseItem.id}
                variant="ghost"
                className="w-full justify-start break-words text-left" // Ensures text wraps
              >
                {caseItem.name}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col ">
        {/* Chat Header */}
        <div className="border-b p-4 flex justify-between items-center bg-black text-white">
          <h2 className="text-lg font-semibold">Current Case: Tata Sons Ltd. v. Greenpeace International</h2>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>

        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
  {messages.map((message) => (
    <div
      key={message.id}
      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`rounded-2xl p-3 max-w-[70%] break-words ${
          message.sender === 'user'
            ? 'bg-blue-500 text-white'  // Bubble for user
            : 'bg-gray-300 text-black'  // Bubble for other messages
        }`}
        style={{ backgroundColor: 'lightgray' }}  // Adds the grey background
      >
        {message.text}
      </div>
    </div>
  ))}
</div>

        </ScrollArea>

        {/* Input Area */}
        <div className="border-t p-4">
          <div className="flex space-x-2">
            <Button variant="outline" size="icon">
              <Upload className="h-4 w-4" />
              <span className="sr-only">Upload document</span>
            </Button>
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1"
            />
            <Button onClick={handleSendMessage}>
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
