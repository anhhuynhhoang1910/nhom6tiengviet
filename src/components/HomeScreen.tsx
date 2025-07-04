import React from 'react';
import { Header } from './Header';
import { Brain, Calendar, BookOpen, TrendingUp, Users, Award, Clock, Target } from 'lucide-react';

export const HomeScreen: React.FC = () => {
  const todayTasks = [
    { subject: 'Toán học', topic: 'Đường chiếu', time: '2:00 PM', progress: 75 },
    { subject: 'Vật lý', topic: 'Ánh sáng', time: '4:30 PM', progress: 30 },
    { subject: 'Hóa học', topic: 'Hóa hữu cơ', time: '7:00 PM', progress: 0 },
  ];

  const achievements = [
    { name: 'Streak', icon: Target, value: '7 ngày', color: 'text-green-600' },
    { name: 'Câu đố', icon: Brain, value: '95%', color: 'text-blue-600' },
    { name: 'Người đã hỏi', icon: Users, value: '12 người', color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header userPoints={2450} userCoins={180} />
      
      <div className="p-4 space-y-6">
        {/* AI Study Recommendations */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center mb-3">
            <Brain className="text-purple-600 mr-2" size={20} />
            <h3 className="font-semibold text-gray-800">AI gợi ý</h3>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-3">
            <p className="text-sm text-gray-700 mb-2">Dựa trên mô hình học tập của bạn:</p>
            <p className="text-sm font-medium text-purple-700">Dựa vào bài tập thực hành giải tích ngày hôm nay. Khả năng ghi nhớ của bạn cao nhất vào lúc 2-4 giờ chiều.</p>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <Calendar className="text-blue-600 mr-2" size={20} />
              <h3 className="font-semibold text-gray-800">Lịch trình hôm nay</h3>
            </div>
            <button className="text-blue-600 text-sm font-medium">Xem tất cả</button>
          </div>
          
          <div className="space-y-3">
            {todayTasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{task.subject}</h4>
                  <p className="text-sm text-gray-600">{task.topic}</p>
                  <div className="flex items-center mt-1">
                    <Clock size={12} className="text-gray-400 mr-1" />
                    <span className="text-xs text-gray-500">{task.time}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className={`w-16 h-2 bg-gray-200 rounded-full overflow-hidden`}>
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 mt-1">{task.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-sm text-center">
                <Icon className={`mx-auto mb-2 ${achievement.color}`} size={24} />
                <p className="text-xs text-gray-600 mb-1">{achievement.name}</p>
                <p className={`font-bold ${achievement.color}`}>{achievement.value}</p>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-3">Nhanh</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl py-3 space-x-2 hover:from-blue-600 hover:to-blue-700 transition-all duration-200">
              <BookOpen size={20} />
              <span className="font-medium">Học ngay</span>
            </button>
            <button className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl py-3 space-x-2 hover:from-purple-600 hover:to-purple-700 transition-all duration-200">
              <TrendingUp size={20} />
              <span className="font-medium">Xem tiến độ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
