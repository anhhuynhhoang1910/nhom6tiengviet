import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomeScreen } from './components/HomeScreen';
import { StudyRoadmapScreen } from './components/StudyRoadmapScreen';
import { CommunityScreen } from './components/CommunityScreen';
import { TutorChatScreen } from './components/TutorChatScreen';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'roadmap':
        return <StudyRoadmapScreen />;
      case 'community':
        return <CommunityScreen />;
      case 'tutor':
        return <TutorChatScreen />;
      case 'profile':
        return (
          <div className="min-h-screen bg-gray-50 pb-20 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Profile Screen</h2>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          </div>
        );
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderScreen()}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;