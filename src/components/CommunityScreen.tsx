import React from 'react';
import { MessageCircle, ThumbsUp, Users, Plus, Search, Filter, Clock, CheckCircle, Star, Award } from 'lucide-react';

export const CommunityScreen: React.FC = () => {
  const questions = [
    {
      id: 1,
      title: 'Làm thế nào để giải tích phân từng phần?',
      subject: 'Toán Học',
      author: 'Huỳnh Hòang Anh',
      authorLevel: 'Sinh Viên Năm 1',
      time: '2 giờ trước',
      likes: 15,
      replies: 8,
      solved: true,
      tags: ['toán12', 'giảitích'],
    },
    {
      id: 2,
      title: 'Giải thích hàm sóng cơ học lượng tử',
      subject: 'Vật Lý',
      author: 'Đàm Lê Phương Anh',
      authorLevel: 'Thạc sĩ',
      time: '4 giờ trước',
      likes: 23,
      replies: 12,
      solved: false,
      tags: ['#vatlydaihoc', 'vatly'],
    },
    {
      id: 3,
      title: 'Cơ chế phản ứng hóa học hữu cơ',
      subject: 'Hóa học',
      author: 'Nguyễn Thanh Tú Quyên',
      authorLevel: 'Sinh viên năm 2',
      time: '1 ngày trước',
      likes: 8,
      replies: 5,
      solved: false,
      tags: ['hoahoc', 'daicuong'],
    },
  ];

  const studyGroups = [
    {
      id: 1,
      name: 'Toán học đại cương',
      members: 24,
      subject: 'Toán học',
      nextSession: 'Hôm nay 7:00 PM',
      level: 'Lớp 12',
    },
    {
      id: 2,
      name: 'Vật lý đại cương',
      members: 18,
      subject: 'Vật lý',
      nextSession: 'Ngày mai 3:00 PM',
      level: 'Lớp 12',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Sinh Viên Năm 1':
        return 'text-green-600 bg-green-100';
      case 'Thạc sĩ':
        return 'text-orange-600 bg-orange-100';
      case 'Sinh viên năm 2':
        return 'text-blue-600 bg-blue-100';
      case 'Lớp 1212':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold">Cộng Đồng</h2>
            <p className="text-blue-100 text-sm">Học cùng nhau, phát triển cùng nhau</p>
          </div>
          <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all duration-200">
            <Plus size={20} />
          </button>
        </div>
        
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" size={20} />
          <input
            type="text"
            placeholder="Search questions, topics, or groups..."
            className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl py-3 pl-12 pr-4 placeholder-blue-100 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Community Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <MessageCircle className="text-blue-600 mx-auto mb-2" size={24} />
            <p className="text-lg font-bold text-gray-800">1.2k</p>
            <p className="text-xs text-gray-600">Câu hỏi</p>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <Users className="text-green-600 mx-auto mb-2" size={24} />
            <p className="text-lg font-bold text-gray-800">45</p>
            <p className="text-xs text-gray-600">Nhóm học tập</p>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <Award className="text-purple-600 mx-auto mb-2" size={24} />
            <p className="text-lg font-bold text-gray-800">89%</p>
            <p className="text-xs text-gray-600">Mức độ giải</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-2 overflow-x-auto">
          {['Tất cả', 'Toán', 'Vật lý', 'Hóa học', 'Sinh học'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                filter === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Recent Questions */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Câu hỏi gần đây</h3>
            <Filter className="text-gray-400" size={20} />
          </div>
          
          <div className="space-y-4">
            {questions.map((question) => (
              <div key={question.id} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-800 line-clamp-2">{question.title}</h4>
                      {question.solved && (
                        <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs text-blue-600 font-medium">{question.subject}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-600">{question.author}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getLevelColor(question.authorLevel)}`}>
                        {question.authorLevel}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 mb-2">
                      {question.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <ThumbsUp size={14} className="text-gray-400" />
                      <span className="text-sm text-gray-600">{question.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle size={14} className="text-gray-400" />
                      <span className="text-sm text-gray-600">{question.replies}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock size={12} className="mr-1" />
                    <span className="text-xs">{question.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Study Groups */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Nhóm đang hoạt động</h3>
            <button className="text-blue-600 text-sm font-medium">Xem tất cả</button>
          </div>
          
          <div className="space-y-3">
            {studyGroups.map((group) => (
              <div key={group.id} className="border border-gray-100 rounded-xl p-3 hover:border-blue-200 transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-800">{group.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getLevelColor(group.level)}`}>
                    {group.level}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{group.subject}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users size={14} className="text-gray-400" />
                      <span className="text-sm text-gray-600">{group.members} thành viên</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-sm text-gray-600">{group.nextSession}</span>
                    </div>
                  </div>
                  <button className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-lg hover:bg-blue-200 transition-all duration-200">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ask Question Button */}
        <button className="fixed bottom-24 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 z-40">
          <Plus size={24} />
        </button>
      </div>
    </div>
  );
};
