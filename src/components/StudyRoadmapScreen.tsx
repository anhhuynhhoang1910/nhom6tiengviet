import React from 'react';
import { Brain, Clock, CheckCircle, Circle, Star, Trophy, Target, BookOpen } from 'lucide-react';

export const StudyRoadmapScreen: React.FC = () => {
  const roadmapItems = [
    {
      id: 1,
      subject: 'Toán học',
      topic: 'Đại số cơ bản',
      status: 'Hoàn thành',
      difficulty: 'Cơ bản',
      estimatedTime: '2 Tuần',
      progress: 100,
      aiGenerated: true,
    },
    {
      id: 2,
      subject: 'Toán học',
      topic: 'Cơ sở giải tích',
      status: 'Đang học',
      difficulty: 'Trung bình',
      estimatedTime: '3 tuần',
      progress: 65,
      aiGenerated: true,
    },
    {
      id: 3,
      subject: 'Toán học',
      topic: 'Giải tích nâng cao',
      status: 'Tạm dừng',
      difficulty: 'Khó',
      estimatedTime: '4 tuần',
      progress: 0,
      aiGenerated: true,
    },
    {
      id: 4,
      subject: 'Vật lý',
      topic: 'Cơ học',
      status: 'Sẵn sàng',
      difficulty: 'Trung bình',
      estimatedTime: '5 tuần',
      progress: 0,
      aiGenerated: false,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Hoàn thành':
        return <CheckCircle className="text-green-500" size={24} />;
      case 'Đang học':
        return <Circle className="text-blue-500" size={24} />;
      case 'Tạm dừng':
        return <Circle className="text-gray-400" size={24} />;
      default:
        return <Circle className="text-gray-300" size={24} />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Cơ bản':
        return 'text-green-600 bg-green-100';
      case 'Trung bình':
        return 'text-orange-600 bg-orange-100';
      case 'Khó':
        return 'text-red-600 bg-red-100';
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
            <h2 className="text-xl font-bold">Kế hoạch học tập</h2>
            <p className="text-blue-100 text-sm">Lộ trình học tập được cá nhân hóa bằng AI</p>
          </div>
          <div className="flex items-center bg-white/20 rounded-full px-3 py-1">
            <Brain size={16} className="mr-1" />
            <span className="text-sm font-medium">AI đđã tối ưu hóa</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Progress Overview */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">Tiến độ chung</h3>
            <div className="flex items-center text-blue-600">
              <Trophy size={16} className="mr-1" />
              <span className="text-sm font-medium">42% Hoàn thành</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300" style={{ width: '42%' }}></div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-green-600">3</p>
              <p className="text-xs text-gray-600">Hoàn thành</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">2</p>
              <p className="text-xs text-gray-600">Đang học</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-400">8</p>
              <p className="text-xs text-gray-600">Chưa học</p>
            </div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4 border border-purple-100">
          <div className="flex items-center mb-2">
            <Brain className="text-purple-600 mr-2" size={20} />
            <h3 className="font-semibold text-gray-800">AI gợi ý</h3>
          </div>
          <p className="text-sm text-gray-700">Dựa trên kết quả của bạn, hãy tập trung vào các bài tập thực hành giải tích tuần này. Dự kiến ​​hoàn thành: sớm hơn dự kiến ​​3 ngày!</p>
        </div>

        {/* Roadmap Items */}
        <div className="space-y-4">
          {roadmapItems.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Connection Line */}
              {index < roadmapItems.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200 z-0"></div>
              )}
              
              <div className={`bg-white rounded-2xl p-4 shadow-sm relative z-10 ${
                item.status === 'Tạm dừng' ? 'opacity-60' : ''
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(item.status)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-800">{item.topic}</h4>
                        <p className="text-sm text-gray-600">{item.subject}</p>
                      </div>
                      {item.aiGenerated && (
                        <div className="flex items-center bg-purple-100 text-purple-700 rounded-full px-2 py-1">
                          <Brain size={12} className="mr-1" />
                          <span className="text-xs font-medium">AI</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-3">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(item.difficulty)}`}>
                        {item.difficulty}
                      </span>
                      <div className="flex items-center text-gray-500">
                        <Clock size={12} className="mr-1" />
                        <span className="text-xs">{item.estimatedTime}</span>
                      </div>
                    </div>

                    {item.status !== 'Tạm dừng' && (
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-600">Tiến độ</span>
                          <span className="text-xs font-medium text-gray-800">{item.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <button 
                        className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                          item.status === 'Tạm dừng' 
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : item.status === 'Hoàn thành'
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                        }`}
                        disabled={item.status === 'Tạm dừng'}
                      >
                        {item.status === 'Hoàn thành' ? 'Xem' : item.status === 'Tạm dừng' ? 'Tạm dừng' : 'Tiếp tục'}
                      </button>
                      
                      {item.status !== 'Tạm dừng' && (
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                            <BookOpen size={16} />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-yellow-500 transition-colors">
                            <Star size={16} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
