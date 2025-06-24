import React, { useState } from 'react';
import { Video, Phone, Star, Coins, Send, Paperclip, MoreVertical, Award, BookOpen } from 'lucide-react';

export const TutorChatScreen: React.FC = () => {
  const [message, setMessage] = useState('');
  
  const tutor = {
    name: 'Dr. Emily Johnson',
    subject: 'Mathematics',
    rating: 4.9,
    reviews: 156,
    hourlyRate: 25,
    specialties: ['Calculus', 'Linear Algebra', 'Statistics'],
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    isOnline: true,
  };

  const messages = [
    {
      id: 1,
      sender: 'tutor',
      content: 'Hi Alex! I see you\'re working on integration problems. Which specific concept are you struggling with?',
      time: '2:15 PM',
      type: 'text',
    },
    {
      id: 2,
      sender: 'user',
      content: 'I\'m having trouble with integration by parts. The formula is confusing me.',
      time: '2:16 PM',
      type: 'text',
    },
    {
      id: 3,
      sender: 'tutor',
      content: 'No worries! Let me break it down for you. The formula is ∫u dv = uv - ∫v du. Would you like me to share a document with step-by-step examples?',
      time: '2:17 PM',
      type: 'text',
    },
    {
      id: 4,
      sender: 'tutor',
      content: '📄 Integration by Parts - Complete Guide.pdf',
      time: '2:18 PM',
      type: 'document',
      documentPrice: 10,
    },
    {
      id: 5,
      sender: 'user',
      content: 'That would be great! How much does the document cost?',
      time: '2:19 PM',
      type: 'text',
    },
  ];

  const availableDocuments = [
    { name: 'Calculus Cheat Sheet', price: 5, downloads: 234 },
    { name: 'Integration Practice Problems', price: 8, downloads: 189 },
    { name: 'Advanced Calculus Notes', price: 15, downloads: 156 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={tutor.avatar}
                alt={tutor.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                tutor.isOnline ? 'bg-green-500' : 'bg-gray-400'
              }`}></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{tutor.name}</h3>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <Star className="text-yellow-500 fill-current" size={14} />
                  <span className="text-sm text-gray-600 ml-1">{tutor.rating}</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600">{tutor.subject}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="bg-green-100 text-green-700 p-2 rounded-full hover:bg-green-200 transition-colors">
              <Phone size={20} />
            </button>
            <button className="bg-blue-100 text-blue-700 p-2 rounded-full hover:bg-blue-200 transition-colors">
              <Video size={20} />
            </button>
            <button className="bg-gray-100 text-gray-700 p-2 rounded-full hover:bg-gray-200 transition-colors">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Tutor Info Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white rounded-full px-3 py-1">
              <Coins size={16} className="text-yellow-500 mr-1" />
              <span className="text-sm font-medium">{tutor.hourlyRate} coins/hour</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-3 py-1">
              <Award size={16} className="text-purple-500 mr-1" />
              <span className="text-sm font-medium">{tutor.reviews} reviews</span>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
            Book Session
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 space-y-4 max-h-[calc(100vh-280px)] overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs lg:max-w-md ${
              msg.sender === 'user' 
                ? 'bg-blue-600 text-white rounded-l-2xl rounded-tr-2xl' 
                : 'bg-white text-gray-800 rounded-r-2xl rounded-tl-2xl shadow-sm'
            } p-3`}>
              {msg.type === 'document' ? (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <BookOpen size={16} />
                    <span className="text-sm font-medium">{msg.content}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                    <div className="flex items-center text-yellow-500">
                      <Coins size={14} className="mr-1" />
                      <span className="text-sm font-medium">{msg.documentPrice} coins</span>
                    </div>
                    <button className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">
                      Purchase
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-sm">{msg.content}</p>
              )}
              <p className={`text-xs mt-1 ${
                msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Available Documents */}
      <div className="bg-white border-t border-gray-100 p-4">
        <h4 className="font-medium text-gray-800 mb-3">Available Documents</h4>
        <div className="grid grid-cols-1 gap-2">
          {availableDocuments.map((doc, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
              <div className="flex items-center space-x-3">
                <BookOpen size={16} className="text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-gray-800">{doc.name}</p>
                  <p className="text-xs text-gray-600">{doc.downloads} downloads</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center text-yellow-500">
                  <Coins size={14} className="mr-1" />
                  <span className="text-sm font-medium">{doc.price}</span>
                </div>
                <button className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4 sticky bottom-16">
        <div className="flex items-center space-x-3">
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Paperclip size={20} />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full bg-gray-100 rounded-full py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
            />
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors"
              onClick={() => setMessage('')}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};