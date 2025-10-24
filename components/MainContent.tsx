
import React from 'react';
import type { EducationItem, ExperienceItem } from '../types';

interface MainContentProps {
  name: string;
  title: string;
  profile: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  stages: ExperienceItem[];
}

const Section: React.FC<{ title: string; icon: string; children: React.ReactNode }> = ({ title, icon, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 flex items-center">
      <i className={`fas ${icon} text-red-600 mr-4`}></i>
      <span className="border-b-4 border-red-600 pb-1 pr-4">{title}</span>
    </h2>
    {children}
  </section>
);

const ExperienceEntry: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <div className="mb-6 relative pl-8">
    <div className="absolute left-0 top-1.5 w-4 h-4 bg-gray-300 rounded-full border-4 border-white"></div>
    <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-300"></div>
    <p className="text-sm font-semibold text-red-700">{item.date}</p>
    <h4 className="text-lg font-bold">{item.title}</h4>
    <p className="text-md font-semibold text-gray-600 mb-2">{item.company}</p>
    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
      {item.responsibilities.map((resp, index) => (
        <li key={index}>{resp}</li>
      ))}
    </ul>
  </div>
);

const MainContent: React.FC<MainContentProps> = ({ name, title, profile, education, experience, stages }) => {
  return (
    <main className="w-full lg:w-2/3 p-8 lg:p-12">
      <header className="text-center lg:text-left mb-12">
        <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">{name}</h1>
        <p className="text-xl lg:text-2xl font-semibold text-red-600 mt-2">{title}</p>
      </header>

      <Section title="Profil" icon="fa-user">
        <p className="text-gray-700 leading-relaxed">{profile}</p>
      </Section>
      
      <Section title="Experience" icon="fa-briefcase">
        {experience.map((item, index) => (
          <ExperienceEntry key={index} item={item} />
        ))}
      </Section>

      <Section title="Education" icon="fa-graduation-cap">
        <div className="space-y-4">
          {education.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="w-24 text-sm font-semibold text-red-700">{item.year}</div>
              <div className="flex-1">
                <p className="font-bold">{item.description}</p>
                <p className="text-sm text-gray-600">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      <Section title="Stages" icon="fa-star">
        {stages.map((item, index) => (
          <ExperienceEntry key={index} item={item} />
        ))}
      </Section>

    </main>
  );
};

export default MainContent;
