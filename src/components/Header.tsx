import React from 'react';
import { Bell, Search, Coins, Trophy } from 'lucide-react';

interface HeaderProps {
  userPoints: number;
  userCoins: number;
}

export const Header: React.FC<HeaderProps> = ({ userPoints, userCoins }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-b-3xl">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <h1 className="text-lg font-bold">stuIQ</h1>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">app</span>
          </div>
          <h2 className="text-sm font-medium">Xin chào, Hoàng Anh!</h2>
          <p className="text-blue-100 text-xs">Đã sẵn sàng học chưa bạn mình?</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-white/20 rounded-full px-3 py-1">
            <Trophy size={16} className="mr-1" />
            <span className="text-sm font-medium">{userPoints}</span>
          </div>
          <div className="flex items-center bg-white/20 rounded-full px-3 py-1">
            <Coins size={16} className="mr-1" />
            <span className="text-sm font-medium">{userCoins}</span>
          </div>
          <button className="relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
          </button>
        </div>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Tìm kiếm khóa học, chủ đề, gia sư,..."
          className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl py-3 pl-12 pr-4 placeholder-blue-100 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
        />
      </div>
    </div>
  );
};
