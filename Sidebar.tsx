import React from 'react';
import type { Contact, Language, SkillCategory } from './types';

interface SidebarProps {
  contact: Contact;
  languages: Language[];
  skills: SkillCategory[];
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold uppercase tracking-wider mb-4 pb-2 border-b-2 border-red-500 text-white">
      {title}
    </h3>
    {children}
  </div>
);

const LanguageBar: React.FC<{ language: Language }> = ({ language }) => (
  <div className="mb-3">
    <p className="text-sm font-medium text-white">{language.name}</p>
    <div className="bg-gray-600 rounded-full h-2.5 mt-1">
      <div
        className="bg-white h-2.5 rounded-full"
        style={{ width: `${language.level}%` }}
      ></div>
    </div>
  </div>
);

const Sidebar: React.FC<SidebarProps> = ({ contact, languages, skills }) => {
  return (
    <aside className="w-full lg:w-1/3 bg-gray-800 text-gray-300 p-8">
      <div className="flex flex-col items-center mb-8">
        <img
          src={contact.photoUrl}
          alt="Sirine Samoud"
          className="rounded-full w-48 h-48 object-cover border-4 border-red-500 shadow-lg"
        />
      </div>

      <Section title="Contact">
        <ul className="space-y-3 text-sm">
          <li className="flex items-center">
            <i className="fas fa-map-marker-alt w-6 text-red-400"></i>
            <span>{contact.location}</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-phone-alt w-6 text-red-400"></i>
            <span>{contact.phone}</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-envelope w-6 text-red-400"></i>
            <span>{contact.email}</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-car w-6 text-red-400"></i>
            <span>{contact.license}</span>
          </li>
        </ul>
      </Section>

      <Section title="Langues">
        {languages.map((lang) => (
          <LanguageBar key={lang.name} language={lang} />
        ))}
      </Section>

      <Section title="Compétences">
        {skills.map((category) => (
          <div key={category.title} className="mb-4">
            <h4 className="font-semibold text-red-400 mb-2">{category.title}:</h4>
            <ul className="list-disc list-inside text-sm space-y-1">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>
    </aside>
  );
};

export default Sidebar;