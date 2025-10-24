import React from 'react';
import { cvData } from './constants';
import Sidebar from './Sidebar';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      <div className="container mx-auto p-4 lg:p-8">
        <div className="shadow-2xl bg-white lg:flex">
          <Sidebar
            contact={cvData.contact}
            languages={cvData.languages}
            skills={cvData.skills}
          />
          <MainContent
            name={cvData.name}
            title={cvData.title}
            profile={cvData.profile}
            education={cvData.education}
            experience={cvData.experience}
            stages={cvData.stages}
          />
        </div>
      </div>
    </div>
  );
};

export default App;